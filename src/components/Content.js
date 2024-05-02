import { React } from "react";
import "../assets/css/content.css";
import ContactForm from "../views/ContactPage/Contact";
import ExperiencePage from "../views/ExperiencePage/ExperiencePage";
import LandingPage from "../views/LandingPage/LandingPage";
import EducationSection from "../views/EducationSection/Education";
function Content(){

    return(
        <div className="content">

            <LandingPage />

            <div id="about-section">
               <EducationSection />

            </div>

            <div id="experience-section">
                {/* Create a Timeline component here */}
                <ExperiencePage />
                
            </div>

            <div id="projects-section">
                <h2> section-3 </h2>
            </div>

            <div id="contact-section">
                {/* <h2> section-4 </h2> */}
                <ContactForm />
            </div>

        </div>
    )
}

export default Content;