import { React } from "react";
import { Row, Col } from "reactstrap";
import '../../assets/css/landing-page.css';
import background from '../../assets/img/landing-page-image-2.jpg'

export default function LandingPage() {
    return (
        <div className="profile-photo">
            <div className="mask-background flex-center">
                <div className="main-typography text-center align-center">
                    <h1>KIRAN KODALI</h1>
                    <h3>Software Developer</h3>
                </div>
            </div>

        </div>
    )
}