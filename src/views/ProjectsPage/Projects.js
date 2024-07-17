import React from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';

export default function ProjectsPage() {

    const handleButtonClick = (url) => {
        window.open(url, '_blank', 'nopener,noreferrer');
    }

    return (
        <div className='projects-section-container'>
            <h4 className='section-heading'>
                Projects
            </h4>
            <div className='projects-list'>
                <Row>
                    <Col md={4} lg={4}>
                        <Card className='custom-card-dark'>
                            <CardBody>
                                <h4 className='project-title'>
                                    Bookstore
                                </h4>
                                <Button className='primary-button' onClick={() => { handleButtonClick("https://github.com/kiran-kodali-10/bookstore") }}>GitHub</Button>
                                <p className='project-description'>
                                    Engineered an online bookstore web application with React, Spring Boot, and MySQL, delivering a user-centric platform for
                                    efficient book browsing, purchasing, and management.
                                </p>
                                <p className='project-description'>
                                    Designed and implemented a comprehensive admin panel using Spring Boot, AWS Cognito, MySQL, streamlining sales monitoring, boosting operational efficiency.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} lg={4}>
                        <Card className='custom-card-dark'>
                            <CardBody>
                                <h4 className='project-title'>
                                    Seinet Cactus
                                </h4>
                                <Button className='primary-button' onClick={() => handleButtonClick("https://github.com/kiran-kodali-10/SEINet-Cactus")}>GitHub</Button>
                                <p className='project-description'>
                                    Led the development of a Geo-spatial temporal mapping system for cacti discoveries using React and d3, featuring time-based data
                                    visualization and analytics.
                                </p>
                                <p>
                                    Created comprehensive visualization tools, including graphs, parallel categories, and scatter plots, for insightful analysis of cacti
                                    data
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} lg={4}>
                        <Card className='custom-card-dark'>
                            <CardBody>
                                <h4 className='project-title'>
                                    Job Hunt Application
                                </h4>
                                <Button className='primary-button' onClick={()=>handleButtonClick("https://github.com/kiran-kodali-10/distributed-systems-backend")}>GitHub</Button>
                                <p className='project-description'>
                                    Developed a distributed system application with a publisher-subscriber model using Spring Boot, React for real-time job notifications.
                                </p>
                                <p className='project-description'>
                                    Implemented distributed computing protocols like shared memory, leader election, gossip, and heartbeat, optimizing communication
                                    and system reliability
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}