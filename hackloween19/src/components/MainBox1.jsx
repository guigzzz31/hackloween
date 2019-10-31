import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'

function MainBox1() {
  return(
  <div className="homepage">
    <img className="gif" alt=""/>
    <h1>Booh!</h1>
    <p>....</p>
    <h1><NavLink to="/stillhere" className="linkCss">Try again</NavLink></h1>
    <Footer />
  </div>
  )
}

export default MainBox1;