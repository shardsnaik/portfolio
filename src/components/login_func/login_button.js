// filepath: /c:/Users/Public/React-JS/Self_Portfolio/portfolio/src/components/LoginButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './button_log_in_out.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className='auth-button' onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;