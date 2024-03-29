import background2 from "../../../assets/image/background2.jpg"
import redCar from "../../../assets/image/redCar.jpg"

export const styleSheet = {
    mainWrapper: {
        zIndex: '70',
        position: 'fixed',
        width: '100%'
    },

    btn_reserve: {
        left: '-514px',
        top: '9px',
        position: 'relative'
    },

    body_container: {
        fontFamily: 'var(--bs-font-sans-serif)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'bottom  ',
        height: '690px',
        width: '100%',
        position: 'relative',
        background: "url(" + background2 + ")no-repeat   fixed",
        backgroundSize: 'cover',
        backgroundColor: "#e2bcb7"
    },

    bottom_body: {
        height: '800px',
        top: '34px',
        /*backgroundColor:'green',
        position:'relative'*/
    },

    bottom_bodyInner: {
        marginLeft: '34px',
        marginBottom: '67px'

    },

    /*bottom_carImageAbout: {
        position: 'relative',
        height: '234px',
        width: '789px',
        image: "url(" + redCar + ")no-repeat   fixed",

    },*/

    bottom_body1: {
        height: '900px',
        width: '100%',
        backgroundColor: '#161c2f'
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
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
        marginTop: '1px'
    },
    after: {
        width: '0',
        height: '0',
        borderTop: '20px solid transparent',
        borderLeft: '20px solid white',
        borderBottom: '22px solid transparent'
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
        marginBottom: '1px'


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