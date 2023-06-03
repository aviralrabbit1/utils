import React, {useState} from 'react'

function About() {

    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'black',
        color: 'white',
    })

    const [buttonText, setButtonText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.backgroundColor === '#333333') {
            setMyStyle({
                backgroundColor: 'white',
                color: '#333333',
                border: '1px solid black',
            })
            setButtonText("Enable Dark Mode")
        } else {
            setMyStyle({
                backgroundColor: '#333333',
                color: 'white',
                border: '1px solid white',
            })
            setButtonText("Enable Light Mode")
        }
    }

  return (
    <div className="container" style={myStyle}>
        <h1>About me</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                     until the collapse plugin adds the appropriate classes that we use to style each element. 
                     These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                     You can modify any of this with custom CSS or overriding our default variables. 
                     It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,                      
                     though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, 
                    until the collapse plugin adds the appropriate classes that we use to style each element. 
                    These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                    You can modify any of this with custom CSS or overriding our default variables. 
                    It's also worth noting that just about any HTML can go within the 
                    <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, 
                        until the collapse plugin adds the appropriate classes that we use to style each element. 
                        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                        You can modify any of this with custom CSS or overriding our default variables. 
                        It's also worth noting that just about any HTML can go within the 
                        <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
    </div>
    <div className='container my-3'>
        <button className='btn btn-primary' onClick={toggleStyle} type='button'>{buttonText}</button>
    </div>
</div>
  )
}

export default About