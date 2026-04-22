import React,{useState} from 'react'
import '../styles/navbar.css'
import { Link} from 'react-scroll'
function Navbar() {
const [state,setState] = useState(false)
const [state2,setState2] = useState(false)
const [nav , setNav] = useState(false)
function menu(){
  if (state==false){
    setState(true)
    setState2(true)
  }
  else{
    setState(false)
    setState2(false)
  }
}

function navbarscroll(){
if(window.scrollY >= 60)
{
  setNav(true)
}
else{
  setNav(false)
}
}
window.addEventListener("scroll", navbarscroll)
  return (
    <div>
      <div className={nav ? 'navbar1' : 'navbar'}>
        <div className='logo'>
          <img className='imglogo' src='../assets/2.png'></img>
        </div>
        <button onClick={menu} className='mobile-toggle' aria-controls='ultexts' aria-expanded={state2}></button>
        <div className='texts'>
          <ul className='ultexts' id='ultexts' data-visible={state}>
          <Link  to="home" spy={true} smooth={true} offset={-100} duration={250}><li>HOME</li></Link>
          <Link  to="about" spy={true} smooth={true} offset={-100} duration={250}><li>ABOUT</li></Link>
          <Link  to="service" spy={true} smooth={true} offset={-100} duration={250}><li>SERVICES</li></Link>
          <Link  to="portfolio" spy={true} smooth={true} offset={-100} duration={250}><li>PORTFOLIO</li></Link>
          <Link  to="faq" spy={true} smooth={true} offset={-100} duration={250}><li>FAQ'S</li></Link>
          <Link  to="contact" spy={true} smooth={true} offset={-100} duration={250}><li className='contact-btn'>CONTACT</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar