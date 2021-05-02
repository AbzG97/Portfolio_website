import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {Switch, Route} from 'react-router-dom'
import SkillsPage from "./pages/SkillsPage";


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
      </Switch>
    
      
    </div>
  );
}

export default App;
