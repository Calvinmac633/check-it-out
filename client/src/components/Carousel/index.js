import React from "react";
import Slide1 from '../../images/Slide1.png';
import Slide2 from '../../images/Slide4.png';
import Slide3 from '../../images/Slide3.png';
import { Button, Carousel } from 'react-bootstrap';

function ControlledCarousel() {
  return (
      <div className="container">
      <Carousel style={{  width: 900,
        height:500, overflow: 'hidden',
        margin: 'auto'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide1}
            alt="First slide"
        />
        <Carousel.Caption style={{ bottom: '20%' }}>
          <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Third slide"
        />
    
        <Carousel.Caption style={{ bottom: '20%' }}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
        />
    
        <Carousel.Caption style={{ bottom: '20%' }}>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      <div className="container my-5 text-center">
        <Button variant="primary" size="lg" onClick={() => {
          window.location = "/signup";
        }} block style={{ width: 200, margin: 'auto' }}>
         Signup
      </Button>
      </div>
      
      </div>
    );
  }
  export default ControlledCarousel; 