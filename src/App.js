import { useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from "./components/Header";
import ContactForm from './views/ContactPage/Contact';
import ExperiencePage from './views/ExperiencePage/ExperiencePage';
import ProjectsPage from './views/ProjectsPage/Projects';
import SKillsPage from './views/SkillsPage/SkillsPage';
import EducationSection from './views/EducationSection/Education';
import LandingPage from './views/LandingPage/LandingPage';
// import Footer from "./components/Footer";

function App() {

  useEffect(()=>{
    document.title= "Kiran Kodali"
  },[])

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div id="about-section">
          <LandingPage />
        </div>
        <div id="experience-section">
          <ExperiencePage />
        </div>
        {/* <div id="skills-section">
          <SKillsPage />
        </div> */}
        <div id="project-section">
          <ProjectsPage />
        </div>
        <div id="education-section">
          <EducationSection />
        </div>
        <div id="contact-section">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
