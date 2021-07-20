import react, {useState} from 'react'
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {Switch, Route} from 'react-router-dom'
import ResumePage from "./pages/ResumePage";
import Projects from "./pages/Projects";
import data from './ResumeData'


function App() {
  const [resumeData, setResumeData] = useState(data());

  return (
    <div className="App">
      <Sidebar resumeData={resumeData} />
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/resume">
          <ResumePage resumeData={resumeData}/>
        </Route>

        <Route path="/projects">
          <Projects/>
        </Route>
      </Switch>
    
      
    </div>
  );
}

export default App;
