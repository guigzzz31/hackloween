import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import gifHouse from './images/gifHouse.gif';

function MainBox2() {
  return(
  <div className="troll-page">
    <img className="gif" src={gifHouse} alt=""/>
    <h1>You're still here?</h1>
    <p>You need to go back the entrance.</p>
    <h1><NavLink to="/doyoulike" className="linkCss">It's this way</NavLink></h1>
  </div>
  )
}

export default MainBox2;