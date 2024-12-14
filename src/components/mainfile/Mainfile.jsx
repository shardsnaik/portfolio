import React, { useState, useEffect } from 'react';

import './mainfile.css'
// import { Button } from 'react-native'
import { Button } from '../../style/button'
import img from '../../Images/img.png'
const Mainfile = () => {
const heirme_linkenin =()=>{
  window.open('https://www.linkedin.com/in/sharad-naik-b3238b239/', '_blank')
}
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <div className='main'>
      <div className="left">
        <div className="greet">
          <span className='stroke-text'>Hello </span>
          <span> I am </span>

        </div>
        <div className="name_details">
          <div><span >SHARAD</span>
          <span className='stroke-text surename' > NAIK</span></div>          
          <div className="details">
          <p>Seeking a beginner role to enhance and explore my technical knowledge gained at University in the last two-three years.</p>
          </div>
        </div>
        <div className='p_into'>~ Proficient in programming languages such Python, and Javascript.
</div>
        <div className='p_into'>~ Strong problem-solving and analytical skills</div>
        <div className="hierme">
          <Button className='btn hrme' onClick={heirme_linkenin} >Hier-Me</Button>
        </div>
      </div>
      <div className="middle">
        <div className="bakgrnd"></div>
        <div className="back blur"></div>
        <div className="image">
          <img src={img} alt='no' style={{
      width: windowWidth <= 500 ? '47vw' : '25vw'
    }}/>
        </div>
        <div className="back2 blur"></div>
      </div>
      <div className="right">
        <div className="heading1">
          <span>-----</span>
        </div>
        <div className="main_file_data two">
          <p>Enthusiastic and motivated recent graduate seeking entry-level positions in the fields of Information Technology and Electronics.</p>
        </div>
        <div className="he">
          <span>Eager to apply academic knowledge and gain hands-on experience in a professional setting.</span>
        </div>
      </div>
</div>
  )
}

export default Mainfile