import React, {useState} from "react"
import LogoImg from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import {Nav} from './NavbarElement';
import './navbar.css';
import { Link } from 'react-scroll'
const NavBlog = () => {
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
                            <NavLink className='nav-a-link' to="/blog">Pagina inicial</NavLink>
                            <NavLink className='nav-a-link' to="category">Categorias</NavLink>
                        </ul>
                    </div>
                    <div className='contact-blog'>
                        <a href="https://www.youtube.com/channel/UCFvQa1BTgJaqGvFIcwe6VAg" target="_blank">
                            <i className="fa-brands fa-youtube"></i></a>
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
                            <NavLink className='nav-a-link' to="/blog">Pagina inicial</NavLink>
                            <NavLink to="category" onClick={toggleClass}>Categorias</NavLink>
                        </ul>
                    </Nav>
                </div>
            </div>
        </div>
    )
}
export default NavBlog