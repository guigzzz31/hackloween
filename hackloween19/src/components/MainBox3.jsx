import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import gifAngel from './images/gifAngel.gif';

function MainBox3() {
  return(
  <div className="troll-page">
    <img className="gif" src={gifAngel} alt=""/>
    <h1>Do you like scary movies?</h1>
    <p>You really like me, do you?</p>
    <h1><NavLink to="/heresjohnny" className="linkCss">Love me</NavLink></h1>
  </div>
  )
}

export default MainBox3;