import 'bootstrap/dist/css/bootstrap.css';
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import React, {Fragment} from "react";

class AddCar extends Comment{

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.addCar_page}>
                    <div className={classes.addCar_bar}>

                    </div>

                    <div className={classes.addCar_body}>

                        {/*<img src={dashboardImage} alt=""/>*/}


                    </div>


                    <div className={classes.addCar_bottom}>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withStyles(styleSheet) (AddCar)