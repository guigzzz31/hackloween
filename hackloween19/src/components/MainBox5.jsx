import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'

function MainBox5() {
  return(
  <div className="homepage">
    <img className="gif" src={} alt=""/>
    <h1>It's aliiiiive!</h1>
    <p>....</p>
    <h1><NavLink to="/pick" className="linkCss">Try again</NavLink></h1>
    <Footer />
  </div>
  )
}

export default MainBox5;