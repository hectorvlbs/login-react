import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        navbar...
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
