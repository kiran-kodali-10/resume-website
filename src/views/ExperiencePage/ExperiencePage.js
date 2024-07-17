import { Card, CardBody, Col, Row } from "reactstrap";
import CustomCard from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCoffee, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import AccentureLogo from '../../assets/img/accenture-ar21.svg'
import ScuLogo from '../../assets/img/scu.png'
import { useEffect, useState } from "react";
import axios from "axios";


// Page to represent the timeline of experience.
function ExperiencePage(props) {
    // const experiences = [
    //     {
    //         companyName: 'Frugal Innovation Hub',
    //         date: 'September 2023 - June 2024',
    //         location: 'Santa Clara, CA',
    //         positionTitle: 'Software Developer',
    //         descriptionPoints: [
    //             "Developed a mental health Flutter app targeting Latino communities, focusing on performance and cross-device compatibility.",
    //             "Implemented user authentication and video features in the app, enhancing engagement and security for Latino users with Spring Security and Spring Boot",
    //             "Translated Figma mock-ups into functional features for the app, improving accessibility for users",
    //         ],

    //         description: 'Developed a mental health Flutter app targeting Latino communities, focusing on performance and cross-device compatibility. Implemented user authentication and video features in the app, enhancing engagement and security for Latino users with Spring Security and Spring Boot.Translated Figma mock-ups into functional features for the app, improving accessibility for users'
    //     },
    //     {
    //         companyName: 'Accenture',
    //         date: 'August 2020 - July 2022',
    //         location: "Mumbai, Inida",
    //         positionTitle: 'Software Engineer',
    //         descriptionPoints: [
    //             "Collaboratively migrated the critical Oracle 12c databases to Oracle Cloud, optimizing security protocols and system performance,achieving enhanced operational efficiency.",
    //             "Engineered a dynamic React, Java dashboard, achieving 20% boost in user engagement and a 30% reduction in load times through efficient code optimization and responsive design principles.",
    //             " Developed a scalable, high-throughput Kafka-based incident processing pipeline, enhancing system efficiency by 40% and ensuring robust reliability for critical incident management.",
    //             "Developed an advanced global search system using Spring Boot, Java and React, accelerating claim retrieval by 30% and enhancing audit process efficiency, leading to a streamlined claim management workflow."

    //         ],
    //         description: "Collaboratively migrated the critical Oracle 12c databases to Oracle Cloud, optimizing security protocols and system performance,achieving enhanced operational efficiency. Engineered a dynamic React, Java dashboard, achieving 20% boost in user engagement and a 30% reduction in load times through efficient code optimization and responsive design principles. "
    //     }
    // ];
    const [experiences, setExperiences] = useState([]);

    useEffect(()=>{
        axios.get('http://54.241.68.52/api/companies/')
        .then(response=>setExperiences(response.data));
    },[])

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
                    experiences.map((experience, index) => {
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