// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const displayAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    },2200)
  }

  const toggleMode= () => {

    if(mode=== "light"){
      setMode("dark");
      document.body.style.backgroundColor ="#042743";
      displayAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      displayAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm displayAlert={displayAlert} heading="Enter your text to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
