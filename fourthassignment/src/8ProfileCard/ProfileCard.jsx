import React from 'react'

function ProfileCard({image,name,desc}) {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{boxShadow:"0 0 10px black",width:"500px",height:"500px"}}>
        <img src={image} width={"300px"} height={"300px"}/>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
    </div>
  )
}

export default ProfileCard