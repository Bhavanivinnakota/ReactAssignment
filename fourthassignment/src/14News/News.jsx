import React from 'react'

function News({headline,description,artimg}) {
  return (
    <div style={{boxShadow:"0 0 10px black",fontSize:"17px",width:"350px"}}>
        <img src={artimg} width={"300px"} height={"300px"}/>
    <h1>{headline}</h1>
    <h4>{description}</h4>
    
    </div>
  )
}

export default News