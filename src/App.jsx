import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Swh from './Components/Swh.jsx';
import Nav from './Html/Nav.jsx';


function App() {
  return (
    <Router>
      <div className="container">

        <Nav />

        <Swh />
        
      </div>
    </Router>
  );
}

export default App;
