import React from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';

export default function ProjectsPage(){

    return(
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
                                <Button  className='primary-button'>GitHub</Button>
                                <p className='project-description'>
                                    Bookstore application to buy books
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} lg={4}>
                        <Card className='custom-card-dark'>
                            <CardBody>
                                <h4 className='project-title'>
                                    Bookstore
                                </h4>
                                <Button  className='primary-button'>GitHub</Button>
                                <p className='project-description'>
                                    Bookstore application to buy books
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} lg={4}>
                        <Card className='custom-card-dark'>
                            <CardBody>
                                <h4 className='project-title'>
                                    Bookstore
                                </h4>
                                <Button  className='primary-button'>GitHub</Button>
                                <p className='project-description'>
                                    Bookstore application to buy books
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}