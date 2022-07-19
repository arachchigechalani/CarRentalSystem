import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "./style";
import dashboardImage from "../../assets/image/addCar.jpg"

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.dashboard_page}>
                    <div className={classes.nav_bar}>

                    </div>

                    <div className={classes.dash_body}>

                         {/*<img src={dashboardImage} alt=""/>*/}


                    </div>



                </div>
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Dashboard)