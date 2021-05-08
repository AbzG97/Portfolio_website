import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {Switch, Route} from 'react-router-dom'
import SkillsPage from "./pages/SkillsPage";
import ResumePage from "./pages/ResumePage";
import Projects from "./pages/Projects";


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/skills">
          <SkillsPage/>
        </Route>

        <Route path="/resume">
          <ResumePage/>
        </Route>

        <Route path="/projects">
          <Projects/>
        </Route>
      </Switch>
    
      
    </div>
  );
}

export default App;
