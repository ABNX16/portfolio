import React, { useState } from "react";
import { motion } from 'framer-motion';
import './portfolio2.css';
import { Link, useNavigate } from 'react-router-dom';
import About from './About';
import Skills from "./Skills";
import Works from "./Works";
import ContactForm from "./Contact";
import Nav from "./Nav";
import Footer from "./Footer";
import Footer2 from "./Footer2";

function Portfolio2() {
  const [isOpen, setIsOpen] = useState(false); // State to manage nav menu open/close
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Header and Navigation */}
      <div id="header">
        <div id="logo"></div>

        {/* Toggle Button */}
        <button className="nav-toggle-btn" onClick={toggleMenu}>
          {isOpen ? 'X' : '☰'} {/* Toggle between hamburger and close */}
        </button>

        {/* Navigation Links */}
        <div id="nav-links" className={isOpen ? 'open' : ''}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link to={'/home'} className="nav-link" aria-current="page">Home</Link>
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
            <Link to={'/skill'} className="nav-link" aria-current="page">Skills</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link to={'/works'} className="nav-link" aria-current="page">Works</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Link to={'/contact'} className="nav-link" aria-current="page">Contact</Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
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
            I'm a passionate web development student at Zoople, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. I love building dynamic, responsive, and user-friendly web applications.
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

      {/* Sections */}
      <div id="123">
        <motion.div className="abt">
          <motion.div id="t12">
            <motion.h1 id="hhh2">ABOUT ME</motion.h1>
            <motion.p id="ppp2">
              "I'm Abubaker, a MERN Stack Developer in training at Zoople, passionate about creating modern, efficient, and user-friendly web applications."
            </motion.p>
          </motion.div>

          <motion.div>
            <Link to={'/about'} className="nav-link active" id="bbb1">
              Learn More →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills, Works, and Contact Sections */}
      <div id="skill">
        <Skills showNav={false} showFoot={false}/>
      </div>

      <div id="work">
        <Works showNav={false} showFoot={false}/>
      </div>

      <div id="coq">
        <ContactForm showNav={false} showFoot={false}/>
      </div>

      {/* Footer */}
      <div id="footer">
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default Portfolio2;
