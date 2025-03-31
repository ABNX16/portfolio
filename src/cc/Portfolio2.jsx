import React from "react";
import{motion} from 'framer-motion'


import './portfolio2.css'
import { Link,useNavigate } from 'react-router-dom'
import About from './About'
import Skills from "./Skills";
import Works from "./Works";
import ContactForm from "./Contact";

import Nav from "./Nav";
import Footer from "./Footer";
import Footer2 from "./Footer2";

function Portfolio2() {
  const navigate = useNavigate();
  return (
    <div>
 
     <div id="header">
           <div id="logo"> </div>
           <div id="nav-links">
             <motion.div
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.3 }}
             >
               <Link to={'/home'} className="nav-link" aria-current="page" href="#home">Home</Link>
             </motion.div>
   
             <motion.div
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
             >
              <a href="#t12" className="nav-link">About</a>
             </motion.div>
   
             <motion.div
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.7 }}
             >
               <Link to={'/skill'} className="nav-link" aria-current="page" href="#skills">Skills</Link>
             </motion.div>
   
             <motion.div
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.9 }}
             >
               <Link to={'/works'} className="nav-link" aria-current="page" href="#works">Works</Link>
             </motion.div>
   
             <motion.div
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 1.1 }}
             >
               <Link to={'/contact'} className="nav-link" aria-current="page" href="#contact">Contact</Link>
             </motion.div>
           </div>
         </div>

      
              <div id="name1">    
  <motion.div id="name">
    <motion.h1
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      I'm Aboobaker P Naushad, a Web Developer
    </motion.h1>

    <motion.p
      id="pp1"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
    >
      I'm a passionate web development student at Zoople, specializing in the
      MERN (MongoDB, Express.js, React.js, Node.js) stack. I love building
      dynamic, responsive, and user-friendly web applications.
   

    <img src="https://i.postimg.cc/kXT3JVDy/photopic.png" id="img"/>
     </motion.p>
    <motion.button
      id="bb1"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
      onClick={() => navigate('/contact')}
    >
      Contact me
    </motion.button>
  </motion.div>
</div>

       
<div id="123">
  <motion.div
    className="abt"
    initial={{ y: -100, opacity: 0 }} // Start from above with opacity 0
    animate={{ y: 0, opacity: 1 }} // Move to normal position
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div
      id="t12"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        id="hhh2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ABOUT ME
      </motion.h1>
      <br />
      <motion.p
        id="ppp2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Slight delay for smooth effect
      >
        "I'm Abubaker, a MERN Stack Developer in training at Zoople, passionate
        about creating modern, efficient, and user-friendly web applications.
        <br />
        My journey into web development began with a deep curiosity for how the
        internet works, and since then, I’ve been honing my skills in
        <br />
        MongoDB, Express.js, React.js, and Node.js to build full-stack
        applications."
      </motion.p>
    </motion.div>

    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // More delay for sequential effect
    >
      <Link to={'/about'} className="nav-link active" aria-current="page" id="bbb1">
        Learn More →
      </Link>
    </motion.div>
  </motion.div>

          {/* <div className="abw">
            <h1 id="work">My Work</h1>
            <p>work are here</p>
            <a href="">Browse Portfolio →</a>
          </div> */}
        </div>
      
      <div id="skill">
        
        
        <Skills showNav={false}  showFoot={false}/> 


      </div>
      <div id="work">
      

       <Works showNav={false}  showFoot={false}/>

      </div>
      <div id="coq">
        <ContactForm showNav={false}  showFoot={false}/>

      
      </div>

      <div id="footer">
     <footer> 
      <Footer/> 
     
     </footer> </div>
    </div>
  );
}

export default Portfolio2;
