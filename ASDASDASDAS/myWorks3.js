import React from 'react'
import "../App.css"
import { useState } from 'react'
import img1 from "../images/img1.PNG"
import img2 from "../images/img2.png"
import img3 from "../images/img3.PNG"
import img4 from "../images/img4.png"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.JPG"
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

  const [imgOn, setImgOn] = useState(false)


  const xClicked = () => {
    setMyWorks(false)
    setMyWorksCss(false)
  }

  return (
    <div className= {myWorks ? 'my__works-content-on' : "my__works-content-off"}>
      <img src={x} className='my__works-x' onClick={xClicked} />
      <div className='my__works-images-container'>
        <div className='a'>      
          <img src={img1} className='i1' onMouseEnter={()=>setP1(true)} onMouseLeave={()=>setP1(false)} />
          <p className="p1-on" >3D Drawing</p>
        </div>
        <div className='a'>
          <img src={img2} className='i2' onMouseEnter={()=>setP2(true)} onMouseLeave={()=>setP2(false)} />
          <p className={p2 ? "p2-on" : "p2-off"} >Fluent Analysis</p>
          <p className={p2 ? "p22-on" : "p22-off"} >(6DOF)</p>
        </div>
        <div className='a'>
          <img src={img3} className='i3' onMouseEnter={()=>setP3(true)} onMouseLeave={()=>setP3(false)} />
          <p className={p3 ? "p3-on" : "p3-off"} >website</p>
        </div>
        <div className='a'>
          <img src={img4} className='i4' onMouseEnter={()=>setP4(true)} onMouseLeave={()=>setP4(false)} />
          <p className={p4 ? "p4-on" : "p4-off"} >Mechanichal Analysis</p>
        </div>
        <div className='a'>
          <img src={img5} className='i5' onMouseEnter={()=>setP5(true)} onMouseLeave={()=>setP5(false)} />
          <p className={p5 ? "p5-on" : "p5-off"} >Python</p>
          </div>
        <div className='a'>
          <img src={img6} className='i6' onMouseEnter={()=>setP6(true)} onMouseLeave={()=>setP6(false)} />
          <p className={p6 ? "p6-on" : "p6-off"} >Mesh</p>
        </div>
      </div>
    </div>
  )
}

export default MyWorks
