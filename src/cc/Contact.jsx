import React, { useState } from "react";
import "./contact.css"

const Contact = () => { const [form, setForm] = useState({ name: "", email: "", number: "", description: "", });

const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

const handleSubmit = () => { const { name, email, number, description } = form; const message = 'Name: ${name}%0AEmail: ${email}%0APhone: ${number}%0ADescription: ${description}'; window.open('https://wa.me/9947863233?text=${message}', "_blank"); };

return ( <div className="max-w-md mx-auto p-4 border rounded shadow-md " > <h2 className="text-xl font-bold mb-4" id="hed">Contact Us</h2> 
<input type="text" name="name"placeholder="Name"value={form.name}onChange={handleChange}className="w-full p-2 mb-2 border rounded" id="name22"/> <br/>
<input type="email"name="email"placeholder="Email"value={form.email}onChange={handleChange}className="w-full p-2 mb-2 border rounded" id="email"/> <br/>
<input type="text"name="number"placeholder="Phone Number"value={form.number}onChange={handleChange}className="w-full p-2 mb-2 border rounded" id="number"/>
<br/>
 <textarea name="description"placeholder="Description"value={form.description}onChange={handleChange}className="w-full p-2 mb-2 border rounded" id="des"/> <br/>
 <button onClick={handleSubmit}className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600" id="bbt"> Send </button> </div> ); };

export default Contact;