import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./contactMe.css"
import x from "../images/x.png"


const Form = ({setContactMe, setContactMeCss, contactMe}) => {

    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")
    const [contact, setContact] = useState("")
    
    const form = useRef();

    const xClicked = () => {
        setContactMe(1)
        setContactMeCss(2)
    }
    
    const sendEmail = (e) => {
        e.preventDefault();        
    
        emailjs.sendForm('service_tswylxi', 'template', form.current, 'user_bdQ3MSWzmgI6u2QdjfWu3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log("asd");
          });
        setSubject("")
        setContent("")
        setContact("")
      };
    
    return (
        <div className={contactMe == 2 ? 'contact__me-content-on' 
                        : contactMe == 1 ? "contact__me-content-off" 
                        : "contact__me-content-initial"}>
            <form ref={form} className='form' onSubmit={e => sendEmail(e)} >
                <img className='x' alt="" src={x} onClick={xClicked}/> 
                <p className='title'>You can write me anything!</p>
                <textarea
                    className='subject'
                    rows={2}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder='subject'
                    name='subject'
                />
                <textarea
                    className='content'
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='content'
                    name='content'
                />
                <textarea 
                    className='contact'
                    value={contact}
                    placeholder='Your contact'
                    onChange={(e) => setContact(e.target.value)}
                    name='contact'
                />
                <input 
                    type="submit"
                    className='submit'
                    value="send"
                />
            </form>
        </div>
    )
}

export default Form;
