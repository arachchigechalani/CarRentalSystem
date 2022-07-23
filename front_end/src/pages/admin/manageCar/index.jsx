
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

class ManageCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,

            frontView:null,
            backView:null,
            sideView:null,
            interiorView:null,

            carDetails :{
                vehicleId : '',
                vehicleType : '',
                numofP : '',
                transmissionType : '',
                fuelType :'',
                registerNum : '',
                color : '',
                pricesForDaily : '',
                pricesForMonthly : '',
                freeMileage : '',
                priceForExtraKm : '',
            }
        }
    }




    render() {

        const top100Films = [
            {title: 'Auto'},
            {title: "Manual"}];

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

                        <div className={classes.formTextFieldContainer}>

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


                        <div className={classes.search_container}>
                            <Button variant="contained" color="success"
                                    onClick={async () => {

                                        var carDetails = {
                                            vehicleId : this.state.carDetails.vehicleId,
                                            brand  : this.state.carDetails.vehicleType,
                                            numOfPassenger : this.state.carDetails.numofP,
                                            transmissionType : this.state.carDetails.transmissionType,
                                            fuelType : this.state.carDetails.fuelType,
                                            priceOfRentDurationDaily : this.state.carDetails.pricesForDaily ,
                                            priceOfRentDurationMonthly : this.state.carDetails.pricesForMonthly,
                                            freeMileageForPriceAndDuration : this.state.carDetails.freeMileage,
                                            priceOfExtraKm : this.state.carDetails.priceForExtraKm,
                                            registerNumber : this.state.carDetails.registerNum,
                                            color : this.state.carDetails.color,
                                            state : 'Parking'
                                        }

                                        console.log(this.state.carDetails.type);

                                        axios({
                                            url: 'car/addCar',
                                            method: 'post',
                                            contentType : 'application/json',
                                            data: carDetails,
                                        })
                                            .then(function (response) {
                                                console.log(response);
                                                alert("Car  added Complete");
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                                alert("Car  add fail..")
                                            });





                                        var bodyFormData = new FormData();

                                        bodyFormData.append('param' , this.state.frontImage);
                                        bodyFormData.append('param' , this.state.backImage);
                                        bodyFormData.append('param' , this.state.sideImage);
                                        bodyFormData.append('param' , this.state.interiorImage);

                                        axios({
                                            method: 'post',
                                            url: 'car/addCarImage?carId=Car001',
                                            headers: { "Content-Type": "multipart/form-data" },
                                            data : bodyFormData


                                        })
                                            .then(function (response) {
                                                console.log(response);
                                                alert("Car Image added Complete");
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                                alert("Car image add fail..")
                                            });
                                    }}
                            >
                                Upload Images


                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(ManageCar)
