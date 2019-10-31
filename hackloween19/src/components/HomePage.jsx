import React from 'react';
import gifOeil from './images/gifOeil.gif'
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'

function HomePage() {
  return(
  <div className="homepage">
    <img src={gifOeil} alt="black and white eye"/>
    <h1>Welcome to hell</h1>
    <p>You're looking for a movie for your Halloween party?</p>
    <p>You've come to the right place.</p>
    <h1><NavLink to="/pick" className="linkCss">Come on in</NavLink></h1>
    <Footer />
  </div>
  )
}

export default HomePage;