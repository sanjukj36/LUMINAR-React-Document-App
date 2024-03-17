import { Alert, Box, Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';
import DocumentDataService from "../services/document.services"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddDocument () {

    const [documentName, setDocumentName] = useState("");
    const [documentContent, setDocumentContent] = useState("");


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

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    let navigate = useNavigate();

    const [message, setMessage] = useState({ error: false, msg: "" });

    const handelSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (documentName === "") {
            toast.warning("NO Document Created fill properly!!!");
            return;
        }
        const newDocument = {
            documentName,
            documentContent
        };
        console.log(newDocument);
    
        try {
            await DocumentDataService.addDocuments(newDocument);
            handleClose();
            toast.success(`${documentName} Document created successfully!!!`);
            navigate(`/`)
        } catch (err) {
            toast.error(`${documentName} Document cant created DataBase problem`);
        }
    
        setDocumentName("");
        setDocumentContent("");
    };
    


    return (
        <div className='mt-4'>

            <Button className='border rounded btn-outline-success' onClick={handleOpen}><span className='me-2'>
                {/* <PlusIcon /> */}
            </span> ADD A DOCUMENT</Button>

            <div className='mt-5'>

                {message?.msg && (
                    <Alert
                        variant={message?.error ? "danger" : "success"}
                        dismissible
                        onClose={() => setMessage("")}
                    >
                        {message?.msg}
                    </Alert>
                )}
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                title="title"
                setTitle={setDocumentName}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >

                <Box className='border rounded d-flex flex-column' sx={style}>

                    <TextField id="outlined-basic" label="Add File Name" variant="outlined" value={documentName} onChange={(e) => setDocumentName(e.target.value)} />

                    {/* <Button sx={{ mt: 2 }}  className='border rounded' >Click here to Create A  {documentName} File</Button> */}
                    <button onClick={handelSubmit} class="btn btn-lg btn-primary mt-3" type="button">Click Here To Create A  {documentName} File</button>

                </Box>
            </Modal>

            <ToastContainer
                position='top-center'
                theme='colored'
                autoClose={2000}
            />
        </div>
    )
}

export default AddDocument