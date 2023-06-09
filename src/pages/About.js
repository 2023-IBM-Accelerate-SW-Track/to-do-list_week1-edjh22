import React, { Component } from 'react';
import "./About.css";
import digital_board from "../assets/digital_board.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
    
          alt='digital_board='
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Jose Hernandez</div>
        <div className="brief_description">
          
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}