import React from 'react'

function Render() {
    const title = "Understanding JSX";
const content = "JSX allows you to write HTML in React.";
const tags = ["React", "JavaScript", "JSX"];
  return (
    <div>
        <div className="blog-post">  
             <h1>Title : {title}</h1>
             <p>Content : {content}</p>
             <ol>
                {
                    tags.map((element)=>{
                        return <li>{element}</li>
                    })
                }
             </ol>
        </div>
    </div>
  )
}

export default Render