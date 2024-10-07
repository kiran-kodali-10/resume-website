import React from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { PROJECTS } from '../../constants';

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
                    {
                        PROJECTS.map((project, index) => {

                            return (
                                <Col md={6} lg={4}>
                                    <Card className='custom-card-dark'>
                                        <CardBody>
                                            <h4 className='project-title'>
                                                {project["project_title"]}
                                            </h4>
                                            <Button className='primary-button' onClick={() => { handleButtonClick(project["github_link"]) }}>GitHub</Button>
                                            <p className='project-description'>
                                                {project["description"]}
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </div>
        </div >
    )
}