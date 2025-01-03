import React from 'react'

function Images({url}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
        <div>
        <img src={url} width={"300px"} height={"300px"}/>
        </div>
    </div>
  )
}

export default Images