import React, { useState, useEffect, useRef  } from 'react'
import './details.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faGlobe, faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { project_data } from '../../data/projects_data'
import { motion } from 'framer-motion'
import NumberCounter from 'react-countup';
import rating2 from '../../Images/rating2.png'
import rating1 from '../../Images/rating1.png'
import rating from '../../Images/rating.png'

// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css'

import { faCode } from '@fortawesome/free-solid-svg-icons'
const Details = () => {
  const containerRef = useRef(null);
    const [iconsize, seticonchange] = useState(() => {
  return window.innerWidth <= 500 ? 'xl' : '2xl';
});

useEffect(() => {
 

  const handleResize = () => {
    seticonchange(window.innerWidth <= 500 ? 'xl' : '2xl');
  };

  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
  
  const [divClicked, setdivClicked] = useState(false)
  const [projIndexvalue, setprojIndexvalue] = useState(0);

  const setIndexvalue = (pro_indx) => {
    setprojIndexvalue(pro_indx)
    setdivClicked(true)

  }

const scrollRight = () => {
  if (containerRef.current) {
    containerRef.current.scrollLeft += 300;
};}
const scrollLeft = () => {
  console.log('ggg')
  if (containerRef.current) {
    containerRef.current.scrollLeft -= 200;
  }
};
  return (
    <div className='maindetails'>
      <div className="details_info">
        <span>... </span>
        <span className='stroke-text'>What I Am Great At</span>
        <div className="detail">
          <span>Explore our projects and services by clicking below! Feel free to dive into our work and utilize our offerings. Don't forget to check out our GitHub repository for code. We welcome your feedback and suggestions to help improve our projects</span>
        </div>
      </div>

      {divClicked && (
        <motion.div
          initial={{ scale: 0.7, opacity: 0, filter: 'blur(5px)' }}

          whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5 }}
          className="bckdiv">

          <div className="bckbx" ref={containerRef}>
            <div className={projIndexvalue === 3 ? 'langcls' : 'sectn' }>
              {projIndexvalue === 3 ? (
                <>{
                  project_data[3].map((lang, l) => (
                    <div className='progmn_data_bck_div' key={l} >

                      <span><img className='lang_img' src={lang.lang_img} alt="" /></span>
                      <span><img className='lang_img' src={lang.lang_img2} alt="" /></span>
                      <span><img className='lang_img' src={lang.lang_img3} alt="" /></span>
                      

                    </div>
                  ))}
                  <div className="five-rows">
                    <div>
                      <span>Python</span>
                      <span> <img className='star_img' src={rating} alt="" /> </span>
                      </div>
                    <div>
                      <span>ML</span><span> <img className='star_img' src={rating2} alt="" /> </span></div>
                    <div>
                      <span>JavaScript</span><span> <img className='star_img' src={rating1} alt="" /> </span>
                    </div>
                    <div><span>C++</span><span> <img className='star_img' src={rating2} alt="" /> </span>
                    </div>
                    <div><span>Cython</span><span> <img className='star_img' src={rating1} alt="" /> </span>
                    </div>
                    <div><span>HTML</span><span> <img className='star_img' src={rating1} alt="" /> </span>
                    </div>
                  </div>
                </>)
                :
                (project_data[projIndexvalue].map((proj, i) => (
          
                  <div onClick={() =>window.open(proj.proj_link)} className={`pro_name_des ${i ===0 ? 'malegap' : ''}`} key={i}>
                    
                    <div ><img src={proj.pro_img} />
                    </div>
                    <div  >
                      <span className='pro_name'>{proj.pro_name}</span>
                      <span className='proj_des'>{proj.pro_des}</span>
                      
                    </div>
                  </div>
                )))}
<div className='exit_icon'><FontAwesomeIcon onClick={() => setdivClicked(false)} icon={faCircleXmark} size="xl" /></div>

<div  id="scrollRight" className='rightarrow' onClick={scrollRight}><FontAwesomeIcon icon={faArrowRight} size='xl'/></div>

<div id='scrollLeft' className='leeft'    onClick={scrollLeft}><FontAwesomeIcon icon={faArrowLeft} size='xl'/></div>
            </div>
            
          </div>
          
        </motion.div>

      )}


      <div className={`wrk ${divClicked ? 'wrk_hide' : ''}`}>
        <div className="box wrk_one pro_data_one" onClick={() => setIndexvalue(0)} >
          <div className="container1">
            <FontAwesomeIcon icon={faGlobe} fade size={iconsize} />
          </div>
          <span>
            IOT/ELE
          </span>
          <span>
            4+ Works
          </span>
        </div>
        <div className="box wrk_one pro_data_two"
          onClick={() => setIndexvalue(1)}>
          <div className="container1">
            <FontAwesomeIcon icon={faLaptopCode} fade size={iconsize} />
          </div>
          <span>
            AI/ML
          </span>
          <span>
            4 Projects
          </span>
        </div>
        <div className="box wrk_one" onClick={() => setIndexvalue(2)}>
          <div className="container1">
            <FontAwesomeIcon icon={faCode} beatFade size={iconsize}  />
          </div>
          <span>
            Web Design
          </span>
          <span>
            7 Projects
          </span>
        </div>
        <div className="box wrk_one" onClick={() => setIndexvalue(3)}>
          <div className="container1">
            <FontAwesomeIcon icon={faFileCode} beatFade size={iconsize} />
          </div>
          <span>
            Pro-Lang
          </span>
          <span>
            4 Languages
          </span>
        </div>

      </div>
      <div className="details-data">
        <div className="expr">
          <div>
            <span>+</span>
            <span>0</span>
          </div>
          <span>Experince</span>
        </div>
        <div className="expr">
          <div>
            <span><NumberCounter end={20} start={8} delay='2' /></span>
            <span>+</span>
          </div>
          <span>Projects</span>
        </div>
        <div className="expr">
          <div>
            <span><NumberCounter end={8} start={2} delay='2' /></span>
            <span>+</span>
          </div>
          <span>Work</span>
        </div>
        <div className="expr">
          <div>
            <span><NumberCounter end={0} start={0} delay='2' /></span>
            <span></span>
          </div>
          <span>---</span>
        </div>
      </div>
      <div className=" detilblr blur"></div>

      {/* </div> */}


    </div>
  )
}

export default Details