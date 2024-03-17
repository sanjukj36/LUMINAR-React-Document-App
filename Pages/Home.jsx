import { Box, Button, Card, CardActions, CardContent, Modal, TextField, Typography } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AddDocument from '../src/components/AddDocument';
import DocumentList from '../src/components/DocumentList';


function Home() {
   
  
    
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center mt-5 '>
                <Typography variant="h2" component="h2" style={{ textShadow: '2px 2px 4px #000000' }}>DOC APP</Typography>
                <AddDocument />
            </div>

            <DocumentList />
          
           
        </>
    )
}

export default Home