import "./style.css"
import React from 'react'

function Header() {
  return (
    <div>
        <div id="container">
          <div className="right">
              <img src="https://i.pinimg.com/564x/10/11/38/101138716e268c39e49b77a158bce102.jpg" width={"50%"}height={"400px"}/>
          </div>
          <div className="left">
              <h1>Home Repair Services</h1>
              <h3>Find amazing home repair services tailored for you. Handy connects you with amazing home repair professionals</h3>
              <button className="btn">CONTACT US</button>
          </div>
        </div>
    </div>
  )
}

export default Header;