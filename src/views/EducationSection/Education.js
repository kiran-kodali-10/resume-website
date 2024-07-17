import { CardBody, Col, Row } from "reactstrap";
import CustomCard from "../../components/Card";
import '../../App.scss';
import ScuLogo from "../../assets/img/Santa_Clara_U_Seal.svg.png";
import GitamLogo from "../../assets/img/gitam-logo.jpg";

export default function EducationSection(props) {

    const educationDetails = [
        {
            "school": "Santa Clara University",
            "degree": "Master of Science",
            "fieldOfStudy": "Computer Science",
            "yearCompleted": "2024",
            "logo": ScuLogo
        },
        {
            "school": "Gitam University",
            "degree": "Bachelor of Technology",
            "fieldOfStudy": "Computer Science",
            "yearCompleted": "2020",
            "logo": GitamLogo
        }
    ]

    return (
        <div className="education-section-container">
            <h4 className="section-heading">Education</h4>
            <Row style={{ justifyContent: "space-around" }}>
                {
                    educationDetails.map((educationDetail, index) => {
                        return (
                            <Col md="6" sm="12" key={index}>
                                {/* <div className="education-card"> */}
                                <CustomCard className="custom-card-dark">
                                    <div className="card-icon">
                                    <div className="image-container card-icon">
                                            <img src={educationDetail.logo} alt="SCU logo" className="circular-image" />
                                        </div>
                                    </div>
                                    <CardBody>
                                        


                                        <h4>{educationDetail.school} </h4>
                                        <p>
                                            <b><i> {educationDetail.degree + " "} </i></b>
                                            in
                                            <b> <i>  {educationDetail.fieldOfStudy} </i> </b>
                                        </p>
                                        <p>Year Completed: <b>{" " + educationDetail.yearCompleted}</b></p>
                                    </CardBody>
                                </CustomCard>
                                {/* </div> */}
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}