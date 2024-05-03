import './App.scss';
import Footer from './components/Footer';
import Header from "./components/Header";
import ContactForm from './views/ContactPage/Contact';
import ExperiencePage from './views/ExperiencePage/ExperiencePage';
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}

      <Header />

      {/* Experience */}

      <ExperiencePage />

      {/* <ContactForm /> */}

      <Footer />
    </div>
  );
}

export default App;
