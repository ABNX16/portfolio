// import React, { useState } from "react";
// import "./Skills.css"; // Import CSS file

// const skills = [
//   { name: "HTML & CSS", description: "Web structure & styling", icon: "🔤" },
//   { name: "JavaScript", description: "Dynamic web programming", icon: "💻" },
//   { name: "React JS", description: "Frontend UI framework", icon: "⚛️" },
//   { name: "Node.js", description: "Backend JavaScript runtime", icon: "🟢" },
// ];

// const Skills = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 2) % skills.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 2 + skills.length) % skills.length);
//   };

//   return (
//     <div className="carousel">
//       <button className="arrow left" onClick={prevSlide}>◀</button>

//       <div className="skills-container">
//         {skills.slice(index, index + 2).map((skill, i) => (
//           <div className="skill-box" key={i}>
//             <div className="skill-icon">{skill.icon}</div>
//             <h3>{skill.name}</h3>
//             <p>{skill.description}</p>
//           </div>
//         ))}
//       </div>

//       <button className="arrow right" onClick={nextSlide}>▶</button>
//     </div>
//   );
// };

// export default Skills;
import React, { useState } from "react";
import "./Skills.css"; // Import CSS file

const skills = [
  { name: "HTML", description: "Structuring the web", icon: <img src="https://cdn-icons-png.flaticon.com/256/121/121537.png" id="himg1"/> },
  { name: "CSS", description: "Styling the web", icon:<img src="https://cdn-icons-png.flaticon.com/512/25/25462.png" /> },
  { name: "JavaScript", description: "Making it interactive", icon:  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUJADLzIhSxxUGOXOIV042bnuZEovHiGPXw&s"/>},
  { name: "Node.js", description: "Backend development", icon: <img src="https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png"/> },
  { name: "React", description: "Building UI components", icon: <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"/> },
];

const Skills = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  return ( <div id="all">
    <div style={styles.container} >
      <h1 style={styles.heading}>My Skills</h1>
      <div style={styles.carousel} id="box">
        <div style={styles.skillBox} >
          <span style={styles.icon}>{skills[index].icon}</span>
          <h3 style={styles.skillTitle}>{skills[index].name}</h3>
          <p style={styles.description}>{skills[index].description}</p>
        </div>
        <div style={styles.skillBox}>
          <span style={styles.icon}>{skills[(index + 1) % skills.length].icon}</span>
          <h3 style={styles.skillTitle}>{skills[(index + 1) % skills.length].name}</h3>
          <p style={styles.description}>{skills[(index + 1) % skills.length].description}</p>
        </div>
      </div>
      <div style={styles.buttons}>
        <button onClick={prevSlide} style={styles.button}>←</button>
        <button onClick={nextSlide} style={styles.button}>→</button>
      </div>
    </div> </div>
  );
};

// Inline Styles
const styles = {
  container: {
    textAlign: "center",
    backgroundColor:"black",
    color: "white",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0px 4px 10px rgb(0, 0, 0)"
    
  },
 

  
  heading: {
    fontSize: "41px",
    marginBottom: "20px",
  },
  carousel: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    overflow: "hidden",
  },
  skillBox: {
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "8px",
    width: "200px",
    transition: "transform 0.4s ease-in-out",
    boxShadow: "0 4px 10px rgb(0, 0, 0)",
  },
  icon: {
    fontSize: "30px",
  },
  skillTitle: {
    fontSize: "18px",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#ccc",
  },
  buttons: {
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#444",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "5px",
    margin: "0 10px",
    transition: "background 0.3s",
  }
};

export default Skills;