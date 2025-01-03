import React from 'react'

function Conditionstyle({ status }) {
    
        let message = "Pending...";
        let backgroundColor = "yellow";
      
        if (status === "success") {
          message = "Operation Successful";
          backgroundColor = "green";
        } else if (status === "error") {
          message = "Operation Failed";
          backgroundColor = "red";
        }
    
  return (
    <div style={{backgroundColor ,color: "white", padding: "10px", borderRadius: "5px", textAlign: "center" }}>
       {message}
    </div>
  )
}

export default Conditionstyle;