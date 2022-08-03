import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "../../admin/HomeNavBar/style";
import Col from "react-bootstrap/Col";
import FindCarForm from "../FindCarForm";

class HeroForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props

        return (


            <div className={classes.hero__form}>
                <Container>
                    <Row className={classes.form__row}>

                        <Col lg="4" md="4">
                        </Col>

                        <Col lg="8" md="8" sm="12">
                            <FindCarForm/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default withStyles(styleSheet)(HeroForm)