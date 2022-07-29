import backcarsurround from "../../../assets/image/blackcarsurround.jpg"
import whiteCar from "../../../assets/image/whiteCar.jpg"

export const styleSheet = {
    /*imgWhiteCar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'bottom  ',
        height: '88px',
        width: '20500px',
        position: 'relative',
        background: "url(" + whiteCar + ")no-repeat center center /!*fixed*!/",
        backgroundSize: 'cover',
        top: '230px',
        backgroundColor: "#ecc0ba",
        right:"-678px"
    },*/
    btn_reserveNow:{
        height:'67px',
        width:'888px',
        right:'-788px',
        position: 'relative',
        top:'-179px'

    },
    btn_reserve:{

    },
    text_container: {
        left: '1200px',
        position: 'relative',
        height: '78px',
        bottom: '333px',
    },
    btn_text:{
        fontSize: '3rem%',
        fontWeight: '500%',
    },

    /*divider_container: {
        height: '3%',
        position: 'relative',
        backgroundColor: '#0b1106'
    },*/
    body_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'bottom  ',
        height: '593px',
        width: '100%',
        position: 'relative',
        background: "url(" + backcarsurround + ")no-repeat   fixed",
        backgroundSize: 'cover',
        backgroundColor: "#e2bcb7"
    },

    imgRedCar:{

    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'

    },

    topHeaderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        backgroundColor: 'rgba(23,20,23,0.94)'
    },
    contact_container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#161c2f',
        height: '100%',
        width: '22%',
        marginTop:'1px'
    },
    after: {
        width: '0',
        height: '0',
        borderTop: '29px solid transparent',
        borderLeft: '30px solid #5476EC',
        borderBottom: '29px solid transparent'
    },
    header_right: {
        /*  backgroundColor : 'blue',*/
        flexGrow: '1',
        height: '70%',
        display: 'flex',
    },
    sm_icons_left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        listStyle: 'none',
        marginBottom:'1px'


    },
    right_icons: {
        width: "800px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    spacing_div: {
        flexGrow: 1
    },
    loginButton: {
        color: '#889988',

        TbPower: {
            color: '#d4e0d4'
        },
        flexShrink: 1
    },
    registerButton: {
        color: '#898',

        TbPower: {
            color: '#daeeda'
        },
        flexShrink: 1
    },
    HiSearch: {
        width: '8%',
        height: '50%',
        color: '#898',
        flexShrink: 1,
        cursor: 'pointer',
    },


    //nav bar container css

    navBar_container: {
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    navBar_component: {
        backgroundColor: "white",
        height: '100%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    navbar_options: {
        width: '60%',
        height: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        listStyleType: 'none',
        underline: 'none',
        textDecoration: 'none',
        justifyContent: 'space-around'
    },
}