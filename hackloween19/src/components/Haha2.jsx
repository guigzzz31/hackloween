import React from 'react';
import gifZombie from './images/gifZombie.gif'
import './HomePage.css';
import { Link } from 'react-router-dom';
import Footer from './Footer'

function HomePage() {
  return(
  <div className="homepage">
    <img src={gifZombie} alt="zombie coming out of the earth"/>
    <h1>Still here?</h1>
    <p>Are you lost or something ?</p>
    <h1><Link to="/areyoulost">I'm telling you to click here</Link></h1>
    <Footer />
  </div>
  )
}

export default HomePage;