import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
   
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundImage = 'linear-gradient(to left, rgb(27 20 41), rgb(20 15 35))';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundImage = 'linear-gradient(90deg, rgba(212,255,255,1) 0%, rgba(254,254,254,1) 0%, rgba(92,187,194,1) 100%)';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text-Transition" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Switch>
    
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Text Transition "  mode={mode}/>
          </Route>
          
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;