import addCar from "../../assets/image/dashboardImage.jpg";

export const styleSheet={
    addCar_page:{

    },

    addCar_bar: {
        height: '100px',
        width: '100%',
        backgroundColor: 'black',
        position: 'relative'
    },

    addCar_body:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'bottom  ',

        height : '862px',
        width:'100%',
        position:'relative',
        background:"url(" + addCar+ ")no-repeat center center /*fixed*/",
        backgroundSize: 'cover'
    },
    addCar_bottom: {
        height: '120px',
        width: '100%',
        backgroundColor: 'gray',
        position: 'relative',

    }


}