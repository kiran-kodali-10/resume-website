import Timeline from "../../components/TimelineComponent/TimelineComponent";


// Page to represent the timeline of experience.
function ExperiencePage(props) {

    const data = {
        "companyName": "Accenture",
        "projects": [
            {
                "projectName": "",
                "description": "",
            }
        ]
    }

    return (
        <div className="experience-container">
            <div className="timeline-container">
                <h1>Experience Timeline</h1>
                <div>

                </div>
            </div>
        </div>
    )

}

export default ExperiencePage;