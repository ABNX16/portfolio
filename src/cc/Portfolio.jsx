import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom'
import About from './About'

function Portfolio() {



  return (
    <div id='badhu'>
      <div class="floating"></div>

      <div class="con1">

        <div class="portfolio"><h1 id='hh1'>
          Portfolio
        </h1></div> <br />

        <div class="con15">

          <nav class="navbar navbar-expand-lg " id='nav1'>
            <div class="container-fluid">
              <a class="navbar-brand" href="#home">Home</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <Link to={'/about'} class="nav-link active" aria-current="page" href="#about">About</Link>
                  <a class="nav-link" href="#">Skill</a>
                  <a class="nav-link" href="#">Project</a>

                </div>
              </div>
            </div>
          </nav>
        </div>
      </div> <br />
      <div id='name' > <h1 id='name1'> Hey, I'm Aboobaker P Naushad,<br /> a Web Developer</h1> <br /><p id='pp1'>"a passionate Web Developer crafting clean, efficient, and user-friendly websites."</p>
        <button id='bb1'>Contact Me</button>  <button id='bb2'>My Work  </button>

        <img id='img1' src="https://cdni.iconscout.com/illustration/premium/thumb/working-on-computer-illustration-download-in-svg-png-gif-file-formats--work-from-home-pc-activities-pack-people-illustrations-9039212.png" /> </div>

      <br />
      <About></About>

    </div>
  )
}

export default Portfolio
