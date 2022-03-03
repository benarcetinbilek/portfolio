import './App.css';
import { useState } from 'react';
import pp from "./pp.png"
import ContactMe from "./components/ContactMe.js"
import logo4 from "./images/logo4.gif"
import AboutMe from "./components/aboutMe.js"
import MyWorks from "./components/myWorks.js"

function App() {

  const [contactMe, setContactMe] = useState(0)
  const [aboutMe, setAboutMe] = useState(false)
  const [myWorks, setMyWorks] = useState(false)
  const [alert, setAlert] = useState(false)

  const [contactMeCss, setContactMeCss] = useState(2)
  const [aboutMeCss, setAboutMeCss] = useState(2)
  const [myWorksCss, setMyWorksCss] = useState(2)

  const {contactMeClose, setContactMeClose} = useState(false)
  //const {aboutMeClose, setAboutMeClose} = useState(false)
  //const {myWorksClose, setMyWorksClose} = useState(false)
    
  const contactMeClicked = () => {
    contactMe === 1 ? setContactMe(2) : contactMe === 2 ? setContactMe(1) : setContactMe(2)
    contactMeCss == 1 ? setContactMeCss(2) : contactMeCss == 2 ? setContactMeCss (1) : setContactMeCss(1)
  }

  const aboutMeClicked = () => {
    aboutMe === 1 ? setAboutMe(2) : aboutMe === 2 ? setAboutMe(1) : setAboutMe(2)
    aboutMeCss === 1 ? setAboutMeCss(2) : aboutMeCss === 2 ? setAboutMeCss(1) : setAboutMeCss(1)
  }

  const myWorksClicked = () => {
    myWorks === 1 ? setMyWorks(2) : myWorks === 2 ? setMyWorks(1) : setMyWorks(2)
    myWorksCss === 1 ? setMyWorksCss(2) : myWorksCss === 2 ? setMyWorksCss(1) : setMyWorksCss(1)
  }

  const alertt = () => {
    setAlert(true)
    setTimeout(function(){setAlert(false)},1500)
  }

  return (
    <div className="App">
      <div className='logo' >
        
      </div>
      <div className={alert ? "alert" : "alert-off"}>
        <p>You are already on this page!</p>
      </div>
      <div className='main__content-window'>
        <div className='contactme_container' >
          <ContactMe contactMe={contactMe} setContactMe={setContactMe} setContactMeClose={setContactMeClose} setContactMeCss={setContactMeCss} contactMeClose={contactMeClose} /> 
        </div>        
        <div className='buttons__and-about-me'>
          <div className='buttons'>            
            <div className={contactMeCss == 1 ? "contact__me-button-clicked" : contactMeCss == 2 ? 'contact__me-button-clicked-again' : "contact__me-button"}
              onClick={contactMeClicked}
              >
              <p className='p1'>CONTACT ME</p>
            </div>
            <div className={aboutMeCss === 1 ? "about__me-button-clicked" : aboutMeCss === 2 ? 'about__me-button-clicked-again' : "about__me-button"} 
              onClick={aboutMeClicked}>
              <img src={pp} alt="logo" />
              <p className='p2'>ABOUT ME</p>
            </div>
            <div className= {myWorksCss === 1 ? "my__works-button-clicked" : myWorksCss === 2 ? 'my__works-button-clicked-again' : "my__works-button"} 
              onClick={myWorksClicked}>
              <p className='p3'>MY WORKS</p>
            </div>
          </div>            
          <div className='aboutme_container'>
            <AboutMe aboutMe={aboutMe} setAboutMe={setAboutMe} setAboutMeCss={setAboutMeCss} />  
          </div>         
        </div>
        <div className='myworks_container'>
          <MyWorks setMyWorks={setMyWorks} myWorks={myWorks} setMyWorksCss={setMyWorksCss} />
        </div>  
      </div>
      <div className='features'>
        <p>visitors today: 3</p>
      </div>
    </div>    
  );
}

export default App;
