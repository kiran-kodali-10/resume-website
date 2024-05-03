import { React } from "react";
// Import css file
import '../App.scss';

export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="footer">
            <div className="footer-container">
                {/* 
                    TO-DO: Add the social media links and icons here
                */}
            <span className="text-muted">&copy; {currentYear} Kiran Kodali. All rights reserved.</span>
            </div>
        </footer>
    )
}