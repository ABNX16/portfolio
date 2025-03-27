import React from "react";
import './portfolio2.css'
import { Link } from 'react-router-dom'
import About from './About'
import Skill from "./Skills";


function Portfolio2() {
  return (
    <div>
 
      <div id="header">
        <div id="logo"> </div>
        <div id="nav-links">
          <a href="#name" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <Link to={'/skill'} class="nav-link active" aria-current="page" href="#about">Skills</Link>
          <a href="#work" className="nav-link">work</a>
          <a href="#" className="nav-link">contact</a>
          
        </div>
      </div>

      
      <div id="name1">
       
        <div id="name">
          <h1>I'm Aboobaker P Naushad, a Web Developer</h1>
          <p id="pp1">a passionate Web Developer crafting clean, efficient, and user-friendly websites.</p>
          <button id="bb1">contact me</button> 
        </div>

       
        <div id="side">
          <div className="abw">
          <About id="about"/>
            <Link to={'/about'} class="nav-link active" aria-current="page" href="#about">Learn More →</Link>
          </div>
          <div className="abw">
            <h1 id="work">My Work</h1>
            <p>work are here</p>
            <a href="">Browse Portfolio →</a>
          </div>
        </div>
      </div>
      <div id="skill">
        
        <Skill/>


      </div>

      <div id="footer">
        {/* <a href="#">🔗 LinkedIn</a>
        <a href="#">🐦 Twitter</a>
        <a href="#">📷 Instagram</a>
        <a href="#">🎥 YouTube</a> */}
      </div>
    </div>
  );
}

export default Portfolio2;