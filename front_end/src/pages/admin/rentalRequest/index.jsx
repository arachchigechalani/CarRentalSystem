import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminNavBar from "../../../components/admin/navBar";
import Divider from "@material-ui/core/Divider";
import FormGroup from "@material-ui/core/FormGroup";

class RentalRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.mainContainer}>
                <AdminNavBar/>
                <div className={classes.state_Bar_container}></div>
                <div className={classes.form_Container}>
                    <div className={classes.form_backGround}>
                        <div className={classes.form_textFieldForm}>
                            <h4 style={{color: 'white'}}>RENTAL REQUEST</h4>
                        </div>
                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Request Details</h5>
                        </div>
                        <Divider/>
                        <div className={classes.formTextFieldContainer}>
                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Car ID"
                                variant="outlined"/>
                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Customer ID"
                                variant="outlined"/>
                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Request ID"
                                variant="outlined"/>
                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Payment"
                                variant="outlined"/>
                        </div>
                        <Divider/>
                        <div className={classes.formDividerTextContainer}>
                            <h5 style={{color: 'black'}}>Request Date</h5>
                            <h5 style={{color: 'black'}}>Request Time</h5>
                            <h5 style={{color: 'black'}}>PickUp Date</h5>
                            <h5 style={{color: 'black'}}>PickUp Time</h5>
                        </div>
                        <Divider/>

                        <div className={classes.formTextField2Container}>

                            <FormGroup className="form__group">
                                <input type="date" placeholder="Journey date" required/>
                            </FormGroup>

                            <FormGroup className="form__group">
                                <input
                                    className="journey__time"
                                    type="time"
                                    placeholder="Journey time"
                                    required
                                />
                            </FormGroup>

                            <FormGroup className="form__group">
                                <input type="date" placeholder="Journey date" required/>
                            </FormGroup>

                            <FormGroup className="form__group">
                                <input
                                    className="journey__time"
                                    type="time"
                                    placeholder="Journey time"
                                    required
                                />
                            </FormGroup>
                        </div>


                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Front View</h5>
                        </div>
                        <Divider/>

                        <div className={classes.imageContainer}>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.frontImage + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                        </div>



                        <div className={classes.uploadButtonContainer}>
                            <div><input
                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file01"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        frontImage: URL.createObjectURL(e.target.files[0])
                                    })
                                }}/>
                                <label htmlFor="contained-button-file01">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.search_container}>
                        <Button variant="contained" color="success" > Upload Slip Images </Button>
                        <form className="search-area">
                            <input type="text" name="search" placeholder="Enter Id" title="Search Item"/>
                            <button className="btn-search" name="Enter Id" title="Search">Search </button>
                        </form>

                        <Button variant="contained" color="success" > Update Details </Button>
                    </div>
                </div>
            </div>

        );
    }
}

export default withStyles(styleSheet)(RentalRequest)