import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'

function MainBox4() {
  return(
  <div className="homepage">
    <img className="gif" src={} alt=""/>
    <h1>Heeeeeere's Johnny!</h1>
    <p>....</p>
    <h1><NavLink to="/itsalive" className="linkCss">Try again</NavLink></h1>
    <Footer />
  </div>
  )
}

export default MainBox4;