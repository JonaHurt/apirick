import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Components/Home';
import Characters from './Components/Characters';
import { Perfil } from './Components/Perfil';

function App() {
  return (
    <>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
              </li>
              <li>
              <Link to="/Characters">Characters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Characters">
            <Characters />
          </Route>
          <Route path="/Perfil/:id">
            <Perfil />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </>
  )
}

export default App;
