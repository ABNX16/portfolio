import React from 'react';
import './portfolio2.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Nav() {
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
            <Link to={'/about'} className="nav-link" aria-current="page" href="#about">About</Link>
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
    </div>
  );
}

export default Nav;
