import React from 'react';
import gifMeuf from './images/meuf.gif'
import './Troll.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'

function HomePage() {
  return(
  <div className="homepage">
    <img className="gif" src={gifMeuf} alt="zombie coming out of the earth"/>
    <h1>Still here?</h1>
    <p>Are you lost or something ?</p>
    <h1><NavLink to="/pick" className="linkCss">I'm telling you to click here</NavLink></h1>
    <Footer />
  </div>
  )
}

export default HomePage;