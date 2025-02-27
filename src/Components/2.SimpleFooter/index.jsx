import React from 'react'
import "./styles.css"
function Footer() {
  return (
    <div className="container">
        <h3><b>Our Leadership and People</b></h3>
        <h4>Images from Freepik</h4>
        <section className="contain">
       <div className="card">
         <img src="https://i.pinimg.com/564x/10/11/38/101138716e268c39e49b77a158bce102.jpg" className="image" width="100px" height="100px" />
         <p>WALTER LILLY</p>
         <h5>Partner</h5>
         <div className="symbols">
         <a href="" className="bi bi-instagram"></a>
          <a href="" className="bi bi-facebook"></a>
         <a  href="" className="bi bi-linkedin"></a>
         </div>
       </div>
       <div className="card">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZzUOKRuQUwwRD2aU3VKAON-iDdMkHlnlKg&s" className="image" width="100px" height="100px"/>
         <p>JEFFREY BROWN</p>
         <h5>Worldwide Partner</h5>
         <div className="symbols">
         <a href="" className="bi bi-instagram"></a>
          <a href="" className="bi bi-facebook"></a>
         <a  href="" className="bi bi-linkedin"></a>
         </div>
       </div>
       <div className="card">
         <img src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg" className="image" width="100px" height="100px"/>
         <p>ALEX GREENFIELD</p>
         <h5>Partner</h5>
         <div className="symbols">
         <a href="" className="bi bi-instagram"></a>
          <a href="" className="bi bi-facebook"></a>
         <a  href="" className="bi bi-linkedin"></a>
         </div>
       </div>
       </section>
    </div>
  )
}

export default Footer;