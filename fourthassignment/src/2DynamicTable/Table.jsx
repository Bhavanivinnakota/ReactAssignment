import React from 'react'

function Table() {
    const data = [
        { name: "Alice", age: 25, location: "New York" },
        { name: "Bob", age: 30, location: "San Francisco" },
        { name: "Charlie", age: 35, location: "Los Angeles" }
        ];
  return (
    <div>
        <h1>Table Data</h1>
  {

         <table border="3px" className="table table-dark table-striped-columns">
            <tbody>
            {
                data.map((element)=>{
                    return <tr>
                        <td>{element.name}</td>
                        <td>{element.age}</td>
                        <td>{element.location}</td>
                    </tr>
                })
            }
            </tbody>
         </table>
  }
    </div>
  )
}

export default Table