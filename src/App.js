import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [icon, setIcon] = useState(<i className="fa-solid fa-sun"></i>);

const showalert = (message, type)=>{
  setalert({
msg: message,
type : type
  })
  setTimeout(() =>{
setalert(null);
  }, 1500);
}

const togglemode = ()=> {
  if(mode === "light"){
    setmode("dark")
    document.body.style.backgroundColor = '#060a54';
    showalert("Dark mode has been enabled", "success");
    setIcon(<i className="fa-solid fa-moon"></i>);
   
  }else{
    setmode("light")
    document.body.style.backgroundColor = 'white';
    showalert("Light mode has been enabled", "success");
    setIcon(<i className="fa-solid fa-sun"></i>);
  }
}



  return (
    <>
    <Router>
        <Navbar title="TextUtils" about="About Us" mode={mode} icon={icon} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<Form heading="Utilize Your Text" mode={mode} />} />
          </Routes>
        </div>
      </Router>
{/* <About/> */}


    </>
  );
}

export default App;
