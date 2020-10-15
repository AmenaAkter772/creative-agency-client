import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    const [admin, setAdmin]=useState('')
    const addAdminHandler=(e)=>{
        e.preventDefault()
        fetch('https://secure-inlet-92417.herokuapp.com/add-admin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({admin})
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }
    return (

        <div>
            <div className="container row d-flex pt-5 mt-5">
            <div className="col-md-3 ml-5 pl-5">
                <h4>Logo Here</h4>
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-7">
                <h4 className='mt-4 ml-5'>Make Admin</h4>
                <Container className='m-5 add-service-form-container'>
                    <Form onSubmit={addAdminHandler}>
                        <Row xs={12} className='p-4 align-items-center'>
                            <Col md={5} >
                                <Form.Label>Email</Form.Label>
                                <Form.Group controlId="formBasicText">
                                <Form.Control onBlur={e=>setAdmin(e.target.value)} type="text" placeholder="jon@gmail.com" />
                                
                                </Form.Group>
                            </Col>
                           <Col md={2} >
                           <Button  className='float-left float-left btn-sm' style={{background:'#009444',marginTop:'15px'}} type="submit">
                                    Submit
                            </Button>
                           </Col>
                        </Row>
                        </Form>
                    </Container>
                </div>
            </div>
            </div>
    );
};

export default MakeAdmin;