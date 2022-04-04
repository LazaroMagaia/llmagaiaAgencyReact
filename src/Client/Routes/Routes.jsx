import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ScrollToTop from "../components/ScrollTop/ScrolltopRuter";
import Contact from '../pages/contact/Home';
import BlogHome from '../pages/Blog/Home';
import Portfolio from '../pages/Portfolio/Home'
const Routers = () => {
  return (
    <div>
        <Router>
        <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/blog' element={<BlogHome/>}></Route>
                <Route path='/portfolio' element={<Portfolio/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routers