import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, Input, Label } from 'reactstrap';

export default function ContactForm() {
    React.useEffect(() => {
        console.log("inside contact Form")
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div className="contact-page-container">
            <Row>
                <Col lg="6" md="6">
                    {/* <Card className='bg-dark text-white'> */}
                        {/* <CardHeader >Contact Me</CardHeader> */}
                        {/* <CardBody  style={{color:"white"}}> */}
                            <Row className="mt-3 ">
                                <Col lg='4' md='4'><Label htmlFor="firstName">First Name</Label></Col>
                                <Col><Input className='bg-dark text-white' type="text" htmlFor="firstName" /></Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg='4' md='4'><Label htmlFor="firstName">Last Name</Label></Col>
                                <Col><Input type="text" htmlFor="firstName" /></Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg='4' md='4'><Label htmlFor="firstName">Email</Label></Col>
                                <Col><Input type="text" htmlFor="firstName" /></Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg='4' md='4'><Label htmlFor="firstName">Mobile Number</Label></Col>
                                <Col><Input type="text" htmlFor="firstName" /></Col>
                            </Row>
                        {/* </CardBody> */}
                    {/* </Card> */}
                </Col>
            </Row>
        </div>
        // <div className="">
        //     <h2>Contact Form</h2>
        //     <form onSubmit={handleSubmit}>

        //     <label htmlFor='firstName'>
        //         <input type="text" placeholder="Enter your first name" name="firstName" />
        //     </label>

        //     </form>
        // </div>
    )
}