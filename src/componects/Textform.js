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
  const[text, setText] = useState('Enter your text here');
  // setText("New text"); //correct way to change the default set state

  return (
    <>
      <div className="container">
          <h1>Text utilities</h1>
          {/* <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div> */}
          <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Text Area</label>
              <textarea className="form-control" value={text} 
              onChange={upperChange}
              id="exampleFormControlTextarea1" rows="3">{props.heading} </textarea>

          </div>
          <div>
            <button type="btn btn-primary" className="btn btn-primary"
            onClick={upperClick}>Convert to uppercase</button>
          </div>
      </div>
      <div className="container">
        <h1>Results</h1>
        <h1>34 words 797 characters</h1>
      </div>
    </>
  )
}

export default Textform