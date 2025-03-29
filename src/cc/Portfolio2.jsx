import React from "react";
import{motion} from 'framer-motion'

import './portfolio2.css'
import { Link } from 'react-router-dom'
import About from './About'
import Skills from "./Skills";
import Works from "./Works";
import ContactForm from "./Contact";
import Nav from "./Nav";


function Portfolio2() {
  return (
    <div>
 
    <div> <Nav/></div>

      
      <div id="name1">
       
        <div id="name">
          <h1>I'm Aboobaker P Naushad, a Web Developer</h1>
          <p id="pp1">a passionate Web Developer crafting clean, efficient, and user-friendly websites.</p>
         <motion.button
  id="bb1"
  initial={{ y: -100, opacity: 0 }} // Start above with opacity 0
  animate={{ y: 0, opacity: 1 }} // Move to normal position
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
>
  Contact me
</motion.button> 
        </div> </div>

       
        <div id="side">
          <div className="abw" id="about">
          <About />
            <Link to={'/about'} class="nav-link active" aria-current="page" href="#about">Learn More →</Link>
          </div>
          {/* <div className="abw">
            <h1 id="work">My Work</h1>
            <p>work are here</p>
            <a href="">Browse Portfolio →</a>
          </div> */}
        </div>
      
      <div id="skill">
        
        
        <Skills showNav={false}/> 


      </div>
      <div id="work">

       <Works/>

      </div>
      <div>
        <ContactForm/>
      </div>


      <div id="footer">
        {/* <a href="#"> LinkedIn</a>
        <a href="#"> Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a> */}
      </div>
    </div>
  );
}

export default Portfolio2;
