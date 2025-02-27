import React from 'react'
import "./styling.css"
function EmployyeCard(props) {
  return (
    <div>
          <div className="cards">
           <img src={props.url} width={"300px"} height={"300px"}/>
           <h2>Name : {props.name}</h2>
           <h3>Role : {props.role}</h3>
          </div>
    </div>
  )
}

export default EmployyeCard;