import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    alert("Login Successful!");
    navigate("/auction");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="User Icon" className="user-icon" />
        <h2>Welcome Back!</h2>
        <p>Enter your credentials to continue</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="/register">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
