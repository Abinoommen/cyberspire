import React from 'react'
import '../styles/About.css'
function About() {
  return (
    <div className='About' id='about'>
        <h1 style={{textAlign:'center', color:"#1B4375"}}>About us</h1>
        <div className='contents'>
            <div className='who' data-aos="fade-right">
                <h4 style={{color:"#38B6FF"}}>WHO ARE WE</h4>
                <h3>We are a tem of dedicated developers</h3>
                <p>Our expert team of developers will help you create an engaging, user-friendly website / app that is optimized for search engine visibility, social media integration, and increased conversions. We specialize in crafting custom designs that are tailored to your brand, giving you the edge you need to stand out from the competition. Let us help you take your business to the next level with our professional Web and App Design Services!

Read More
</p>
            </div>
            <div data-aos="fade-left" className='image-who' style={{textAlign:"center"}}>
                <img className='image-who' src="../assets/3.png"></img>
            </div>
        </div>
        
    </div>
  )
}

export default About