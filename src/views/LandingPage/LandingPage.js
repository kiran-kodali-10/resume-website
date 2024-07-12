import { React } from "react";
import { Row, Col } from "reactstrap";
// import '../../assets/css/landing-page.css';
import background from '../../assets/img/landing-page-image-2.jpg'
import AnimatedText from "./AnimateText";

export default function LandingPage() {
    return (

        <div className="landing-page-container">
            <Row className="align-item-center">
                <Col lg={7}>

                    <div className="content">
                        <span className="subtitle">
                            Welcome to my world
                        </span>
                        <h1 className="title">
                            {
                                "Hi, I'm "
                            } 
                            <span style={{color: "#ff014f"}}>
                                <AnimatedText />
                            </span>
                            <br/>
                            <span className="header-caption">
                                a Developer
                            </span>
                        </h1>

                    </div>
                    {/* <div className="profile-photo">
                        <div className="mask-background flex-center">
                            <div className="main-typography text-center align-center">
                                <h1>KIRAN KODALI</h1>
                                <h3>Software Developer</h3>
                            </div>
                        </div>
                    </div> */}
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}