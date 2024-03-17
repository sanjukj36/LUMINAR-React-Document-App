import { Box, Button, Card, CardActions, CardContent, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DocumentDataService from "../services/document.services";
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function DocumentList() {
    const [open, setOpen] = useState(false);
    const [documentId, setDocumentId] = useState(null);
    const [documentContent, setDocumentContent] = useState('');
    const [documents, setDocuments] = useState([]);


    useEffect(() => {
        getDocuments();
    }, []);

    const getDocuments = async () => {
        const data = await DocumentDataService.getAllDocument();
        setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    let navigate = useNavigate();

    const handleOpen = (id) => {
        navigate(`/edit/${id}`)
        setDocumentId(id);
        setOpen(true);
    };

  

    const handleDelete = async (id) => {
        await DocumentDataService.deleteDocument(id);
        getDocuments();
    };


    //     const getID = (id) => {
    //       navigate(`/quill/${id}`)
    // }

   
    return (
        <div className='container'>
            <div className='row m-3' style={{ marginTop: '100px' }}>
                <div className='col' sm={4} md={4} lg={4} xl={4}>
                    {documents?.map((doc, index) => (
                        <div key={index} className='mb-5 card border-primary ms-2'>
                            <h1 className='mt-2 ms-3' >{doc.documentName}</h1>
                            <CardActions>
                                    <Button size="small" onClick={() => handleOpen(doc.id)}>
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </Button>
                                    <Button size="small" onClick={() => handleDelete(doc.id)}>
                                        <i class="fa-solid fa-trash text-danger"></i>

                                    </Button>
                                </CardActions>
                            <Card className='mt-2' >
                                <CardContent>
                                    <Typography variant="h3" sx={{ mb: 2 }} color="text.primary">
                                        {/* {doc.documentName} */}
                                    </Typography>
                                    <Typography variant="body2"
                                        dangerouslySetInnerHTML={{ __html: doc.documentContent }}>

                                    </Typography>
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small" onClick={() => handleOpen(doc.id)}>
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </Button>
                                    <Button size="small" onClick={() => handleDelete(doc.id)}>
                                        <i class="fa-solid fa-trash text-danger"></i>

                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                    ))}
                    {/* <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <TextField
                                id="outlined-basic"
                                label="Add Title"
                                variant="outlined"
                                value={documentName}
                                onChange={(e) => setDocumentName(e.target.value)}
                            />
                            <TextField
                                className='mt-4'
                                id="outlined-multiline-static"
                                label="Content"
                                multiline
                                rows={4}
                                value={documentContent}
                                onChange={(e) => setDocumentContent(e.target.value)}
                            />
                            <Button sx={{ mt: 2 }} className='border rounded' onClick={handleUpdate}>
                                Update
                            </Button>
                        </Box>
                    </Modal> */}
                </div>
            </div>
        </div>
    );
}

export default DocumentList;
