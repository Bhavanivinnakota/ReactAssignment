import React from 'react'

function Weather({city,temp,icon}) {
  return (
    <div style={{boxShadow:"0 0 10px black",width:"150px"}}>
      <img src={icon} width={"100px"} height={"100px"}/>
      <h3>{city}</h3>
      <h2>{temp}</h2>
    </div>
  )
}

export default Weather