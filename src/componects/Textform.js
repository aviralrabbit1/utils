import React, {useState} from 'react'


function Textform(props) {

  const onChange = (event) => {
    setText(event.target.value);
    console.log("upperChange");
  }
  
  const upperClick = () => {
    setText(text.toUpperCase());
    console.log("upperClick")
    props.showAlert("Converted to uppercase!", "success");
  }  
  
  const lowerClick = () => {
    setText(text.toLowerCase());
    console.log("upperClick")
    props.showAlert("Converted to lowercase!", "success");
  }
  
  const clearText = () => {
    setText("");
    console.log("clearText")
    props.showAlert("Cleared the text!", "success");
  }
  
  const copyText = () => {
    var curr_text = document.getElementById("myBox");
    curr_text.select();
    curr_text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(curr_text.value);
    props.showAlert("Copied the text!", "success");
  }

  const removeExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
  }

  const[text, setText] = useState('');
  // setText("New text"); //correct way to change the default set state

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control border-#44180beb" value={text} onChange={onChange}
          style={{backgroundColor: props.mode === 'dark'?'white':'#44180beb', color: props.mode === 'dark'?'#44180beb':'white'}}
          id="myBox" rows="6">{props.heading} 
          </textarea>
        </div>        
          <button className="btn btn-primary mx-1" onClick={upperClick}>Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={lowerClick}>Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={clearText}>Clear text
          </button> 
          <button className="btn btn-primary mx-1" onClick={copyText}>Copy to clipboard
          </button>             
          <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove extra spaces
          </button>          
      </div>
      
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#44180beb'}}>
        <h2>Text Summary</h2>
        <p>{text.trim().split(/\b\w+\b/g).length-1} words {text.trim().split(/[ ]+/).join("").length} characters</p>
        <p>{0.008*text.trim().split(/[ ]+/).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it"}</p>        
    </div>

    </>
  )
}

export default Textform