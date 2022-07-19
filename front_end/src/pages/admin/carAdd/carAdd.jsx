import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

class CarAdd extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div>
                    <Button className={classes.h1Style} variant="contained" color="secondary">
                        Secondary
                    </Button>
                </div>


            </Fragment>
        )
    }
}
export default withStyles(styleSheet) (CarAdd)