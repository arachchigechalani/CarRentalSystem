import React from "react";
import "./style.css";
import Col from "react-bootstrap/Col";
import CarDetailsPopUp from "../../customer/CarDetailsPopup"
import RentalRequest from "../../../components/customer/RentalRequest";

const CarItem = (props) => {
    const { carId,imgUrl, carType, carName, automatic, state , price } = props.item;
    return (
        <Col lg="4"  className="mb-5">
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt="" className="w-100" />
                </div>

                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center mt-">
                        <b>{price}.00 Rs/=</b> <span><b>/ Day</b></span>
                    </h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-car-line"></i> <b>{carType}</b>
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-settings-2-line"></i> <b>{automatic}</b>
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-timer-flash-line"></i> <b>{state}</b>
                        </span>
                    </div>

                    <RentalRequest data={props.item}/>

                    {/*<button className=" w-50 car_item-btn car_btn-rent" style={{color : 'black',background:'#c9af16'}}
                            onClick={() =>{
                                this.child.handleShow();
                            }}
                    >
                        <b>Rent Now..</b>
                    </button>*/}
                    <CarDetailsPopUp ref={instance => { this.child = instance;}}/>
                </div>
            </div>
        </Col>
    );
};

export default CarItem;








/*
import React from "react";
import "../../../pages/customer/home/style.css";
import Col from "react-bootstrap/Col";
import Link from "@material-ui/core/Link";
import ReactButton from '@material-ui/core/Button';
import CarDetails from "../../../assets/CarData/carData";
import RegisterCustomer from "../../../components/customer/RegisterCustomer/RegisterCustomer";
import CarDetailsPopUp from "../../customer/CarDetailsPopup"


const CarItem = (props) => {
    const { imgUrl, carType, carName, automatic, state , price } = props.item;
    return (
        <Col lg="4"  className="mb-5">
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt="" className="w-100" />
                </div>

                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center mt-">
                        {price}.00 Rs/= <span>/ Day</span>
                    </h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-car-line"></i> {carType}
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-settings-2-line"></i> {automatic}
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-timer-flash-line"></i> {state}
                        </span>
                    </div>

                    <button className=" w-50 car_item-btn car_btn-rent" style={{color : 'white'}}
                            onClick={() =>{
                                this.child.handleShow();
                            }}
                    >
                        Rent Now..
                    </button>
                    <CarDetailsPopUp ref={instance => { this.child = instance;}}/>
                </div>
            </div>
        </Col>
    );
};

export default CarItem;*/
