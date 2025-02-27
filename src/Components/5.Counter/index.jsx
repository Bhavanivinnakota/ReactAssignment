import React from 'react'
import "./styleses.css"
import {useState} from "react"
function Counter() {
    const [state,setState]=useState(0);
    const increment = ()=>{
        setState(state+1)
    }
    const decrement = ()=>{
        setState(state-1)
    }
  return (
    <div className="content">
      <h1>Count : {state}</h1>
      <div>
      <button className="btn" onClick={increment} style={{marginRight:"100px"}}>Increment</button>
      <button className="btn" onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;