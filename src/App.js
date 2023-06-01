import logo from './logo.svg';
import './App.css';
import Navbar from './componects/Navbar';
import Textform from './componects/Textform';
import About from './componects/About';

function App() {
  return (
    <>
    <Navbar title="TextUtility" aboutText="About me" />
    <Textform heading="Enter the text to use utilities" />
    <About/>
    
    </>
  );
}

export default App;
