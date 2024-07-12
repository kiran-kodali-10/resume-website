import { Card, CardBody, Col, Row } from "reactstrap";
import CustomCard from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCoffee, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import AccentureLogo from '../../assets/img/accenture-ar21.svg'
import ScuLogo from '../../assets/img/scu.png'


// Page to represent the timeline of experience.
function ExperiencePage(props) {
    const experiences = [
        {
            date: '2023 - Present',
            title: 'Research Assistant',
            company: 'Frugal Innovation lab',
            description: 'Developing advanced solutions for data management and analytics.'
        },
        {
            date: '2020 - 2021',
            title: 'Software Engineer',
            company: 'Accenture',
            description: 'Focused on backend systems and scalability issues.'
        }
    ];

    return (
        <div className="experience-section-container">
            <h4 className="section-heading">
                {"Job Experience"}
            </h4>
            <Row className="justify-content-between">
                <Col md={6} lg={6} xs={12}>
                    <Card className="custom-card-dark" style={{minHeight: "400px"}}>
                        <div className="card-icon">
                            {/* <FontAwesomeIcon icon={faCode} /> */}
                            <img src={ScuLogo} alt="Accenture Logo" />
                        </div>
                        <CardBody>
                            <div className="heading">
                                <div className="heading-title">
                                    <h4 className="company-name" style={{fontSize: "20px"}}>{"Frugal Innovation Hub"} </h4>
                                    <h6 className="duration-info">
                                        <i>( September 2023 - June 2024)</i>
                                    </h6>
                                </div>
                                <span className="job-title">Software Developer</span>
                                <div className="job-location">

                                    <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                                    <p><i>{" Mumbai, India"}</i></p>

                                </div>
                            </div>
                            <p className="job-description">
                                blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={6} xs={12}>
                    <Card className="custom-card-dark" style={{minHeight: "400px"}}>
                        <div className="card-icon">
                            {/* <FontAwesomeIcon icon={faCode} /> */}
                            <img src={AccentureLogo} alt="Accenture Logo" />
                        </div>
                        <CardBody>
                            <div className="heading">
                                <div className="heading-title">
                                    <h4 className="company-name">{"Accenture  "} </h4>
                                    <h6 className="duration-info">
                                        <i>( August 2020 - July 2022)</i>
                                    </h6>
                                </div>
                                <span className="job-title">Software Engineer</span>
                                <div className="job-location">

                                    <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                                    <p><i>{" Mumbai, India"}</i></p>

                                </div>
                            </div>
                            <p className="job-description">
                                blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah
                            </p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    )

}

export default ExperiencePage;