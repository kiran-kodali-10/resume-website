import { React } from "react";
import "../assets/css/content.css";
import LandingPage from "../views/LandingPage/LandingPage";
function Content(){

    return(
        <div className="content">

            <LandingPage />

            <div id="about-section">
                <h2> section-1 </h2>

            </div>

            <div id="experience-section">
                <h2> section-2 </h2>
            </div>

            <div id="projects-section">
                <h2> section-3 </h2>
            </div>

            <div id="contact-section">
                <h2> section-4 </h2>
            </div>

        </div>
    )
}

export default Content;