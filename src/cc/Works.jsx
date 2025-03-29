import React, { useState } from "react";
import './work.css'

const apps = [
  {
    name: "Calculator",
    description: "Perform basic calculations",
    icon: "https://img.icons8.com/ios7/600/FFFFFF/apple-calculator.png",
  },
  {
    name: "Appointment Form",
    description: "Schedule your Doctor's appointments",
    icon: "https://static.thenounproject.com/png/1072808-200.png",
  },
  {
    name: "Counting App",
    description: "Keep track of numbers",
    icon: "https://cdn-icons-png.flaticon.com/512/6134/6134688.png",
  },
];

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return ( 
    <div style={styles.container} >
      <h2 style={styles.heading}>My Apps</h2>
      <div style={styles.grid}>
        {apps.map((app, index) => (
          <div
            key={index}
            style={{
              ...styles.appBox,
              ...(hoveredIndex === index ? styles.appBoxHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={app.icon} alt={app.name} style={styles.icon} />
            <h3 style={styles.appTitle}>{app.name}</h3>
            <p style={styles.description}>{app.description}</p>
          </div>
        ))}
      </div>
    </div>
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
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0 4px 10px rgb(0, 0, 0)",
    cursor: "pointer",
    width: "200px",
  },
  appBoxHover: {
    transform: "scale(1.1)",
    boxShadow: "0px 0px 20px rgba(0, 170, 255, 0.7)",
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