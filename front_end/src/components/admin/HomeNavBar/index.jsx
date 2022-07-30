import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";


class HomeNavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes}=this.props

        return(
                <Navbar bg="black" variant="dark">
                    <Container className={classes.nav_home}>
                        <Navbar.Brand href="#home"><h1>Home</h1></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><h1>Car</h1></Nav.Link>
                            <Nav.Link href="#features"><h1>About</h1></Nav.Link>
                            <Nav.Link href="#pricing"><h1>Services</h1></Nav.Link>
                            <Nav.Link href="#pricing"><h1>Contact</h1></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
        )
    }
}
export default withStyles(styleSheet)(HomeNavBar)