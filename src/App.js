import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import About from './components/About'
import Services from './components/Services';
import Scroll from './components/scroll';
import Portfolio from './components/Portfolio';
import Typewriter from 'typewriter-effect';
import FAQ from './components/FAQ';
import AOS from 'aos';
import Footer from './components/footer';
import Contact from './components/Contact';
import 'aos/dist/aos.css';
function App() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <div className="App"><Navbar/>
      <div className='first' id='home'><div className='writing'><div className='flexdirection'><h1 style={{color:"white"}} className='ftext'><Typewriter
  options={{
    strings: ['Let us bring forth your digital dream into reality'],
    autoStart: true,
    loop: true,
    delay: 15 
  }}/></h1><div><h3 className='stext' style={{color:"white"}}>With the artistry of our team of skilled developers and designers</h3></div></div></div></div>
  <img className='img-canva' src='../assets/g.png'></img>
      <About/><svg className='svv' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F6F6F6" fill-opacity="1" d="M0,192L80,160C160,128,320,64,480,69.3C640,75,800,149,960,165.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <Services/>
      <Portfolio/>
      <FAQ/>
      <Contact/>
      <Footer/>
      <Scroll/>
    </div>
  );
}

export default App;
