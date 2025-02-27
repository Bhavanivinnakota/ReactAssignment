import React from 'react'
import "./styless.css"
function Carouse() {
  return (
    <div className="boxcontainer">
      <div className="leftcontainer">
       <h2>25+ Years of Experience</h2>
       <p>sample text.Click to select the Text Element.Lorem ipsum<br/>
       dolor sit amet.consectetur adipiscing elit, sed do eiusmod <br/>
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br/>
       minim veniam,quis nostrud exercitation. </p>
       <button id="buttons">HIRE ME NOW <i class="bi bi-arrow-right"></i></button>
      </div>
      <div className="rightcontainer">
          <div>
            <h1 className="number">1200</h1>
            <p>SATISFIED CLIENTS</p>
          </div>
          <div>
            <h1 className="number">5490</h1>
            <p>SUCCESSFULLY PROJECTS</p>
          </div>
          <div>
            <h1 className="number">13+</h1>
            <p>AWARD WINNING</p>
          </div>
          <div>
            <h1 className="number">98%</h1>
            <p>CLIENT REVIEW</p>
          </div>
      </div>
    </div>
  )
}

export default Carouse;