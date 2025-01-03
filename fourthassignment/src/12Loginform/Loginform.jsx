import React from 'react'
import {useRef,useState} from "react"
function Loginform() {
    let obj=useRef("");
    const [state,setState]=useState("");
    const change=()=>{
       setState(obj.current.value)
    }
  return (
    <div>
        <h1>Login Form</h1>
        <input ref={obj} type="text" placeholder="enter name" onChange={name}/>
        <button onClick={change}>Submit</button>
        <br/>
        <hr/>
        <h1>{state}</h1>
    </div>
  )
}

export default Loginform