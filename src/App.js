import logo from './logo.svg';
import './App.css';
import Navbar from './componects/Navbar';
import Textform from './componects/Textform';
import About from './componects/About';
import React, { useState } from 'react';
import Alert from './componects/Alert';

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

  const toggleMode = () => {
    if (mode === 'light') {
      showAlert("Dark mode enabled", "success");
    //   setInterval(()=>{
    //     document.title ='TextUtils - Dark Mode';
    //   }, 2000)
    // }
    // else {
    //   showAlert("Light mode enabled", "success");
    //   setInterval(()=>{
    //     document.title ='TextUtils - Light Mode';
    //   }, 1550)
    }
    setMode(mode === 'light'? 'dark' : 'light');
    document.body.style.backgroundColor = (mode === 'light')?'#44180beb':'white';
    document.title = (mode === 'light')?'TextUtils - Dark Mode':'TextUtils - Light Mode';
  };

  return (
    <>
    <Navbar title="TextUtility" aboutText="About me"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Textform heading="Enter the text to use utilities" mode={mode} showAlert={showAlert} />
    </div>
    <About/>
    
    </>
  );
}

export default App;
