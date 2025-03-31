import React, { useState } from "react";



const Apt = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    id: "",
    specialization: "",
    date: "",
    time: "",
  });

  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      alert("Fill all the fields");
    } else {
      setAppointmentBooked(true);
    }
  };

  if (appointmentBooked) {
    return (
      <div className="confirmation-container">
        <h1>Appointment Booked</h1>
        <h2>Appointment ID: 20918</h2>
        <div className="details">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>ID:</strong> {formData.id}</p>
          <p><strong>Specialization:</strong> {formData.specialization}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Zico</a>
        </div>
      </nav>

      <h1 className="text-center">Zico Hospitals</h1>
      <div className="form-container">
        <h3 className="text-center">Book Your Appointment</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Patient Name" className="form-control" onChange={handleChange} /><br />
          <input type="number" name="age" placeholder="Patient Age" className="form-control" onChange={handleChange} /><br />
          <input type="text" name="id" placeholder="Patient ID" className="form-control" onChange={handleChange} /><br />
          <select name="specialization" className="form-select" onChange={handleChange}>
            <option value="">Select Specialization</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Oncologist">Oncologist</option>
            <option value="General Surgery">General Surgery</option>
          </select><br />
          <input type="date" name="date" className="form-control" onChange={handleChange} /><br />
          <input type="time" name="time" className="form-control" onChange={handleChange} /><br />
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
      
      <footer className="text-center mt-4">
        <p>&copy; Zico Hospitals | Contact: 9876543211 | Email: zicohospitalsmed@ja.com</p>
      </footer>
    </div>
  );
};

export default Apt;
