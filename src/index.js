import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Personal from './components/inner/personal/Personal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import corrected components

import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <React.StrictMode>
  <Router>
  <ToastContainer/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/Personal" element={<Personal />} />
      </Routes>
    </Router>    
  </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
