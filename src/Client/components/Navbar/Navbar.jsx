import React,{useState} from 'react';
import LogoImg from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import {Nav} from './NavbarElement';
import './navbar.css';
import { Link } from 'react-scroll'
const Navbar = () => {
    const [isOpen,setIsOpen]= useState(false);
    const toggleClass = ()=>{
        if(isOpen === true)
        {
            setIsOpen(false);
        }else
        {
            setIsOpen(true);
        }   
    }
  return (
    <div className='container'>
        <div className='nav-space'>
            <nav>
                <div className='logo'>
                        <NavLink to="/"><img src={LogoImg} alt={LogoImg}/></NavLink>
                    </div>
                <div className='menu-list'>
                    <ul>
                        <Link className='nav-a-link' to="about">Sobre mim</Link>
                        <Link className='nav-a-link' to="service">Serviços</Link>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                        {/*<NavLink to="/blog">Blog</NavLink> */}
                    </ul>
                </div>
                <div className='contact'>
                    <NavLink to="/contact">Contacto</NavLink>
                </div>

                <div className="menu-fixed">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className='check-label' onClick={toggleClass}>
                        <div className={isOpen?'burger open':'burger'}>
                            <div className="top" id="#top"></div>
                            <div className="bottom" id="#bottom"></div>
                        </div>
                    </label>
                </div>
            </nav>
            <div className='nav-mobile'>
                    <Nav isOpen={isOpen}>
                        <ul>
                            <Link to="/about">Sobre mim</Link>
                            <Link to="/service">Serviços</Link>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                            <NavLink to="/contact" className="contact-mobile">Contact</NavLink>
                            {/*<NavLink to="/blog">Blog</NavLink>*/}
                        </ul>
                    </Nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar