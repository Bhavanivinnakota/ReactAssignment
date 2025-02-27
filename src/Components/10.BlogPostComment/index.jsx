import React from 'react'

function BlogPost(props) {
  return (
    <div style={{width:"500px",height:"300px",margin:"auto 300px",border:"5px solid black",display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <h3>Title : {props.title}</h3>
      <h4>Author : {props.author}</h4>
      <h4>Date : {props.date}</h4>
      <h4>Content : {props.content}</h4>
    </div>
  )
}

export default BlogPost;