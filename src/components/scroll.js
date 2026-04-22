import React,{useState, useEffect} from 'react'
import '../styles/scroll.css'

function Scroll() {
    const [scr, setSrc]= useState(false)

    useEffect(()=>{
window.addEventListener("scroll", () =>{
    if(window.scrollY >= 400)
    {
        setSrc(true)
    }
    else{
        setSrc(false)
    }
})
    },[])
    
    
     const scrollupa = () =>{
        window.scrollTo ( {
            top: 0,
            behavior: "smooth"
        })
     }      
            

       
 

    
  return (<div>
    {scr && (<div  onClick={scrollupa}><svg width={79} height={79} className='scrollup'  data-aos={ scr ? "fade-up" : "fade-up" } fill="#ff4747" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
   <path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.769 9.769 0 0 0 12 2.25Zm3.713 9.713a.731.731 0 0 1-.535.215.711.711 0 0 1-.525-.216L12.75 10.06v5.691a.75.75 0 1 1-1.5 0v-5.69l-1.903 1.902a.75.75 0 0 1-1.06-1.059l3.179-3.178a.816.816 0 0 1 .243-.169.778.778 0 0 1 .582 0c.09.041.173.098.243.169l3.178 3.178a.75.75 0 0 1 0 1.06Z" />
</svg></div>)}
 </div> )
}

export default Scroll