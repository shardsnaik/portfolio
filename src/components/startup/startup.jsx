import React, { useState, useEffect } from 'react'
import './startup.css'
import { Button } from '../../style/button'
import topImag from '../../Images/Main.jpeg'
import nd from '../../Images/fff.jpg'
import clip from '../../Images/2ndmidleclip.mp4'

const Startup = () => {
  
  return (
    <div className='start-detail'>
      <div className="left-startup">
        <span>hello</span>
        <span className='one'>Welcome to Best</span>
        <span className='stroke-text' >H-A-F-E</span>
        <div className='about-strup'><span>
        The "IoT Home Automation for Everyone" project seeks to democratize smart home
technology by making it accessible and affordable for a wider audience. By leveraging the
capabilities of ESP-32 and ESP-01 modules it allows users to control their home devices
from anywhere in the world using their smartphones. And ensure seamless operation even
in the absence of an internet connection by incorporating offline control mechanisms.
Promote energy efficiency by enabling features like automated scheduling and remote
monitoring of energy consumption. And when it cames to security it implements robust
security measures, such as HTTPS communication, to protect user data and prevent
unauthorized access.
        </span></div>
        <div>
          <Button className='btn knw'>know more</Button>
        </div>
      </div>
      <div className="right-startup">
        <div className="grid_img">
          <div><img src={topImag} alt='' /></div>
          <div><video autoplay loop width="100%" height="100%" >
            <source src={clip} type="video/mp4" />
            Your browser does not support the video tag.
          </video></div>
          <div><img src={topImag} alt='' /></div>
          <div><img src={nd} alt='' /></div>

        </div>
      </div>

    </div>
  )
}

export default Startup