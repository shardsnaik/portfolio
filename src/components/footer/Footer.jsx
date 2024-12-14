import React,{useRef, useState} from 'react'
import './footer.css'

import { Link as RouterLink } from 'react-router-dom'

// import demo from './footerjs'
// import all_data from './footerjs'
import { demo, demo2, leetdemo, lindemo,maildemo } from './footerjs'
import { toast, Bounce } from 'react-toastify';
import { Button } from '../../style/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPaste } from '@fortawesome/free-solid-svg-icons'
import git  from '../../Images/git.jpeg'
import linkedin  from '../../Images/linkedin.png'
import leetcode  from '../../Images/leetcode.png'
import Gmail  from '../../Images/Gmail.png'
import insta  from '../../Images/insta.png'

import emailjs from '@emailjs/browser'

const Footer = () => {
  const form = useRef();
const tostmes =()=>{
  toast.info('This is not curently available!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    } )
}
const tosterr =()=>{
  toast.error('Sorry! you dont have permision to access', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    } )
}
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_q59ubfo', 'template_wkuqjsl', form.current, {
      publicKey: 'mEeh9ttZHVrUsMY4L',
    })
    .then(
      () => {
        toast.success('Subscribed 👍', {
          position: "top-right",
          autoClose: 3001,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          })
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    }
  return (
    <div name = 'contact' className='footer'>
        <div className="upper footer">
            <div className='f-text'>
            <span>Am  I Capable !?</span>                        
            <span>Talk To Me Today  </span>                        
         
            </div>
            <div className="blur footerblur"></div>
              <div><Button className='btn ftrbtn' onClick={lindemo}> Contact</Button></div>

        <div className="blur footerblurtwo"></div>
        </div>

        <div className="lower_footer">
          <div className='lowr_ftr'>
            <li>About Us</li>
            <li><RouterLink to='/Personal' className="navl">Hobies</RouterLink></li>
            <li><RouterLink to='/Personal' className="navl">Certificates</RouterLink></li>
            <li onClick={tostmes}>Blog</li>
            <li onClick={tostmes}> FAQ~</li>
          </div>
          <div className='lowr_ftr ftrli'>
            <li>Resources</li>
            <li onClick={tostmes} >Docs </li>
            <li onClick={tosterr}>Drive</li>
            <RouterLink to='/Personal' className="navl">Codes</RouterLink>
            <li onClick={tosterr} >Cloud</li>
          </div>
          <div className='lowr_ftr'>
            <li>Others</li>
            <li onClick={tostmes}>Feedback</li>
            <li onClick={tostmes} >Assitant</li>
            <div >
 <form className='ftrmail' ref={form} onSubmit={sendEmail}>
              <input type='email' name='user_email' placeholder='Enter your Email Adress'></input>
              <Button className="btn emaibtn">  Subscribe</Button>
            </form>
          </div>

        </div>
        <div></div>
        <div></div>

      </div>
      <div className="lstftr" style={{height: '26vh'}}>
          <hr className='line' />
          <div className='blur blrftrone'></div>
          <div className='blur blrftrtwo'></div>
          <div className="ftrsocial">
          <img style={{ height: '5vh', borderRadius: '2vh' }} src={git} alt="GitHub" onClick={demo}  />
          <img style={{ height: '8vh', borderRadius: '2vh' }} src={linkedin} alt="linkedin" onClick={lindemo} />
          <img style={{ height: '5vh', borderRadius: '2vh' }} src={leetcode} alt="leetcode" onClick={leetdemo} />
          <img style={{ height: '5vh', borderRadius: '2vh' }} src={Gmail} alt="Gmail" onClick={maildemo} />
          <img style={{ height: '6vh', borderRadius: '2vh' }} src={insta} alt="intagram" onClick={demo2} />

          </div>
        </div>
        <div className='finlwrld'>
          <span>made with love <FontAwesomeIcon icon={faHeart}  /></span>
          <span>Chat-Gpt Free <FontAwesomeIcon icon={faPaste} size='xl' /></span>
        </div>
         
      </div>
  )
}
export default Footer