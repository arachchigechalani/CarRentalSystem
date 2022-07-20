import blackCar from "../../assets/image/blackCar.jpg";

export const styleSheet={

    main_div : {
        //display : 'flex',
        flexDirection : 'column',
        flexWrap : 'wrap',
        height: "1100px",
        weight : "100vw",
        alignItems : 'right',
        backgroundColor : "black",
        justifyContent  : 'center',
        position:'relative'
    },

    form_container : {
        backgroundColor : "#474545",
        fontsize:'4px',
        height : '560px',
        width : '30%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexWrap : 'wrap',
        alignItems : 'center',
        justifyContent : 'center',
        left :'1400px',
        bottom :'395px'
    },

    button_container : {
        display: 'flex',
        flexDirection: 'column',
        flexWrap : 'wrap',
        alignItems : 'center',
        justifyContent : 'center',
        width : '80%',
        height : '70%',
        backgroundColor: 'red',
    },

    carImage:{
        alignItems : 'center',
        //justifyContent: 'left  ',
        height: '700px',
        width: '1200px',
        top:'240px',
        left:'100px',
        position: 'relative',
        background: "url(" + blackCar + ")no-repeat center center /*fixed*/",
        backgroundSize: 'contain'

    },
    loginName:{
        fontcolor:'white'
    }



}