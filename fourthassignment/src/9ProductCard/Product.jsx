import React from 'react'

function Product({image,price,name}) {
  return (
    <div>
        <div style={{boxShadow:"0 0 10px black",width:"400px",height:"450px"}}>
            <img src={image} width={"300px"} height={"300px"}/>
            <h1>{name}</h1>
            <h3>{price}</h3> 
            <button>AddToCart</button>
        </div>
    </div>
  )
}

export default Product