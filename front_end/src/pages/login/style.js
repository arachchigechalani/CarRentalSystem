import blackCar from "../../assets/image/blackCar.jpg";
import 'bootstrap/dist/css/bootstrap.css';

export const styleSheet = {

    main_div: {
        //display : 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: "1100px",
        weight: "100vw",
        alignItems: 'right',
        backgroundColor: "black",
        justifyContent: 'center',
        position: 'relative'
    },

    form_container: {
        backgroundColor: "#d9d0d2",
        fontsize: '8px',
        height: '780px',
        width: '55%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        left: '800px',
        bottom: '560px'
    },

    button_container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '70%',
        backgroundColor: 'red',
    },

    carImage: {
        alignItems: 'center',
        justifyContent: 'left  ',
        height: '700px',
        width: '1200px',
        top: '240px',
        right: '500px',
        position: 'relative',
        background: "url(" + blackCar + ")no-repeat center center /*fixed*/",
        backgroundSize: 'contain'

    },
    loginName: {
        fontcolor: 'white',
    },

    btnModal: {

        position:"relative",
        left: '1100px',
        backgroundColor:'red',
        top: '150px'
    }


}