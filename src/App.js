import React, { useState } from 'react';
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const  showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
    setAlert(null);
  }, 2000);
  } 

  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled","success");
   
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled","success");
      
    }
  }

  return (
    <>
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter Text to analyze below" mode={mode} showAlert = {showAlert}/>
        {/* <Aboutus/> */}
      </div>
    </>
  );
}

export default App;
