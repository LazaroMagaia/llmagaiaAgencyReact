import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div>
        <div className='navbar-footer'>
            <div className='container'>
            <center>
                <NavLink to="/">home</NavLink>
                <Link className='scroll-link' to="about" spy={true} smooth={true}>About</Link>
                <Link className='scroll-link' to="service" spy={true} smooth={true}>Service</Link>
                <NavLink to="/contact">contact</NavLink>
            </center>
            </div>
            <div className='navbar-footer-social'>
            <center>
                <a href="https://github.com/LazaroMagaia/" rel="noopener noreferrer" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/Llmagaia-107426398572139" rel="noopener noreferrer" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/llmagaia/" rel="noopener noreferrer" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://dribbble.com/llmagaia" rel="noopener noreferrer" target="_blank">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
                <a href="https://twitter.com/Ryussui" rel="noopener noreferrer" target="_blank">
                  <i className="fa-brands fa-twitter" ></i>
                </a>
                <a href="https://wa.me/827017601" rel="noopener noreferrer" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
            </center>
            </div>
        </div>
    </div>
  )
}

export default Footer