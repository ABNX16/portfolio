import React from 'react'
import './ab.css'
import Nav from './Nav'
import Footer2 from './Footer2'

function About({ showNav = true , showFoot = true}) {
  return (
    <div>
      <div>  {showNav && <Nav />}</div>
      <div class="about me" >
  <div id='tit'>
    <h1 id='hh2'> ABOUT ME </h1><br/>
    <p id='pp2'> Hello! I'm Aboobaker P Naushad, a passionate and dedicated MERN Stack Developer currently honing my skills at Zoople. My journey into web development<br/> started with a deep curiosity about how websites and applications work behind the scenes. Over time, this curiosity turned into a passion, driving me to specialize <br/>in full-stack development with MongoDB, Express.js, React.js, and Node.js.

As a developer, I love crafting efficient, scalable, and user-friendly web applications that <br/> not only look great but also provide a seamless user experience. Whether it's designing dynamic front-end interfaces with React.js, developing powerful backend solutions <br/> with Node.js and Express, or managing databases with MongoDB, I enjoy every aspect of web development.
<br /><br /> <br/>
  enjoy working on both front-end and back-end development, ensuring a seamless user experience with clean and efficient code. My expertise includes:<br/> <br/>
 

Front-End Development – Creating modern, interactive UI using React.js, HTML, CSS, and JavaScript.<br/> <br />


Back-End Development – Building powerful APIs and server-side logic with Node.js and Express.js.<br/> <br/>


Database Management – Using MongoDB for efficient data storage and retrieval.<br/> <br/>


Full-Stack Development – Integrating front-end and back-end for complete web applications.<br/> <br/> <br/>



I believe in continuous learning and staying updated with the latest technologies to build innovative and impactful solutions. My goal is to grow as a skilled developer, <br/>work on exciting projects, and contribute to the tech industry with creativity and efficiency.

If you're looking for a dedicated developer ready to take on<br/> challenges and bring ideas to life, let’s connect and build something great together!</p>
  </div></div>   <div>  <footer id='a5a'> 
     {showFoot && <Footer2/>}
     
     </footer> </div> </div>
    
  )
}

export default About
