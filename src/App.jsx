// import { Button, Card, Col, Container, FloatingLabel, Form, FormControl, Modal, Row } from 'react-bootstrap'
import { Button, TextField } from '@mui/material';
import './App.css'
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Editor from '../Pages/Editor';



function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (


    <>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/edit/:id"} element={<Editor/>} />


        {/* <Route path={"/quill/:id"} element={<RQuill database={database}/>} /> */}
      </Routes>

      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {/* <Container>
        <h1 className='mt-5 text-center text-body'>DOCUMENT APP</h1>
        <div className='mt-4 d-flex justify-content-center align-items-center'>

          <button type="button" onClick={() => setShow(true)} className="btn btn-outline-success">+ ADD A DOCUMENT</button>
        </div>



        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Document Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
              <FloatingLabel controlId="floatingPassword" label="Add File Name">
                <Form.Control type="text" placeholder="Add File Name" />
              </FloatingLabel>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Click here to create file</Button>
          </Modal.Footer>
        </Modal>



        <div className='mt-5'>
          <Card style={{ width: '18rem' }} className='shadow'>
            <Card.Body>
              <Card.Title> 
                 
                 <div className='d-flex'>
                    <h4>Card Title</h4>
                    <i class="fa-regular fa-pen-to-square ms-5"></i>
                    <i class="fa-solid fa-trash  ms-5"></i>
                 </div>
              </Card.Title>
              <hr/>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>




      </Container > */}

    </>
  )
}

export default App
