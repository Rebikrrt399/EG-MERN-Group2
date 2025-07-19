import axios from 'axios';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',      // Changed from username to email
    password: '',
    rememberMe: false
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:4000/api/auth/login", {
      email: formData.email,
      password: formData.password
    });

    console.log("✅ Login successful:", res.data);

    window.location.href = "/dashboard"; // ✅ Semicolon added
  } catch (err) {
    console.error("Login failed:", err);
    setError(err.response?.data?.message || "Login failed. Please try again.");
  }
};


  return (
    <div className="login-container">
      <div className="login-card">
        <div className="avatar-container">
          <div className="avatar">
            <FaUser className="avatar-icon" />
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
              Remember me
            </label>
            
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
