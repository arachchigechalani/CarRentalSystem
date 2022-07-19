import dashBoardImage from "../../assets/image/dashboardImage.jpg"

export const styleSheet = {

    dashboard_page: {
        height:'100%',
        width:'100%'
    },

    nav_bar: {
        height: '102px',
        width: '100%',
        backgroundColor: 'white',
        position: 'relative'
    },

    dash_body:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'bottom  ',

        height : '980px',
        width:'100%',
        position:'relative',
        background:"url(" + dashBoardImage+ ")no-repeat center center /*fixed*/",
        backgroundSize: 'cover'

    }





}