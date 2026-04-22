import React from 'react'
import '../styles/Services.css'
import Service from '../data/Service'
import {Card, Container, Row, Col} from 'react-bootstrap';

function Services() {
  const Data = Service.services
  return (
    <div className='Services' id='service'>
        <h1 style={{textAlign:'center',paddingBottom:"50px", color:"#1B4375"}}>Service</h1>
        <div  className='Alldata'>
        <Row xs={1} md={2} className="g-4 ff">
      {Data.map((idx) => (
        <Col key={idx}>
          <Card className='cards' data-aos="flip-up">
            <Card.Img variant="top" src={idx.img} />
            <Card.Body>
              <Card.Title className='hh'>{idx.title}</Card.Title>
              <Card.Text style={{textAlign:'center', color:"white"}}>
                {idx.Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
    </div>
  )
}

export default Services