import React from 'react'
import "../App.css"
import { useState } from 'react'
import img1 from "../images/img1.PNG"
import img11 from "../images/img11.png"
//import img2 from "../images/img2.png"
//import img3 from "../images/img3.PNG"
import img33 from "../images/img333.png"
import img4 from "../images/img4.png"
import img44 from "../images/img44.png"
import img55 from "../images/img55.png"
//import img6 from "../images/img6.JPG"
import img66 from "../images/img66.jpg"
import gif1 from "../images/gif1.gif" 
import gif2 from "../images/gif2.gif" 
import x from "../images/x.png"
import "./myWorks.css"
//import "../app2.css"

const MyWorks = ({setMyWorks, setMyWorksCss, myWorks}) => {

  const [p1, setP1] = useState(false)
  const [p2, setP2] = useState(false)
  const [p3, setP3] = useState(false)
  const [p4, setP4] = useState(false)
  const [p5, setP5] = useState(false)
  const [p6, setP6] = useState(false)

  const xClicked = () => {
    setMyWorks(1)
    setMyWorksCss(2)
  }

  return (
    <div className= {myWorks === 2 ? 'my__works-content-on' : myWorks === 1 ? "my__works-content-off" : "my__works-content-initial"}>
      <img src={x} alt="" className='my__works-x' onClick={xClicked} />
      <div className='my__works-images-container'>
        <div className='my__works-content-left'>
          <img src={img11} alt="" className='i' onMouseEnter={()=>setP1(true)} />
          {p1 ? <img src={img1} alt="" className="img11" onMouseLeave={()=>setP1(false)}  /> : <></>}
          <p className={p1 ? "p1-on" : "p1-off"} >3D Drawing</p>
          <img src={gif2} alt="" className="i"  onMouseEnter={()=>setP2(true)}/>
          {p2 ? <img src={gif1} alt="" className="gif2" onMouseLeave={()=>setP2(false)}  /> : <></>}
          <p className={p2 ? "p2-on" : "p2-off"} >Fluent Analysis</p>
          <p className={p2 ? "p22-on" : "p22-off"} >(6DOF)</p>
          <img src={img33} alt="" className='i' onMouseEnter={()=>setP3(true)} onMouseLeave={()=>setP3(false)} />
          <p className={p3 ? "p3-on" : "p3-off"} >React Js</p>

        </div>
        <div className='my__works-content-right'>
          <img src={img44} alt="" className='i' onMouseEnter={()=>setP4(true)} />
          {p4 ? <img src={img4} alt="" className="img44" onMouseLeave={()=>setP4(false)}  /> : <></>}
          <p className={p4 ? "p4-on" : "p4-off"} >Mechanichal Analysis</p>
          <img src={img66} alt="" className='i' onMouseEnter={()=>setP5(true)} onMouseLeave={()=>setP5(false)} />
          <p className={p5 ? "p5-on" : "p5-off"} >Meshing</p>
          <img src={img55} alt="" className='i' onMouseEnter={()=>setP6(true)} onMouseLeave={()=>setP6(false)} />
          <p className={p6 ? "p6-on" : "p6-off"} >Python</p>
        </div>
      </div>
    </div>
  )
}
export default MyWorks
