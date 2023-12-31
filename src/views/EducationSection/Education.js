import { Col, Row } from "reactstrap";
import CustomCard from "../../components/Card";
import '../../App.css';

export default function EducationSection(props) {

    const educationDetails = [
        {
            "school": "Santa Clara University",
            "degree": "Master of Science",
            "fieldOfStudy": "Computer Science",
            "yearCompleted": "2024",
        },
        {
            "school": "Gitam University",
            "degree": "Bachelor of Technology",
            "fieldOfStudy": "Computer Science",
            "yearCompleted": "2020",
        }
    ]

    return (
        <>
            <h3>Education</h3>
            <Row style={{ justifyContent: "space-around" }}>
                {
                    educationDetails.map((educationDetail) => {
                        return (
                            <Col md="3" sm="12">
                                {/* <div className="education-card"> */}
                                    <CustomCard className="education-card">
                                        <h4>{educationDetail.school} </h4>
                                        <p>
                                            <b><i> {educationDetail.degree + " "} </i></b>
                                            in
                                            <b> <i>  {educationDetail.fieldOfStudy} </i> </b>
                                        </p>
                                        <p>Year Completed: <b>{" " + educationDetail.yearCompleted}</b></p>
                                    </CustomCard>
                                {/* </div> */}
                            </Col>
                        )
                    })
                }

            </Row>
        </>
    )
}