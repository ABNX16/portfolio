import { useState } from "react"; import "./cal.css";

export default function Calculator() { const [input, setInput] = useState("0");

const handleClick = (value) => { if (value === "AC") { setInput("0"); } else if (value === "=") { try { setInput(eval(input).toString()); } catch { setInput("Error"); } } else { setInput((prev) => (prev === "0" ? value : prev + value)); } };

const buttons = [ "7", "8", "9", "/", 
    "4", "5", "6", "*",
     "1", "2", "3", "-",
      "0", ".", "=", "+", "AC" ];

return ( <div className="calculator"> <div className="display">{input}</div> 
<div className="buttons"> {buttons.map((btn) => 
( <button key={btn} onClick={() =>
     handleClick(btn)} id="b1b"> {btn} </button> ))} </div>
      </div> ); }