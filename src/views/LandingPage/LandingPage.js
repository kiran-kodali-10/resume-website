import { React, useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
// import '../../assets/css/landing-page.css';
import background from '../../assets/img/landing-page-image-2.jpg'
import AnimatedText from "./AnimateText";
import ImageKiran from '../../assets/img/image-kiran.JPG'

export default function LandingPage() {

    return (

        <div className="landing-page-container">
            <Row className="align-item-center">
                <Col lg={7} md={7}>

                    <div className="content">
                        <span className="subtitle">
                            Welcome to my world
                        </span>
                        <h1 className="title">
                            {
                                "Hi, I'm "
                            }
                            <span style={{ color: "#ff014f" }}>
                                <AnimatedText finalText={"Kiran Kodali"} />
                            </span>
                            <br />
                            <span className="header-caption">
                                a Developer
                            </span>
                        </h1>

                    </div>
                </Col>
                <Col md={3} lg={4}>
                    <img src={ImageKiran} alt="kiran logo" className="circular-image"  style={{ 
            width: "100%", 
            height: "auto", 
            maxWidth: "100%", 
            objectFit: "contain" 
        }}  />
                </Col>
            </Row>
        </div>
    )
}