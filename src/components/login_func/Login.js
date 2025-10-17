import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const { login, signup, googleLogin } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    let result;
    if (isLogin) {
      result = await login(formData.email, formData.password);
    } else {
      result = await signup(formData.name, formData.email, formData.password);
    }

    if (result.success) {
      setMessage(`${isLogin ? 'Login' : 'Signup'} successful!`);
      // Redirect will happen automatically through context
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login to Portfolio' : 'Sign Up for Portfolio'}</h2>
      
      {message && (
        <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <div className="auth-divider">OR</div>

      <button 
        className="google-btn"
        onClick={googleLogin}
      >
        Continue with Google
      </button>

      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span 
          className="auth-toggle"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
  );
};

export default Login;