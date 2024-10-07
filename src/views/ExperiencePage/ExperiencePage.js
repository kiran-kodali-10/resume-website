import { Card, CardBody, Col, Row } from "reactstrap";
import CustomCard from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCoffee, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import AccentureLogo from '../../assets/img/accenture-ar21.svg'
import ScuLogo from '../../assets/img/scu.png'
import { EXPERIENCES } from "../../constants";


// Page to represent the timeline of experience.
function ExperiencePage(props) {

    const logos = {
        "Accenture": AccentureLogo,
        "Frugal Innovation Hub": ScuLogo
    }

    return (
        <div className="experience-section-container">
            <h4 className="section-heading">
                {"Job Experience"}
            </h4>
            <Row className="justify-content-between">
                {
                    EXPERIENCES.map((experience, index) => {
                        return (
                            <Col md={6} lg={6} xs={12} key={index}>
                                <Card className="custom-card-dark" style={{ minHeight: "400px" }}>
                                    <div className="card-icon">
                                        <img src={logos[experience['company_name']]} alt={`${experience.companyName} logo`} />
                                    </div>
                                    <CardBody>
                                        <div className="heading">
                                            <div className="heading-title">
                                                <h4 className="company-name" style={{ fontSize: "20px" }}>{experience['company_name']} </h4>
                                                <h6 className="duration-info">
                                                    <i>( {experience.date})</i>
                                                </h6>
                                            </div>
                                            <span className="job-title"> {experience['position_title']} </span>
                                            <div className="job-location">

                                                <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                                                <p><i>{ experience.location }</i></p>

                                            </div>
                                        </div>
                                        <p className="job-description">
                                            {
                                                experience.description
                                            }
                                        </p>
                                    </CardBody>
                                </Card>

                            </Col>
                        )
                    })
                }

            </Row>

        </div>
    )

}

export default ExperiencePage;