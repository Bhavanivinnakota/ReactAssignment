import React from 'react'

function Gridlayout() {
    const products = ["Laptop", "Smartphone", "Tablet", "Smartwatch",
        "Camera"];
  return (
    <div>
        <div className="grid-container container text-center">
             {
              products.map((element)=>{
                return <div className="grid-item">
                     {element}
                    </div>
              })
             }
        </div>
    </div>
  )
}

export default Gridlayout