import React from "react";
import {Button} from 'react-bootstrap';
import AppBar from "../AppBar";
import cart from "../../images/giphy.gif"
function Gif() {
  return (
    <div>
      <AppBar/>
      <div className="container">
      <div className="container my-5 text-center">
      <img src={cart} alt="shopping cart" block style={{ width: 300,}} />
      <Button variant="" size="lg" onClick={() => {
            window.location = "/lookup";
          }} block style={{ width: 180, margin: 'auto',color: '#856c8b',fontSize: '35px', fontFamily:"londrina Shadow",backgroundColor:"#fcf8f3",borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px", border: "5px solid #856c8b"}}>
          Let's Get Started
        </Button>
        </div>

      </div>
    </div>
      );
    }
    export default Gif; 