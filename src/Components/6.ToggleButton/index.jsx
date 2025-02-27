import React from 'react'
import "./styler.css"
import {useState} from "react"
function Toggle() {
    const [state,setState] = useState(false);
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
         <button onClick={()=>{
         setState(!state)
         }} id="butten">Toggle : {state ? "ON" : "OFF"}</button>
    </div>
  )
}

export default Toggle;