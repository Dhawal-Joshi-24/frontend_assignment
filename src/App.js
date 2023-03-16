import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Alert from './Components/Alert';
import Smedia from './Components/Smedia';



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 9000);
  }

  return (
    <div style={{ backgroundColor:"#ECF2FF"}} >
     <Router>
          <Navbar style={{ backgroundColor:"#ECF2FF"}}/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/Home" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/Smedia" element={<Smedia />} />
            </Routes>
          </div>
        </Router>
        </div>
  );
}

export default App;
