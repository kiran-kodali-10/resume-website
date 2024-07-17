import { React, useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
// import '../../assets/css/landing-page.css';
import background from '../../assets/img/landing-page-image-2.jpg'
import AnimatedText from "./AnimateText";
import axios from "axios";

export default function LandingPage() {

    const [person, setPerson] = useState([]);
    useEffect(()=>{
        axios.get('http://54.241.68.52/api/persons/')
        .then(response =>{
            setPerson(response.data[0])
        })
        .catch(error=>{
            console.error("error fetching persons",error);
        })
    },[])

    useEffect(()=>{
        console.log(person['name']);
    },[person])

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
                                {
                                    person['name']?
                                    <AnimatedText finalText={person['name']} />
                                    :
                                    null
                                }
                            </span>
                            <br/>
                            <span className="header-caption">
                                a Developer
                            </span>
                        </h1>

                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}