import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Nav from './Html/Nav.jsx';


function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact>
            home...    
          </Route>

          <Route path="/login">
            login...
          </Route>

          <Route path="/admin">
            admin...
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
