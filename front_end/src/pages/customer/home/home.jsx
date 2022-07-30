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
import HomeNavBar from "../../../components/admin/HomeNavBar";
import RegisterCustomer from "../../../components/customer/RegisterCustomer/RegisterCustomer";
import HeroForm from "../../../components/customer/HeroForm";
import FindCarForm from "../../../components/customer/FindCarForm";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.mainWrapper}>
                    <div className={classes.topHeaderWrapper}>

                        <div className={classes.contact_container}>

                            <p style={{color: 'white', marginLeft: '23%'}}><h4>Call Us : 041 251 0152</h4></p>

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
                                >Login</Button>


                                <RegisterCustomer/>


                                <HiSearch className={classes.HiSearch}/>


                            </div>

                        </div>


                    </div>

                    <HomeNavBar/>
                </div>


                <div>
                    <div className={classes.body_container}>
                        <div>
                            <p style={{color: 'white', marginLeft: '18%', marginBottom: '34%',}}><b><h1>Reserve Car &
                                GET OFFER 50% OFF</h1></b></p>
                        </div>

                        <div className={classes.btn_reserve}>
                            <button type="button" className="btn btn-warning">Reserve Now</button>
                        </div>

                    </div>
                    <div className={classes.bottom_body}>
                        <HeroForm/>
                        {/*<FindCarForm/>*/}

                        <div className={classes.bottom_bodyInner}>
                            <h1><b>ABOUT</b></h1>
                        </div>

                        <div className={classes.bottom_carImageAbout}>
                            <img src="../../../assets/image/redCar.jpg" alt=""/>
                        </div>

                    </div>

                    <div  className={classes.bottom_body1}>

                    </div>
                </div>



            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Home)