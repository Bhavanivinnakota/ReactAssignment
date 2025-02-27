import React from 'react'

function WeatherDisplay(props) {
  return (
    <div style={{width:"500px",height:"300px",margin:"auto 300px",border:"5px solid black",display:"flex",justifyContent:"center",flexDirection:"column"}}>
   <h1>City : {props.city}</h1>
   <h3>Temperature : {props.temp}</h3>
   <h3>Condition: {props.condition}</h3>
    </div>
  )
}

export default WeatherDisplay;