//import logo from './logo.svg';
import './App.css';
import Userform from './components/Userform';
import Userlist from './components/Userlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './components/About'

// function App() {
//   return (
//     <div>
//       <UserForm />
//       <UserList></UserList>
//     </div>
//   );
// }

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
             <Userlist /> 
          </Route>
          <Route path="/">
            <div>
            <Userform />
            <Userlist></Userlist>
            </div>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;