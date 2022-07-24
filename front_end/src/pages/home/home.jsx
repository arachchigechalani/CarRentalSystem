import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "./style";
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai";
import {FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import Button from "@material-ui/core/Button";
import {TbPower} from "react-icons/tb";
import {RiAddCircleFill} from "react-icons/ri";
import {HiSearch} from "react-icons/hi";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FindCarForm from "./style.css"
import HomeNavBar from "../../components/admin/HomeNavBar";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.topHeaderWrapper}>

                    <div className={classes.contact_container}>

                        <p style={{color: 'white', marginLeft: '23%'}}><h3>Call Us : 041 251 0152</h3></p>

                    </div>

                    <div className={classes.after}></div>


                    <div className={classes.header_right}>

                        <ul className={classes.sm_icons_left}>
                            <li><AiFillFacebook style={{color: 'white', width: '41px', height: '32px'}}/></li>
                            <li><FaTwitterSquare style={{color: 'white', width: '41px', height: '30px'}}/></li>
                            <li><AiOutlineInstagram style={{color: 'white', width: '41px', height: '35px'}}/></li>
                            <li><FaLinkedin style={{color: 'white', width: '41px', height: '30px'}}/></li>


                        </ul>


                        <div className={classes.right_icons}>

                            <section className={classes.spacing_div}></section>

                            <Button className={classes.loginButton}

                                    startIcon={<TbPower/>}

                                    onPointerEnter={(e) => {
                                        e.target.style.color = 'white'
                                        console.log("ok")
                                    }}

                                    onPointerLeave={(e) => {
                                        e.target.style.color = "#898"
                                        console.log("cancel")
                                    }}
                            ><h4>Login</h4></Button>

                            <Button className={classes.registerButton}

                                    startIcon={<RiAddCircleFill/>}

                                /*onMouseEnter={(e) =>{
                                    e.target.style.color='white'
                                    console.log("ok")
                                }}
*/
                                /*onMouseLeave={(e) =>{
                                    e.target.style.color="#898"
                                    console.log("cancel")
                                }}*/
                            ><h4>Register</h4></Button>


                            <HiSearch className={classes.HiSearch}/>


                        </div>

                    </div>


                </div>

                <HomeNavBar/>

                <div className={classes.body_container}>
                    {/*<div className={classes.imgWhiteCar}>
                        <img src="../../assets/image/whiteCar.jpg" alt=""/>
                    </div>*/}

                    {/*<div className={classes.divider_container}></div>*/}

                    <div className={classes.text_container}>
                        <h1><b>Reserve Car & GET OFFER 50% OFF</b></h1>
                    </div>

                    <div className={classes.btn_reserveNow}>
                        <button type="button" className="btn btn-warning">Reserve Now</button>
                    </div>

                </div>
                >

                {/*<div className="hero__form">
                    <Container>
                        <Row className="form__row">
                            <Col lg="4" md="4">
                                <div className="find__cars-left">
                                    <h2>Find your best car here</h2>
                                </div>
                            </Col>

                            <Col lg="8" md="8" sm="12">
                                <FindCarForm />
                            </Col>
                        </Row>
                    </Container>
                </div>
*/}
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Home)