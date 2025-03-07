//import "./pages/Register.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "", age: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.age < 18) {
      alert("You must be 18+ to register.");
      return;
    }
    alert("Successfully Registered!");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        <input type="password" placeholder="Password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <input type="number" placeholder="Age" required onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
