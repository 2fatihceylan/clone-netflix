import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

   

    window.onscroll = () =>{
        handleShow(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }


  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
            alt='Netflix Logo'
        />
        <img
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Netflix Avatar'
        />
    </div>
  )
}

export default Nav