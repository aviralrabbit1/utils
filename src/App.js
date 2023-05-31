import logo from './logo.svg';
import './App.css';
import Navbar from './componects/Navbar';
import Textform from './componects/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtility" aboutText="About me" />
    {/* <Navbar/> */}
    <Textform heading="Enter the text to use utilities" />
    
    </>
  );
}

export default App;
