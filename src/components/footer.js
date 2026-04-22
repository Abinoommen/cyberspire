import React from 'react'
import '../styles/footer.css'
import { Container } from "react-bootstrap";
function footer() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1B487A" fill-opacity="1" d="M0,256L24,229.3C48,203,96,149,144,112C192,75,240,53,288,85.3C336,117,384,203,432,240C480,277,528,267,576,224C624,181,672,107,720,69.3C768,32,816,32,864,64C912,96,960,160,1008,170.7C1056,181,1104,139,1152,122.7C1200,107,1248,117,1296,133.3C1344,149,1392,171,1416,181.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
      

  <div className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><img className="mmm" src="https://tse3.mm.bing.net/th?id=OIP.0jl9haemnq0P4eYzzrfNOgHaGw&pid=Api&P=0&h=180" alt=""/></li>
					   <li><img className="mmm" src="https://www.logolynx.com/images/logolynx/98/987bc5dfce1a9b029a0a30c5154b0aa4.jpeg" alt=""/></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">Menu</a></li>
  	 				<li><a href="#">Contact</a></li>
  	 				<li><a href="#">Location</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </div>

</div>);
}

export default footer;