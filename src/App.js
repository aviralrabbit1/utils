import logo from './logo.svg';
import './App.css';
import Navbar from './componects/Navbar';
import Textform from './componects/Textform';
import About from './componects/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light'? 'dark' : 'light');
    document.body.style.backgroundColor = (mode === 'light')?'#44180beb':'white';
  };

  return (
    <>
    <Navbar title="TextUtility" aboutText="About me"  mode={mode} toggleMode={toggleMode} />
    <div className='container my-3'>
      <Textform heading="Enter the text to use utilities" mode={mode} />
    </div>
    <About/>
    
    </>
  );
}

export default App;
