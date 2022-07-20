import dashboardImage from "../../assets/image/dashboardImage.jpg"

export const styleSheet = {

    dashboard_page: {
        height: '100%',
        width: '100%'
    },

    nav_bar: {
        height: '65px',
        width: '100%',
        backgroundColor: 'black',
        position: 'relative'
    },

    dash_top: {
        height: '130px',
        width: '100%',
        backgroundColor: 'orange'
    },
    dash_body: {
        display: 'flex',
        flexDirection : 'row',
        //alignItems : 'center',
        justifyContent: 'bottom  ',

        height: '885px',
        width: '2304px',
        position: 'relative',
        background: "url(" + dashboardImage + ")no-repeat center center /*fixed*/",
        backgroundSize: 'cover'

    },
    dashboardImage: {

    }


}