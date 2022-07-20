import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


function BasicExample() {
    return (
        <Form>
            <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
export default BasicExample;
























/*
class CarAdd extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (

            //Add Background Image








            /!*<div>
                            <Button variant="secondary">Secondary</Button>
            </div>*!/


            <div>
                <Form>
                    <div className="col-1">



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
                        Submit
                    </Button>

                    </div>
                </Form>
            </div>






        )
    }
}

*/
/*
export default withStyles(styleSheet)(CarAdd)*/
