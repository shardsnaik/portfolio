import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { checkAuthStatus } = useAuth();

  useEffect(() => {
    const handleAuthSuccess = async () => {
      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get('token');
      
      if (token) {
        localStorage.setItem('token', token);
        await checkAuthStatus();
        navigate('/');
      } else {
        navigate('/login');
      }
    };

    handleAuthSuccess();
  }, [location, navigate, checkAuthStatus]);

  return (
    <div className="auth-success" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h2>Authentication Successful!</h2>
      <p>Redirecting to your portfolio...</p>
    </div>
  );
};

export default AuthSuccess;