import React from 'react';
import './Troll.css';
import { NavLink } from 'react-router-dom';
import gifMummy from './images/gifMummy.gif';

function MainBox5() {
  return(
  <div className="troll-page">
    <img className="gif" src={gifMummy} alt=""/>
    <h1>It's aliiiiive!</h1>
    <p>STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME </p>
    <h1><NavLink to="/pick" className="linkCss">STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME STAY WITH ME </NavLink></h1>
  </div>
  )
}

export default MainBox5;