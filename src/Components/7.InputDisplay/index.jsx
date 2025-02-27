import React from 'react'

import {useState} from "react";
function InputDisplay() {
    const [state,setState] = useState("");
  return (
    <div style={{width:"500px",height:"300px",margin:"auto 300px",border:"5px solid black",display:"flex",justifyContent:"center",flexDirection:"column" }}>
         <input onChange={(event)=>{
            setState(event.target.value)
         }} type="text" placeholder="Enter any text" value={state} width="50px" height="50px"/>
         <h1>Display : {state}</h1>
    </div>
  )
}

export default InputDisplay;