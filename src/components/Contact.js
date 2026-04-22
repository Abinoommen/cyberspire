import React from 'react'
import '../styles/Contact.css'
function Contact() {
  return (
    <div className='contact' data-aos="fade-right" id='contact'><h1 style={{textAlign:"center", color:"#1B4375"}}>Contact us</h1>
    <div className='allthings'>
    <div className='contact-tab'>
     <div className='piccs'>
        <img src='../assets/whatsapp.png'></img>
        <div className='fll'>
        <p>Whatsapp:</p>
        <p>+16478970746</p>
        </div>
     </div>
     <div className='piccs'>
        <img src='../assets/email.png'></img>
        <div className='fll'>
        <p>Email:</p>
        <p>oommenabin@gmail.com</p>
        </div>
     </div>
     <div className='piccs'>
        <img src='../assets/telephone.png'></img>
        <div className='fll'>
        <p>Call:</p>
        <p>+16478970746</p>
        </div>
     </div>
     <div className='piccs'>
        <img src='../assets/open.png'></img>
        <div className='fll'>
        <p>Openhours:</p>
        <p>Monday - Sunday</p>
        <p>9:00am -5:00pm</p>
        </div>
     </div>
    </div>
    <div className='writing-area'>
        <form>
            
                <div className='fff'><input className='twobox' type='text' placeholder='Name'>

                </input>
                <input className='twobox' type='email' required placeholder='Your email'>
                    
                </input></div>
                <input  className='otherbox' type='text' placeholder='Subject'>
                    
                </input>
                <input className='otherbox' type='text' placeholder='Message'>
                    
                </input>
                <div style={{textAlign:"center"}}><button type='submit' className='sub'>Submit</button></div>
            
        </form>
    </div>
    </div>
    </div>
  )
}

export default Contact