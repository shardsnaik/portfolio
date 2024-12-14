import React from 'react'
import './startup.css'
import { Button } from '../../style/button'
import topImag from '../../Images/Main.jpeg'
import nd from '../../Images/fff.jpg'
import clip from '../../Images/2ndmidleclip.mp4'

const startup = () => {
  return (
    <div className='start-detail'>
      <div className="left-startup">
        <span>hello</span>
        <span className='one'>Welcome to Best</span>
        <span className='stroke-text' >H-A-F-E</span>
        <div className='about-strup'><span>
          Home Automation For Everyone. Bacially its a paln for providing cheap reliable Iot devices to home. We can convert your exsiting manual controlled equipments into digtal, IOT and voice based mechanism in offordable prices.
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

export default startup