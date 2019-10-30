import React from 'react';
import gifClown from './images/clown.gif'
import './Troll.css';
import { Link } from 'react-router-dom';
import Footer from './Footer'

function HomePage() {
  return(
  <div className="homepage">
    <img className="gif" src={gifClown} alt="zombie coming out of the earth"/>
    <h1>Oops</h1>
    <p>It appears you were send to a wrong place.</p>
    <h1><Link to="/pick">Try again</Link></h1>
    <Footer />
  </div>
  )
}

export default HomePage;
