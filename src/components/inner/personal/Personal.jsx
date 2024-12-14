import React, { useEffect } from 'react';
import Header from '../../header/Header';
import './personal.css';
import pythoncir from '../../../data/Sharad_Naik.pdf'
import nn from '../../../data/jj.pdf'
const Personal = () => {
  const opencerti = (value)=>{
window.open(value, '_blank')
  }
  useEffect(() => {
    document.querySelectorAll('.persnl_mainbx').forEach(item => {
      item.addEventListener('mouseenter', event => {
        const hoverName = item.querySelector('.hover_name');
        hoverName.style.display = 'block';
        hoverName.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
          hoverName.style.display = 'none';
        }, 1000); // Hide after 2 seconds
      });
    });

    
  }, []); 

  return (
    <>
      <Header />
      <div className='persnl_mainbx'>
        <div className="item">
          <h3 onClick={()=>{opencerti()}} >Intership PCB Design</h3>
        </div>
        <span className='hover_name'>Certificates</span>
        <div className="item">
          <h3 onClick={() =>{opencerti(pythoncir)}}>Coursera Introduction to Python</h3>
        </div>
      </div>
    </>
  );
};

export default Personal;
