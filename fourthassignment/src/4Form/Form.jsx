import React from 'react'

function Form() {
    const fields = [
        { label: "Username", type: "text", name: "username" },
        { label: "Email", type: "email", name: "email" },
        { label: "Password", type: "password", name: "password" }
        ];
  return (
    <div>
        <div style={{boxShadow:"0 0 10px black",margin:"50px auto",width:"400px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <form>
                {
                   fields.map((element)=>{
                        return <div>
                            <label>{element.label}</label>
                            <input type={element.type} placeholder={element.name}/>
                            
                        </div>
                   })
                }
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form