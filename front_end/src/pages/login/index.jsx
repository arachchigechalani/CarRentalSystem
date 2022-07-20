import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main_div}>
                <div className={'row-16'}>

                    <div className={'col lg-16'}>
                        <div className={classes.carImage}>
                            <img src="../../assets/image/blackCar.jpg" alt=""/>
                        </div>
                    </div>


                    <div className={'col lg-8'}>

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