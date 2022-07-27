import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Logo from "../../../assets/icon/logo.jpg"
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminNavBar from "../../../components/admin/navBar";
import Divider from "@material-ui/core/Divider";
import axios from "../../../axios";
import CarService from "../../../services/CarService";
import Table from 'react-bootstrap/Table';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ViewAllCarPopUpTable from "../../../components/admin/ViewAllCarPopUpTable";

class ManageCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,

            frontView: null,
            backView: null,
            sideView: null,
            interiorView: null,

            carDetails: {
                vehicleId: '',
                vehicleType: '',
                numofP: '',
                transmissionType: '',
                fuelType: '',
                registerNum: '',
                color: '',
                pricesForDaily: '',
                pricesForMonthly: '',
                freeMileage: '',
                priceForExtraKm: '',
            }
        }
    }

    changeStateCarDetails(vehicleId,vehicleType,numofP,transmissionType,fuelType,registerNum,color,pricesForDaily,pricesForMonthly,freeMileage,priceForExtraKm,frontImage,backImage,sideImage,interiorImage){
        this.setState({
            carDetails : {
                vehicleId : vehicleId,
                vehicleType : vehicleType,
                numofP : numofP,
                transmissionType : transmissionType,
                fuelType :fuelType,
                registerNum : registerNum,
                color : color,
                pricesForDaily : pricesForDaily,
                pricesForMonthly : pricesForMonthly,
                freeMileage : freeMileage,
                priceForExtraKm : priceForExtraKm,
            },
            frontView : frontImage,
            backView : backImage,
            sideView : sideImage,
            interiorView : interiorImage,

        })
    }



    addCarImage = async (carId) => {

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.frontImage);
        bodyFormData.append('param', this.state.backImage);
        bodyFormData.append('param', this.state.sideImage);
        bodyFormData.append('param', this.state.interiorImage);

        let res = await CarService.addCarImage(bodyFormData, carId);
        if (res.data.code === 200) {
            alert(res.data.message)
        } else {
            alert(res.data.message);
        }

    }

    addCar = async () => {

        var carDetails = {
            vehicleId: this.state.carDetails.vehicleId,
            brand: this.state.carDetails.vehicleType,
            numOfPassenger: this.state.carDetails.numofP,
            transmissionType: this.state.carDetails.transmissionType,
            fuelType: this.state.carDetails.fuelType,
            priceOfRentDurationDaily: this.state.carDetails.pricesForDaily,
            priceOfRentDurationMonthly: this.state.carDetails.pricesForMonthly,
            freeMileageForPriceAndDuration: this.state.carDetails.freeMileage,
            priceOfExtraKm: this.state.carDetails.priceForExtraKm,
            registerNumber: this.state.carDetails.registerNum,
            color: this.state.carDetails.color,
            state: 'Parking'
        }


        let res = await CarService.addCar(carDetails);
        if (res.data.code == 200) {
            alert(res.data.message);

            this.addCarImage(carDetails.vehicleId);

        } else {
            alert(res.data.message);
        }


    }

    updateCar=async () =>{
        var carUpdateDetails = {
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

        let res =await CarService.updateCar(carUpdateDetails);
        if (res.status===200){
            let front=this.state.frontImage;
            let back=this.state.backImage;
            let side=this.state.sideImage;
            let interior=this.state.interiorImage;
            let list=[front,back,side,interior]
            let viewList=["Front","Back","Side","Interior"]

            for (var i=0; i<list.length; i++){
                if (list[i] != null){
                    let formData = new FormData();
                    formData.append('carImage',list[i]);
                    await this.updateCarImage(formData, carUpdateDetails.vehicleId, viewList[i]);
                }
            }

            alert('Car Details Update SuccessFull..')
        }else {
            alert("Car update Fail..")
        }

    }

    updateCarImage=async (data,carId,view) =>{
        let response =await CarService.updateCarImage(data,carId,view);
        if (response.status!=200){
            alert("Car Image Update Fail")
        }
    }

    deleteCar=async () =>{

        let res =await CarService.deleteCar(this.state.carDetails.vehicleId);
        if (res.status==200){

            let res = await CarService.deleteCarImages(this.state.carDetails.vehicleId);
              if (res.data.code == 200) {
                alert("Car Deleted Success")
                this.clearAllState()

              }
        }else {
            alert("Car Delete Fail...")
        }

    }


    clearAllState=() =>{
        this.setState({
            frontImage: null,
            backImage : null,
            sideImage : null,
            interiorImage : null,

            frontView : null,
            backView : null,
            sideView : null,
            interiorView : null,

            carDetails : {
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

        })
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


                        <Row>
                            <Col>
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
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={this.state.carDetails.vehicleId}
                                                    onChange={(e) => {
                                                        let formData = this.state.carDetails
                                                        formData.vehicleId = e.target.value
                                                        this.setState({ formData })
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    size={"small"}
                                                    id="outlined-required"
                                                    label="Type"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={this.state.carDetails.vehicleType}
                                                    onChange={(e) => {
                                                        let formData = this.state.carDetails
                                                        formData.vehicleType = e.target.value
                                                        this.setState({ formData })
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    size={"small"}
                                                    id="outlined-required"
                                                    label="Num of Passengers"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={this.state.carDetails.numofP}
                                                    onChange={(e) => {
                                                        let formData = this.state.carDetails
                                                        formData.numofP = e.target.value
                                                        this.setState({ formData })
                                                    }}
                                                />
                                            </div>

                                        </div>


                                        {/*<Autocomplete
                                            id="combo-box-demo"
                                            size={"small"}

                                            options={[
                                                {title: 'Auto'},
                                                {title: "Manual"}]}
                                            getOptionLabel={(option) => option.title}
                                            style={{width: 180}}
                                            renderInput={(params) => <TextField {...params} label="Transmission type."
                                                                                                                                                                                            variant="outlined"/>}
                                            value={this.state.carDetails.transmissionType}
                                            onChange={(e) => {
                                                this.setState({
                                                    carDetails : {
                                                        transmissionType : e.target.value
                                                    }
                                                })
                                            }}
                                        />*/}

                                        <TextField
                                            label="Transmission type." variant="outlined" value={this.state.carDetails.transmissionType}
                                            size={"small"}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                            onChange={(e) => {
                                                let formData = this.state.carDetails
                                                formData.transmissionType = e.target.value
                                                this.setState({ formData })
                                            }}
                                        />


                                        {/*<Autocomplete
                                            id="combo-box-demo"
                                            size={"small"}

                                            options={[
                                                {title: 'Diesel'},
                                                {title: "Petrol"}]}
                                            getOptionLabel={(option) => option.title}
                                            style={{width: 180}}
                                            renderInput={(params) => <TextField {...params}
                                            label="Fuel type."
                                            variant="outlined"/>}
                                            value={this.state.carDetails.fuelType}
                                            onChange={(e) => {
                                                this.setState({
                                                    carDetails : {
                                                        fuelType : e.target.value
                                                    }
                                                })
                                            }}
                                        />*/}

                                        <TextField
                                            label="Fuel type." variant="outlined" value={this.state.carDetails.fuelType}
                                            size={"small"}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                            onChange={(e) => {
                                                let formData = this.state.carDetails
                                                formData.fuelType = e.target.value
                                                this.setState({ formData })
                                            }}
                                        />



                                        <TextField
                                            size={"small"}
                                            id="outlined-required"
                                            label="Registration Number"
                                            defaultValue="Hello World"
                                            style={{width: 200}}
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={this.state.carDetails.registerNum}
                                            onChange={(e) => {
                                                let formData = this.state.carDetails
                                                formData.registerNum = e.target.value
                                                this.setState({ formData })
                                            }}

                                        />

                                        <TextField
                                            size={"small"}
                                            id="outlined-required"
                                            label="Color"
                                            defaultValue="Hello World"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            style={{width: 200}}
                                            value={this.state.carDetails.color}
                                            onChange={(e) => {
                                                let formData = this.state.carDetails
                                                formData.color = e.target.value
                                                this.setState({ formData })
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
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={this.state.carDetails.pricesForDaily}
                                            onChange={(e) => {
                                                let formData = this.state.carDetails
                                                formData.pricesForDaily = e.target.value
                                                this.setState({ formData })
                                            }}
                                        />
                                        <TextField
                                            style={{width: '17%'}}
                                            size={"small"}
                                            id="outlined-required"
                                            label="Price Of Monthly"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={this.state.carDetails.pricesForMonthly}
                                            onChange={(e) => {
                                                let formData = this.state.carDetails
                                                formData.pricesForMonthly = e.target.value
                                                this.setState({ formData })
                                            }}
                                        />

                                        <TextField

                                            size={"small"}
                                            id="outlined-required"
                                            label="Km"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={this.state.carDetails.freeMileage}
                                            onChange={(e) => {
                                                let formData = this.state.carDetails
                                                formData.freeMileage = e.target.value
                                                this.setState({ formData })
                                            }}
                                        />

                                        <TextField

                                            size={"small"}
                                            id="outlined-required"
                                            label="Rs/="
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={this.state.carDetails.priceForExtraKm}
                                            onChange={(e) => {
                                                let formData = this.state.carDetails
                                                formData.priceForExtraKm = e.target.value
                                                this.setState({ formData })
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
                                                 display: 'flex',
                                                 alignItems: 'center',
                                                 justifyContent: 'center',
                                                 height: '75%',
                                                 backgroundImage: "url(" + this.state.frontView + ")",
                                                 backgroundSize: 'cover'
                                             }}

                                        >
                                        </div>


                                        <div className={classes.imageDiv}
                                             style={{
                                                 display: 'flex',
                                                 alignItems: 'center',
                                                 justifyContent: 'center',
                                                 height: '75%',
                                                 backgroundImage: "url(" + this.state.backView + ")",
                                                 backgroundSize: 'cover'
                                             }}


                                        >

                                        </div>
                                        <div className={classes.imageDiv}

                                             style={{
                                                 display: 'flex',
                                                 alignItems: 'center',
                                                 justifyContent: 'center',
                                                 height: '75%',
                                                 backgroundImage: "url(" + this.state.sideView + ")",
                                                 backgroundSize: 'cover'
                                             }}

                                        >

                                        </div>
                                        <div className={classes.imageDiv}
                                             style={{
                                                 display: 'flex',
                                                 alignItems: 'center',
                                                 justifyContent: 'center',
                                                 height: '75%',
                                                 backgroundImage: "url(" + this.state.interiorView + ")",
                                                 backgroundSize: 'cover'
                                             }}

                                        >
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
                                                    frontImage: e.target.files[0],
                                                    frontView: URL.createObjectURL(e.target.files[0])
                                                })
                                            }}


                                        />
                                            <label htmlFor="contained-button-file01">
                                                <Button variant="contained" color="primary" component="span">
                                                    Upload
                                                </Button>
                                            </label>

                                        </div>

                                        <div><input

                                            style={{display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file02"
                                            multiple
                                            type="file"
                                            onChange={(e) => {
                                                this.setState({
                                                    backImage: e.target.files[0],
                                                    backView: URL.createObjectURL(e.target.files[0])
                                                })
                                            }}
                                        />
                                            <label htmlFor="contained-button-file02">
                                                <Button variant="contained" color="primary" component="span">
                                                    Upload
                                                </Button>
                                            </label>

                                        </div>

                                        <div><input

                                            style={{display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file03"
                                            multiple
                                            type="file"
                                            onChange={(e) => {
                                                this.setState({
                                                    sideImage: e.target.files[0],
                                                    sideView: URL.createObjectURL(e.target.files[0])
                                                })
                                            }}
                                        />
                                            <label htmlFor="contained-button-file03">
                                                <Button variant="contained" color="primary" component="span">
                                                    Upload
                                                </Button>
                                            </label>

                                        </div>

                                        <div><input

                                            style={{display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file04"
                                            multiple
                                            type="file"
                                            onChange={(e) => {
                                                this.setState({
                                                    interiorImage: e.target.files[0],
                                                    interiorView: URL.createObjectURL(e.target.files[0])
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
                            </Col>

                            <Col>
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

                                                style={{borderRadius: '20px', width: '70%'}}
                                            />
                                            <Button variant="outlined" style={{color: 'green'}}>
                                                Search
                                            </Button>
                                        </div>

                                        <Divider/>

                                        <div className={classes.button_container}>

                                            <Button variant="outlined" style={{color: 'green', width: '30%'}}
                                                    onClick={async () => {
                                                        this.addCar();

                                                    }}
                                            >
                                                Save
                                            </Button>

                                            <Button variant="outlined" style={{color: 'blue', width: '30%'}}
                                                    onClick={async () => {
                                                        this.updateCar();

                                                    }}
                                            >
                                                Update
                                            </Button>

                                            <Button variant="outlined" style={{color: 'red', width: '30%'}}
                                                    onClick={async () => {
                                                        this.deleteCar();

                                                    }}

                                            >
                                                Delete
                                            </Button>


                                        </div>

                                        <div className={classes.clearButtonContainer}>

                                            <ViewAllCarPopUpTable data={{changeStateCarDetails:this.changeStateCarDetails.bind(this)}}/>



                                            <Button variant="outlined" style={{color: 'back', width: '95%'}}>
                                                Clear All
                                            </Button>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>



                        <Row>
                            <Col>

                                <div className={classes.table_container}>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </Col>
                        </Row>

                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(ManageCar)
