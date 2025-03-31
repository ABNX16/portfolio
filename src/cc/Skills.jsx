
// import React, { useState } from "react";
// import "./Skills.css";
// import Nav from "./Nav";
// import About from "./About";
// import Footer2 from "./Footer2";

// const skills = [
//   { 
//     name: "HTML", 
//     icon: "https://cdn-icons-png.flaticon.com/256/121/121537.png", 
//     description: "The structure of web pages." 
//   },
//   { 
//     name: "CSS", 
//     icon: "https://cdn-icons-png.flaticon.com/512/25/25462.png", 
//     description: "Styles and layouts for websites." 
//   },
//   { 
//     name: "JavaScript", 
//     icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUJADLzIhSxxUGOXOIV042bnuZEovHiGPXw&s", 
//     description: "Interactive and dynamic web pages." 
//   },
//   { 
//     name: "Node.js", 
//     icon: "https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png", 
//     description: "Server-side JavaScript runtime." 
//   },
//   { 
//     name: "React", 
//     icon: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png", 
//     description: "A JavaScript library for building UI." 
//   },
// ];

// const Skills = ({ showNav = true , showFoot = true}) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div>
//       {showNav && <Nav />}

//       <h1 id="sk">MY SKILLS</h1>
//       <div style={styles.container}>
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.skillBox,
//               ...(hoveredIndex === index ? styles.skillBoxHover : {}),
//             }}
//             className="skill-box"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <img src={skill.icon} alt={skill.name} style={styles.icon} />
//             <p style={styles.skillName}>{skill.name}</p>
//             <p style={styles.description}>{skill.description}</p>
//           </div>
//         ))}
//       </div> 
//       <div>  <footer> 
//      {showFoot && <Footer2/>}
     
//      </footer> </div>
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexWrap: "wrap",
//     backgroundColor: "#000",
//     padding: "40px",
//     gap: "20px",
//   },
//   skillBox: {
//     width: "150px",
//     height: "200px",
//     backgroundColor: "#333",
//     padding: "15px",
//     borderRadius: "8px",
//     textAlign: "center",
//     transition: "transform 0.3s, box-shadow 0.3s",
//     cursor: "pointer",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//   },
//   skillBoxHover: {
//     boxShadow: "0px 0px 15px rgba(0, 170, 255, 1)",
//     transform: "scale(1.1)",
//   },
//   icon: {
//     width: "50px",
//     height: "50px",
//     marginBottom: "10px",
//   },
//   skillName: {
//     fontSize: "14px",
//     fontWeight: "bold",
//     color: "#00aaff",
//     marginBottom: "5px",
//   },
//   description: {
//     fontSize: "12px",
//     color: "#ccc",
//   },
// }

// export default Skills;

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import Nav from "./Nav";
import Footer2 from "./Footer2";

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

const Skills = ({ showNav = true , showFoot = true }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      {showNav && <Nav />}

      <motion.h1
        id="sk"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        MY SKILLS
      </motion.h1>
      
      <div style={styles.container}>
        {skills.map((skill, index) => {
          let initialX = 0;
          let delay = 0;

          if (skill.name === "HTML") {
            initialX = 100;
            delay = 0.2;
          } else if (skill.name === "CSS") {
            initialX = 50;
            delay = 0.4;
          } else if (skill.name === "JavaScript") {
            initialX = 0;
            delay = 0.6;
          } else if (skill.name === "Node.js") {
            initialX = -50;
            delay = 0.8;
          } else if (skill.name === "React") {
            initialX = -100;
            delay = 1;
          }

          return (
            <motion.div
              key={index}
              initial={{ x: initialX, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay }}
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
            </motion.div>
          );
        })}
      </div> 
      <div>
        <footer> 
          {showFoot && <Footer2/>}
        </footer> 
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#000",
    padding: "40px",
    gap: "20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    
    marginBottom: "20px",
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
    boxShadow: "0px 0px 15px rgba(0, 170, 255, 1)",
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
}

export default Skills;
