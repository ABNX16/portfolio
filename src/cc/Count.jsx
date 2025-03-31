import { useState } from "react";
import './count.css'

export default function Count() { const [count, setCount] = useState(1);

const increment = () => { setCount((prev) => (prev + 1) % 10000); };
const deg = () => { setCount((prev) => (prev - 1) % 10000); };
const re = () => { setCount((prev) => (prev * 0) % 10000); };

return ( <div id="d3f7h1"> <div id="l9m3p2"> {count.toString().padStart(4, "0").split(" ").map((digit, index) => ( <span key={index} className="digit">{digit}</span> ))} </div> <button id="gkq61" onClick={increment}>Increase</button> <button id="gkq61" onClick={deg}>Decrease</button> <button id="gkq62" onClick={re}>Reset</button> </div> ); }



