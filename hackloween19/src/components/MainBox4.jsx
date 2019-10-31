import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import gifShining from './images/gifShining.gif';

function MainBox4() {
  return(
  <div className="troll-page">
    <img className="gif" src={gifShining} alt=""/>
    <h1>Heeeeeere's Johnny!</h1>
    <p>We can stay here forever if you'd like.</p>
    <h1><NavLink to="/itsalive" className="linkCss">Don't go this way</NavLink></h1>
  </div>
  )
}

export default MainBox4;