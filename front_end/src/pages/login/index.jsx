import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";


class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main_div}>

                <div className={classes.login_cover}>

                    <div className={classes.title_container}></div>

                    <div className={classes.form_container}></div>

                    <div className={classes.button_container}></div>


                </div>

            </div>
        );
    }
}


export default withStyles(styleSheet) (Login)