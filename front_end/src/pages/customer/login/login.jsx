import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import {Button, Col, Form, Modal, Row} from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main_div}>


                <div className='container'>
                    <Button className={classes.btnModal} variant="primary" onClick={this.handleShow}>
                        click to register
                    </Button>


                    <Modal show={this.props} onHide={this.props.onHide}
                           {...this.props}
                           size="lg"
                           aria-labelledby="contained-modal-title-v center"
                           centered
                    >


                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-v center">
                                Modal heading
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row>
                                <Col lg={12}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="custId">
                                            <Form.Label>Customer Id</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="custId"
                                                required
                                                placeholder="Customer Id"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="custEmail">
                                            <Form.Label>Customer Email</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="custEmail"
                                                required
                                                placeholder="Customer Email"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="custNIC">
                                            <Form.Label>Customer NIC</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="custNIC"
                                                required
                                                placeholder="Customer NIC"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="custLicence">
                                            <Form.Label>Customer Driving Licence</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="custLicence"
                                                required
                                                placeholder="Customer Driving Licence"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="custAddress">
                                            <Form.Label>Customer Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="custAddress"
                                                required
                                                placeholder="Customer Address"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="custContactNo">
                                            <Form.Label>Customer Contact Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="custContactNo"
                                                required
                                                placeholder="Customer Contact Number"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="userName">
                                            <Form.Label>UserName</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="userName"
                                                required
                                                placeholder="UserName"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Password" class='mb-3'>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Password"
                                                required
                                                placeholder="Password"
                                            />
                                        </Form.Group>


                                    </Form>
                                </Col>
                            </Row>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.onHide}>
                                Submit
                            </Button>
                            <Button variant="danger" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={this.props.onHide}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    <div>

                        <div className={classes.carImage}>
                            <img src="../../../assets/image/blackCar.jpg" alt=""/>
                        </div>


                        <div className={classes.form_container}>
                            <h1 className={classes.loginName}>Login</h1>
                            <hr/>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>

                        </div>
                    </div>
                </div>

            </div>


        );
    }
}


export default withStyles(styleSheet)(Login)