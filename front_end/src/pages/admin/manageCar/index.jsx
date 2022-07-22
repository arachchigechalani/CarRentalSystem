
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


class ManageCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,
        }

        /*
                    formData: {
                        userId: '1',
                        id: '1',
                        title: 'tgrtg',
                        body: 'rtttttttttttttttttttttttttttttttttttttttgrtgrtgr'
                    },
        */
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
                                    />
                                </div>
                                <div>
                                    <TextField
                                        size={"small"}
                                        id="outlined-required"
                                        label="Type"
                                        variant="outlined"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        size={"small"}
                                        id="outlined-required"
                                        label="Num of Passengers"
                                        variant="outlined"
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
                            />
                            <Autocomplete
                                id="combo-box-demo"
                                size={"small"}

                                options={[
                                    {title: 'Auto'},
                                    {title: "Manual"}]}
                                getOptionLabel={(option) => option.title}
                                style={{width: 136}}
                                renderInput={(params) => <TextField {...params} label="Fuel type." variant="outlined"/>}
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Registration Number"
                                defaultValue="Hello World"
                                style={{width: 200}}
                                variant="outlined"
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Color"
                                defaultValue="Hello World"
                                variant="outlined"
                                style={{width: 200}}
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
                                label="Type"
                                variant="outlined"
                            />
                            <TextField
                                style={{width: '17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
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
                                     backgroundImage:"url(" +this.state.frontImage+ ")",
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
                                     backgroundImage:"url(" +this.state.backImage+ ")",
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
                                     backgroundImage:"url(" +this.state.sideImage+ ")",
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
                                     backgroundImage:"url(" +this.state.interiorImage+ ")",
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
                                        frontImage: URL.createObjectURL(e.target.files[0])
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
                                        backImage: URL.createObjectURL(e.target.files[0])
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
                                        sideImage: URL.createObjectURL(e.target.files[0])
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
                                        interiorImage: URL.createObjectURL(e.target.files[0])
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
                        <div className={classes.search_container}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(ManageCar)




























































/*
import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Logo from "../../../assets/icon/logo.png"
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


class ManageCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,
        }

/!*
            formData: {
                userId: '1',
                id: '1',
                title: 'tgrtg',
                body: 'rtttttttttttttttttttttttttttttttttttttttgrtgrtgr'
            },
*!/
        }




    render() {

        const top100Films = [
            {title: 'Auto'},
            {title: "Manual"}];

        const {classes} = this.props;

        return (

            <div className={classes.mainContainer}>


                <AdminNavBar/>

                <div className={classes.state_Bar_container}></div>

                <div className={classes.form_Container}>

                    <div className={classes.form_backGround}>
                        <div className={classes.form_textFieldForm}>

                            <h4 style={{color: 'white'}}>MANAGE CARS</h4>

                        </div>

                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Car Details</h5>

                        </div>
                        <Divider/>

                        <div className={classes.formTextFieldContainer}>

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Vehical ID"
                                variant="outlined"
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Num of Passengers"
                                variant="outlined"
                            />

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
                            />
                            <Autocomplete
                                id="combo-box-demo"
                                size={"small"}

                                options={[
                                    {title: 'Auto'},
                                    {title: "Manual"}]}
                                getOptionLabel={(option) => option.title}
                                style={{width: 136}}
                                renderInput={(params) => <TextField {...params} label="Fuel type." variant="outlined"/>}
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Registration Number"
                                defaultValue="Hello World"
                                style={{width: 200}}
                                variant="outlined"
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Color"
                                defaultValue="Hello World"
                                variant="outlined"
                                style={{width: 200}}
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
                                label="Type"
                                variant="outlined"
                            />
                            <TextField
                                style={{width: '17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
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
                                     backgroundImage:"url(" +this.state.frontImage+ ")",
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
                                     backgroundImage:"url(" +this.state.backImage+ ")",
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
                                     backgroundImage:"url(" +this.state.sideImage+ ")",
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
                                     backgroundImage:"url(" +this.state.interiorImage+ ")",
                                     backgroundSize: 'cover'
                                 }}

                            >




                            </div>

                        </div>


                        <div className={classes.uploadButtonContainer}>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image/!*"
                                className={classes.input}
                                id="contained-button-file01"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        frontImage: URL.createObjectURL(e.target.files[0])
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
                                accept="image/!*"
                                className={classes.input}
                                id="contained-button-file02"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        backImage: URL.createObjectURL(e.target.files[0])
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
                                accept="image/!*"
                                className={classes.input}
                                id="contained-button-file03"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        sideImage: URL.createObjectURL(e.target.files[0])
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
                                accept="image/!*"
                                className={classes.input}
                                id="contained-button-file04"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        interiorImage: URL.createObjectURL(e.target.files[0])
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

                        <div className={classes.search_container}></div>

                    </div>


                </div>


            </div>


        )

    }


}

export default withStyles(styleSheet)(ManageCar)*/
