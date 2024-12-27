import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import name_img from '../../Images/LOGO.png';
import './header.css';

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../login_func/login_button';
import Logout_but from '../login_func/logout_button';


const insta_headr_link = 'https://www.instagram.com/sharadsnaik/';
const lnkdIn_hedr_link = 'https://www.linkedin.com/in/sharad-naik-b3238b239/';
const mail_headr_link = 'https://mail.google.com/mail/u/0/#inbox?compose=new';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const barr = window.innerWidth <= 500 ? true : false
  const [greaternav, smallernav] = useState(window.innerWidth <= 500)
  const header_link = (link) => {
    window.location.href = link;
  };

  const unopened = (value) => {
    setMenuOpened(value);
  };

  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    const handlesize = () => {
      smallernav(window.innerWidth <= 500)
    }
    window.addEventListener('resize', handlesize)
    return () => {
      window.removeEventListener('resize', handlesize)
    }
  }, [])



  return (
    <div className='header'>
      <div onClick={() => unopened(false)} >
        <img className="name-header" src={name_img} alt='no image found' style={{ width: '20vw' }} />
      </div>

      {menuOpened === false && barr === true ? (
        <div onClick={() => unopened(true)} className='mobile_menu'>
          <FontAwesomeIcon icon={faBars} />
        </div>
      ) : (
        <div className='mob_back' >
          <ul onClick={() => unopened(false)} className={greaternav ? 'mob_nav' : 'nav'} >
            <li><RouterLink to='/home' className="navl" >Home</RouterLink></li>
            <li><Link onClick={() => unopened(false)} to='contact' spy={true} smooth={true}>Contact</Link></li>

            <li>Documents</li>
            <li><Link onClick={() => unopened(false)} to='education' spy={true} smooth={true}>Education</Link></li>

              <li><RouterLink onClick={() => unopened(false)} to='/Personal' className="navl" >Personal</RouterLink></li>
<li>{isAuthenticated ? <Logout_but /> : <LoginButton />}</li>

              <div className='dup_social'>
                <li><FontAwesomeIcon className='linkd' icon={faLinkedin} fade onClick={() => header_link(lnkdIn_hedr_link)} /></li>
                <li><FontAwesomeIcon icon={faEnvelope} beatFade onClick={() => header_link(mail_headr_link)} /></li>
                <li><FontAwesomeIcon icon={faInstagram} fade onClick={() => header_link(insta_headr_link)} /></li>
              </div>

          </ul>
        </div>
        
      )}

<div className={greaternav ? 'socialnone' : 'social'}>
        <li><FontAwesomeIcon className='linkd' icon={faLinkedin} fade onClick={() => header_link(lnkdIn_hedr_link)} /></li>
        <li><FontAwesomeIcon icon={faEnvelope} beatFade onClick={() => header_link(mail_headr_link)} /></li>
        <li><FontAwesomeIcon icon={faInstagram} fade onClick={() => header_link(insta_headr_link)} /></li>
      </div>
    </div>
  );
};

export default Header;
