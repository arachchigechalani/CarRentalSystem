import React from "react";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const AvailableCars = () => {
    return (

    <section>
        <Container>
            <Row>
                <Col lg="12" className="text-center mb-5">
                    <h6 className="section__subtitle">Come with</h6>
                    <h2 className="section__title">Hot Offers</h2>
                </Col>

                {carData.slice(0, 6).map((item) => (
                    <CarItem item={item} key={item.id} />
                ))}
            </Row>
        </Container>
    </section>
)
};

export default AvailableCars;
