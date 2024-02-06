import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Route,Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses=()=>
  {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const togglemode = (cls) => {
    removeBodyClasses();
    if(cls!=='')
     document.body.classList.add('bg-'+cls)
    else if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // let type;
      // if(cls==='success')
      //   type='Green ';
      // else if(cls==='danger')
      //   type='Red ';
      // else if(cls==='warning')
      //   type='Yellow  ';
      

      // let str = type+"Dark mode has been enabled";
      showAlert("Dark mode has been enabled", "success")
    }
    else  {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-1">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
             
            <Route exact path="/" element={<TextForm heading="Enter a text to analyze" mode={mode} showAlert={showAlert} > </TextForm>} />
            
            
          </Routes>
          {/* <About></About> */}
          {/* <TextForm heading="Enter a text to analyze" mode={mode} showAlert={showAlert} > </TextForm> */}
        </div>
      </Router>
    </>

  );
}

export default App;
