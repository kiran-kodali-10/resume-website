import './App.css';
import Main from './components/MainComponent';
import { Router, BrowserRouter } from "react-router-dom";
// import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
