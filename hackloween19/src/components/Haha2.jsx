import React from 'react';
import gifMeuf from './images/meuf.gif'
import './Troll.css';
import { NavLink } from 'react-router-dom';

function Haha2() {
  return (
    <div className="troll-page">
      <img className="gif" src={gifMeuf} alt="zombie coming out of the earth" />
      <h1>Oops</h1>
      <p>It appears you were send to a wrong place.</p>
      <h1><NavLink to="/pick" className="linkCss">Try again</NavLink></h1>
    </div>
  )
}

export default Haha2;