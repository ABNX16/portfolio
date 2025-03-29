
// import React, { useState } from "react";
// import "./Skills.css"; 

// const skills = [
//   { name: "HTML", description: "Structuring the web", icon: <img src="https://cdn-icons-png.flaticon.com/256/121/121537.png" id="himg1"/> },
//   { name: "CSS", description: "Styling the web", icon:<img src="https://cdn-icons-png.flaticon.com/512/25/25462.png" /> },
//   { name: "JavaScript", description: "Making it interactive", icon:  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUJADLzIhSxxUGOXOIV042bnuZEovHiGPXw&s"/>},
//   { name: "Node.js", description: "Backend development", icon: <img src="https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png"/> },
//   { name: "React", description: "Building UI components", icon: <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"/> },
// ];

// const Skills = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % skills.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
//   };

//   return ( <div id="all">
//     <div style={styles.container} >
//       <h1 style={styles.heading}>My Skills</h1>
//       <div style={styles.carousel} id="box">
//         <div style={styles.skillBox} >
//           <span style={styles.icon}>{skills[index].icon}</span>
//           <h3 style={styles.skillTitle}>{skills[index].name}</h3>
//           <p style={styles.description}>{skills[index].description}</p>
//         </div>
//         <div style={styles.skillBox}>
//           <span style={styles.icon}>{skills[(index + 1) % skills.length].icon}</span>
//           <h3 style={styles.skillTitle}>{skills[(index + 1) % skills.length].name}</h3>
//           <p style={styles.description}>{skills[(index + 1) % skills.length].description}</p>
//         </div>
//       </div>
//       <div style={styles.buttons}>
//         <button onClick={prevSlide} style={styles.button}>←</button>
//         <button onClick={nextSlide} style={styles.button}>→</button>
//       </div>
//     </div> </div>
//   );
// };


// const styles = {
//   container: {
//     textAlign: "center",
//     backgroundColor:"black",
//     color: "white",
//     padding: "40px",
//     borderRadius: "10px",
//     maxWidth: "600px",
//     margin: "auto",
//     boxShadow: "0px 4px 10px rgb(0, 0, 0)"
    
//   },
 

  
//   heading: {
//     fontSize: "41px",
//     marginBottom: "20px",
//   },
//   carousel: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     overflow: "hidden",
//   },
//   skillBox: {
//     backgroundColor: "#333",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "200px",
//     transition: "transform 0.4s ease-in-out",
//     boxShadow: "0 4px 10px rgb(0, 0, 0)",
//   },
//   icon: {
//     fontSize: "30px",
//   },
//   skillTitle: {
//     fontSize: "18px",
//     margin: "10px 0",
//   },
//   description: {
//     fontSize: "14px",
//     color: "#ccc",
//   },
//   buttons: {
//     marginTop: "20px",
//   },
//   button: {
//     backgroundColor: "#444",
//     color: "white",
//     border: "none",
//     padding: "10px 15px",
//     fontSize: "18px",
//     cursor: "pointer",
//     borderRadius: "5px",
//     margin: "0 10px",
//     transition: "background 0.3s",
//   }
// };

// export default Skills;

// import React from "react";

// const skills = [
//   { name: "HTML", description: "Structuring the web", icon: "📄" },
//   { name: "CSS", description: "Styling the web", icon: "🎨" },
//   { name: "JavaScript", description: "Making it interactive", icon: "⚡" },
//   { name: "Node.js", description: "Backend development", icon: "🖥️" },
//   { name: "React", description: "Building UI components", icon: "⚛️" },
// ];
import React,{useState} from "react";
import "./Skills.css"; 
import Nav from "./Nav";
import About from "./About";





const skills = [
  { 
    name: "HTML", 
    icon: "https://cdn-icons-png.flaticon.com/256/121/121537.png", 
    description: "The structure of web pages." 
  },
  { 
    name: "CSS", 
    icon: "https://cdn-icons-png.flaticon.com/512/25/25462.png", 
    description: "Styles and layouts for websites." 
  },
  { 
    name: "JavaScript", 
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUJADLzIhSxxUGOXOIV042bnuZEovHiGPXw&s", 
    description: "Interactive and dynamic web pages." 
  },
  { 
    name: "Node.js", 
    icon: "https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png", 
    description: "Server-side JavaScript runtime." 
  },
  { 
    name: "React", 
    icon: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png", 
    description: "A JavaScript library for building UI." 
  },
];

const Skills= ({showNav=true}) => { 
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return ( 
  <div> 
    {showNav && <Nav/>}
       
    <h1 id="sk">MY SKILLS</h1>
    <div style={styles.container}>
      {skills.map((skill, index) => (
        <div
          key={index}
          style={{
            ...styles.skillBox,
            ...(hoveredIndex === index ? styles.skillBoxHover : {}),
          }}
          className="skill-box"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={skill.icon} alt={skill.name} style={styles.icon} />
          <p style={styles.skillName}>{skill.name}</p>
          <p style={styles.description}>{skill.description}</p>
        </div> 
      ))}
     </div></div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: "40px",
   
    gap: "20px", // Space between boxes
  },

  skillBox: {
    width: "150px",
    height: "200px",
    backgroundColor: "#333",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  skillBoxHover: {
    boxShadow: "0px 0px 15px rgba(0, 170, 255, 1)", // Blue glow effect
    transform: "scale(1.1)",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
  skillName: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#00aaff",
    marginBottom: "5px",
  },
  description: {
    fontSize: "12px",
    color: "#ccc",
  },
};

export default Skills;