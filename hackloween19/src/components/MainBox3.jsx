import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'

function MainBox3() {
  return(
  <div className="homepage">
    <img className="gif" alt=""/>
    <h1>Do you like scary movies?</h1>
    <p>....</p>
    <h1><NavLink to="/heresjohnny" className="linkCss">Try again</NavLink></h1>
    <Footer />
  </div>
  )
}

export default MainBox3;