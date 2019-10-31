import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import gifDolls from './images/gifDolls.gif';

function MainBox1() {
  return(
  <div className="troll-page">
    <img className="gif" src={gifDolls} alt=""/>
    <h1>Booh!</h1>
    <p>You made it all the way here, congrats.</p>
    <h1><NavLink to="/stillhere" className="linkCss">Try again</NavLink></h1>
  </div>
  )
}

export default MainBox1;