import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import DocumentDataService from '../src/services/document.services';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Button, Card, CardActions, CardContent, Modal, TextField, Typography } from '@mui/material';



function Editor() {
    const { id } = useParams();
    const [documents, setDocuments] = useState([]);
    const [content, setContent] = useState('');
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        const getDocuments = async () => {
            const data = await DocumentDataService.getAllDocument();
            setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getDocuments();
    }, [id]);

    useEffect(() => {
        const selectedDocument = documents.find((doc) => doc.id === id);
        if (selectedDocument) {
            setContent(selectedDocument.documentContent);
        }
    }, [documents, id]);

    useEffect(() => {
        if (quill) {
            quill.root.innerHTML = content;
            quill.on('text-change', (delta, oldDelta, source) => {
                if (source === 'user') {
                    setContent(quill.root.innerHTML);
                }
            });
        }
    }, [quill, content]);

    const navigate = useNavigate();

    const handleUpdate = async () => {
        if (content) {
            const updatedDocument = {
                documentContent: content
            };
            await DocumentDataService.updateDocument(id, updatedDocument);
            navigate('/');
        } else {
            navigate('/');
            alert('Nothing Updated');
        }
    };

    return (
        <>
            <div>
                {documents
                    ?.filter(doc => doc.id === id)
                    .map((doc, index) => (

                            <div key={index} className='text-center mt-5'>
                                
                                <h4><u>{doc.documentName}</u></h4>

                                {/* Render your editor component */}
                            </div>
                            
                      
                    ))}
                {/* Render your editor component */}
            </div>

            <div className='container d-flex justify-content-center mt-4' >

                <div style={{ width: 1000, height: 400,}}>
                    <div ref={quillRef} />

                    <div class="col text-center mt-4">
                        <button className="btn border rounded btn-outline-success" onClick={handleUpdate} >Update Document</button>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editor