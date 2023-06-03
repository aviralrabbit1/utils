import React, {useState} from 'react'


function Textform(props) {

  const upperChange = (event) => {
    setText(event.target.value);
    console.log("upperChange");
  }

  const upperClick = () => {
    setText(text.toUpperCase());
    console.log("upperClick")
  }  
  
  const lowerClick = () => {
    setText(text.toLowerCase());
    console.log("upperClick")
  }

  const copyText = (text) => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }

  const removeExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
  }

  const[text, setText] = useState('');
  // setText("New text"); //correct way to change the default set state

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control border-black" value={text} onChange={upperChange}
          id="myBox" rows="6">{props.heading} 
          </textarea>
        </div>        
          <button className="btn btn-primary mx-1" onClick={upperClick}>Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={lowerClick}>Convert to Lowercase
          </button> 
          <button className="btn btn-primary mx-1" onClick={copyText}>Copy to clipboard
          </button>             
          <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove extra spaces
          </button>          
      </div>
      
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.trim().split(" ").length} words {text.length} characters</p>
        <p>{0.008*text.trim().split(/[ ]+/).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>        
    </div>

    </>
  )
}

export default Textform