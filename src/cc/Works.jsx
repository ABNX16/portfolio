// import React, { useState } from "react";
// import './work.css'
// import Nav from "./Nav";
// import Footer2 from "./Footer2";
// import { Link } from 'react-router-dom'
// import App from "../App";



// const apps = [
//   {
//     name: "Calculator",
//     description: "Perform basic calculations",
//     icon: "https://img.icons8.com/ios7/600/FFFFFF/apple-calculator.png",
//     path:  '/cal'
//   },
//   {
//     name: "Appointment Form",
//     description: "Schedule your Doctor's appointments",
//     icon: "https://static.thenounproject.com/png/1072808-200.png",
//     path: './apt'
//   },
//   {
//     name: "Counting App",
//     description: "Keep track of numbers",
//     icon: "https://cdn-icons-png.flaticon.com/512/6134/6134688.png",
//     path: './cot'
//   },
// ];

// const Works = ({ showNav = true , showFoot = true }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (  <div> <div>  {showNav && <Nav />} </div>
//      <div style={styles.container} >
//       <h2 style={styles.heading}>My Apps</h2>
//       <div style={styles.grid}>
//         {apps.map((app, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.appBox,
//               ...(hoveredIndex === index ? styles.appBoxHover : {}),
//             }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <img src={app.icon} alt={app.name} style={styles.icon} />
//             <h3 style={styles.appTitle}>{app.name}</h3>
//             <p style={styles.description}>{app.description}</p>
//             <button id="bb1b">
//                 <Link to={app.path} >
//                   TRY IT
//                 </Link>  </button>
           
//           </div>
//         ))}
//       </div> </div>   <div>  <footer> 
//      {showFoot && <Footer2/>}
     
//      </footer> </div>
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   container: {
//     textAlign: "center",
//     backgroundColor: "black",
//     color: "white",
//     padding: "40px",
//     borderRadius: "10px",
//     maxWidth: "800px",
//     margin: "auto",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//   },
//   heading: {
//     fontSize: "24px",
//     marginBottom: "20px",
//     color: "white",
//   },
//   grid: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//   },
//   appBox: {
//     backgroundColor: "#333",
//     padding: "20px",
//     borderRadius: "8px",
//     textAlign: "center",
//     transition: "transform 0.3s, box-shadow 0.3s",
//     boxShadow: "0 4px 10px rgb(0, 0, 0)",
//     cursor: "pointer",
//     width: "200px",
//   },
//   appBoxHover: {
//     transform: "scale(1.1)",
//     boxShadow: "0px 0px 20px rgba(0, 170, 255, 0.7)",
//   },
//   icon: {
//     width: "50px",
//     height: "50px",
//     marginBottom: "10px",
//   },
//   appTitle: {
//     fontSize: "18px",
//     margin: "10px 0",
//     color: "#00aaff",
//   },
//   description: {
//     fontSize: "14px",
//     color: "#ccc",
//   },
// };

// export default Works;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Apt from "./Apt";
import Calculator from "./Calculator";
import Count from "./Count";
import './work.css';
import Nav from "./Nav";
import Footer2 from "./Footer2";
import { Link } from 'react-router-dom';
import App from "../App";

const apps = [
  {
    name: "Calculator",
    description: "Perform basic calculations",
    icon: "https://img.icons8.com/ios7/600/FFFFFF/apple-calculator.png",
    path: '/cal'
  },
  {
    name: "Appointment Form",
    description: "Schedule your Doctor's appointments",
    icon: "https://static.thenounproject.com/png/1072808-200.png",
    path: './apt'
  },
  {
    name: "Counting App",
    description: "Keep track of numbers",
    icon: "https://cdn-icons-png.flaticon.com/512/6134/6134688.png",
    path: './cot'
  },
];

const Works = ({ showNav = true, showFoot = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % apps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    > 
      {showNav && <Nav />} 
      <div style={styles.container}>
        <h2 style={styles.heading}>My Apps</h2>
        <div style={styles.grid}>
          {apps.map((app, index) => (
            <motion.div
              key={index}
              style={styles.appBox}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 170, 255, 0.7)" }}
            >
              <img src={app.icon} alt={app.name} style={styles.icon} />
              <h3 style={styles.appTitle}>{app.name}</h3>
              <p style={styles.description}>{app.description}</p>
              <button id="bb1b">
                <Link to={app.path}>TRY IT</Link>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {showFoot && <Footer2 />} 
    </motion.div>
  );
};

// Inline Styles
const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  appBox: {
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgb(0, 0, 0)",
    cursor: "pointer",
    width: "200px",
    transition: "opacity 0.8s ease-in-out"
  },
  icon: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
  appTitle: {
    fontSize: "18px",
    margin: "10px 0",
    color: "#00aaff",
  },
  description: {
    fontSize: "14px",
    color: "#ccc",
  },
};

export default Works;