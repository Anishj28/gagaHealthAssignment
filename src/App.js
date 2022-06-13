import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Prescription from './Components/Prescription';
import{
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Form></Form>}>
            </Route>
          <Route path="/data" element={<Prescription></Prescription>}/>
      </Routes>
    </Router>
  );
}

export default App;
