
import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Logo from "../../../assets/icon/logo.jpg"
import Button from "@material-ui/core/Button";
import {TbHome} from "react-icons/tb";
import {GrUserManager} from "react-icons/gr";
import {AiFillCar} from "react-icons/ai";
import {FaUserEdit} from "react-icons/fa";
import {VscRequestChanges} from "react-icons/vsc";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import MenuListComposition from "../../../components/admin/MenuList";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminNavBar from "../../../components/admin/navBar";
import Divider from "@material-ui/core/Divider";
import axios from "../../../axios";
import CarService from "../../../services/CarService";

class DriverManage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (

            <div className={classes.mainContainer}>

                <div className={classes.divider_container1}></div>

                <AdminNavBar/>

                <div className={classes.divider_container2}></div>

                <div className={classes.form_Container}>

                    <div className={classes.form_backGround_left}>
                        <div className={classes.form_textFieldForm}>

                            <h4 style={{color: 'white'}}>MANAGE CARS</h4>

                        </div>

                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Car Details</h5>

                        </div>
                        <Divider/>

                        <div className={classes.textFieldContainer}>

                            <div>
                                <div>
                                    <TextField
                                        size={"small"}
                                        id="outlined-required"
                                        label="Vehical ID"
                                        variant="outlined"

                                        onChange={(e) =>{
                                            this.state.carDetails.vehicleId=e.target.value;
                                        }}


                                    />
                                </div>
                                <div>
                                    <TextField
                                        size={"small"}
                                        id="outlined-required"
                                        label="Type"
                                        variant="outlined"

                                        onChange={(e) =>{
                                            this.state.carDetails.vehicleType=e.target.value;
                                        }}



                                    />
                                </div>
                                <div>
                                    <TextField
                                        size={"small"}
                                        id="outlined-required"
                                        label="Num of Passengers"
                                        variant="outlined"

                                        onChange={(e) =>{
                                            this.state.carDetails.numofP=e.target.value;
                                        }}


                                    />
                                </div>

                            </div>


                            <Autocomplete
                                id="combo-box-demo"
                                size={"small"}

                                options={[
                                    {title: 'Auto'},
                                    {title: "Manual"}]}
                                getOptionLabel={(option) => option.title}
                                style={{width: 180}}
                                renderInput={(params) => <TextField {...params} label="Transmission type."
                                                                    variant="outlined"/>}

                                onChange={(event, value) =>
                                    this.state.carDetails.transmissionType =  value.title}

                            />
                            <Autocomplete
                                id="combo-box-demo"
                                size={"small"}

                                options={[
                                    {title: 'Diesel'},
                                    {title: "Petrol"}]}
                                getOptionLabel={(option) => option.title}
                                style={{width: 136}}
                                renderInput={(params) => <TextField {...params} label="Fuel type." variant="outlined"/>}

                                onChange={(event, value) =>
                                    this.state.carDetails.fuelType =  value.title}

                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Registration Number"
                                defaultValue="Hello World"
                                style={{width: 200}}
                                variant="outlined"

                                onChange={(e) =>{
                                    this.state.carDetails.registerNum=e.target.value;
                                }}

                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Color"
                                defaultValue="Hello World"
                                variant="outlined"
                                style={{width: 200}}

                                onChange={(e) =>{
                                    this.state.carDetails.color=e.target.value;
                                }}
                            />

                        </div>
                        <Divider/>
                        <div className={classes.formDividerTextContainer}>
                            <h5 style={{color: 'black'}}>Prices for the rent durations.</h5>
                            <h5 style={{color: 'black'}}>Free mileage for the price and duration.</h5>
                            <h5 style={{color: 'black'}}>Price for extra KM.</h5>
                        </div>
                        <Divider/>
                        <div className={classes.formTextField2Container}>

                            <TextField
                                style={{width: '17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="Price Of Daily"
                                variant="outlined"

                                onChange={(e) =>{
                                    this.state.carDetails.pricesForDaily=e.target.value;
                                }}
                            />
                            <TextField
                                style={{width: '17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="Price Of Monthly"
                                variant="outlined"

                                onChange={(e) =>{
                                    this.state.carDetails.pricesForMonthly=e.target.value;
                                }}
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Km"
                                variant="outlined"

                                onChange={(e) =>{
                                    this.state.carDetails.freeMileage=e.target.value;
                                }}
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Rs/="
                                variant="outlined"

                                onChange={(e) =>{
                                    this.state.carDetails.priceForExtraKm=e.target.value;
                                }}
                            />
                        </div>


                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Front View</h5>
                            <h5 style={{color: 'black'}}>Back View</h5>
                            <h5 style={{color: 'black'}}>Side View</h5>
                            <h5 style={{color: 'black'}}>Interior</h5>
                        </div>
                        <Divider/>


                        <div className={classes.imageContainer}>

                            <div className={classes.imageDiv}
                                 style={{
                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '75%',
                                     backgroundImage:"url(" +this.state.frontView+ ")",
                                     backgroundSize: 'cover'
                                 }}

                            >
                            </div>


                            <div className={classes.imageDiv}
                                 style={{
                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '75%',
                                     backgroundImage:"url(" +this.state.backView+ ")",
                                     backgroundSize: 'cover'
                                 }}


                            >

                            </div>
                            <div className={classes.imageDiv}

                                 style={{
                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '75%',
                                     backgroundImage:"url(" +this.state.sideView+ ")",
                                     backgroundSize: 'cover'
                                 }}

                            >

                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '75%',
                                     backgroundImage:"url(" +this.state.interiorView+ ")",
                                     backgroundSize: 'cover'
                                 }}

                            >
                            </div>

                        </div>


                        <div className={classes.uploadButtonContainer}>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file01"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        frontImage: e.target.files[0],
                                        frontView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}



                            />
                                <label htmlFor="contained-button-file01">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>

                            </div>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file02"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        backImage: e.target.files[0],
                                        backView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file02">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>

                            </div>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file03"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        sideImage: e.target.files[0],
                                        sideView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file03">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>

                            </div>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file04"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        interiorImage: e.target.files[0],
                                        interiorView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file04">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.form_backGround_right}>
                        <div className={classes.title_container}>
                            <div className={classes.form_textFieldForm2}>
                                <h4 style={{color: 'white'}}>CAR STATE</h4>
                            </div>
                        </div>


                        <div className={classes.sideButton_container}>

                            <div className={classes.search_container}>
                                <TextField
                                    label="Search Here"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"

                                    style={{borderRadius : '20px',width: '70%'}}
                                />
                                <Button variant="outlined" style={{color : 'green'}}>
                                    Search
                                </Button>
                            </div>
                            <Divider/>

                            <div className={classes.button_container}>

                                <Button variant="outlined" style={{color : 'green' , width : '30%'}}>
                                    Save
                                </Button>

                                <Button variant="outlined" style={{color : 'blue', width : '30%'}}>
                                    Update
                                </Button>

                                <Button variant="outlined" style={{color : 'red' , width : '30%'}}>
                                    Delete
                                </Button>


                            </div>

                            <div className={classes.clearButtonContainer}>
                                <Button variant="outlined" style={{color : 'back' , width : '95%'}}>
                                    Clear All
                                </Button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(DriverManage)
