// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './components/login_func/AuthContext';
// import ProtectedRoute from './components/login_func/ProtectedRoute';
// import Login from './components/login_func/Login';
// import AuthSuccess from './components/login_func/AuthSucess';

// const PortfolioLayout = ()=> {
//   const {user} = useAuth();

//   return (
//     <div className='App' style={{ overflowX: 'hidden' }}>
//       <Header />
//       <Mainfile />

//      <ProtectedRoute>
//       <Details />
//      </ProtectedRoute>

//       <Startup />
//       <Education />
//       <Footer />
//     </div>
//   );
// };
// function App(){
//   return(
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} ></Route>
//           <Route path="/auth/success" element={<AuthSuccess />} />
//           <Route 
//             path="/" 
//             element={
//               <ProtectedRoute>
//                 <PortfolioLayout />
//               </ProtectedRoute>
//             } 
//           />
//           <Route path="*" element={<Navigate to="/" />} />

//         </Routes>
//       </Router>
//     </AuthProvider>
//   )
// }
// export default App;

import './App.css';
import Header from './components/header/Header'
import Mainfile from './components/mainfile/Mainfile';
import Details from './components/details/Details'
import Startup from './components/startup/Startup'
import Education from './components/education/Education';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <Mainfile />
      <Details />
      <Startup />
      <Education />
      <Footer />
    </div>
  );
}
export default App;
