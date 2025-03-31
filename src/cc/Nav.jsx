import React, { useState } from 'react';
import './portfolio2.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close of the nav links

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state when button is clicked
  };

  return (
    <div>
      <div id="header">
        <div id="logo"></div>
        
        {/* Toggle Button */}
        <button className="nav-toggle-btn" onClick={toggleMenu}>
          {isOpen ? 'X' : '☰'} {/* Show X when menu is open, hamburger icon when closed */}
        </button>
        
        <div id="nav-links" className={isOpen ? 'open' : ''}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link to={'/home'} className="nav-link">Home</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link to={'/about'} className="nav-link">About</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link to={'/skill'} className="nav-link">Skills</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link to={'/works'} className="nav-link">Works</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Link to={'/contact'} className="nav-link">Contact</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
