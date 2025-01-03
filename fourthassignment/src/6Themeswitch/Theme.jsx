import React from 'react'

function Theme() {
    const dark=()=>{
        var darkdom = document.querySelector("body");
        darkdom.style.backgroundColor="black";
        darkdom.style.color = "white"
    }
    const light=()=>{
        var lightdom = document.querySelector("body");
        lightdom.style.backgroundColor="white";
        lightdom.style.color = "black"
    }
  return (
    <div style={{boxShadow:"0 0 10px black",width:"500px",height:"100px",margin:"50px auto",display:"flex",justifycontent:"center",alignItems:"center"}}>
        <h1>Switch Themes</h1>
      <button onClick={dark}>DarkTheme</button>
      <button onClick={light}>lightTheme</button>

    </div>
  )
}

export default Theme