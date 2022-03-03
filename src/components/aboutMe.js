import React from 'react'
import "./aboutMe.css"
import x from "../images/x.png"
//import "../app2.css"

const aboutMe = ({setAboutMe, setAboutMeCss, aboutMe}) => {

    const xClicked = () => {
        setAboutMe(1)
        setAboutMeCss(2)
    }
    
    return (
        <div className={aboutMe === 2 ? 'about__me-content-on' : aboutMe === 1 ? "about__me-content-off" : "about__me-content-initial"}>
            <img alt="" className='about__me-x' src={x} onClick={xClicked} />
            <div className='paragraph' >
                <p>Hello my name is benar Cetinbilek</p>
                <p>I am actually a mechanichal engineer</p>
                <p>But right now studying MSc in computer science</p>            
                <p>And there is nothing i can not accomplish</p>   
                <a href="./public/Benar_CETINBILEK-cv.pdf" download >click for my cv</a>     
            </div>    
        </div>    
    )
}
export default aboutMe
