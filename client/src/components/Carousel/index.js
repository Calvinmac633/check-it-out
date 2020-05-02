import React from "react";
import Slide1 from '../../images/Slide1.png';
import Slide2 from '../../images/Slide4.png';
import Slide3 from '../../images/Slide3.png';
import { Button, Carousel } from 'react-bootstrap';
import AppBar from "../AppBar";
import "./Carousel.css";

function ControlledCarousel() {
  return (
    <div>
     <AppBar link1="/signup" text1="Sign up" link2="/signin" text2="Sign in"/>
      <div className="container">
      
      <Carousel className= "" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide1}
            alt="First slide"
        />
        <Carousel.Caption style={{ bottom: '20%' }}>
        <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Third slide"
        />
    
        <Carousel.Caption style={{ bottom: '20%' }}>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
        />
    
        <Carousel.Caption style={{ bottom: '20%' }}>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      <div className="container my-5 text-center">
        <Button variant="" size="lg" onClick={() => {
          window.location = "/lookup";
        }} block style={{ width: 200, margin: 'auto',color: '#856c8b',fontSize: '50px', fontFamily:"londrina Shadow",backgroundColor:"#fcf8f3",borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px", border: "5px solid #856c8b"}}>
         Sign up
      </Button>
      </div>
      
      </div>
      </div>
    );
  }
  export default ControlledCarousel; 