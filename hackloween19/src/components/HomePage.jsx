import React from 'react';
import gifOeil from './images/gifOeil.gif'
import './HomePage.css';
import { Link } from 'react-router-dom';
import Footer from './Footer'

function HomePage() {
  return(
  <div className="homepage">
    <img src={gifOeil} alt="black and white eye"/>
    <h1>Welcome to hell</h1>
    <p>You're looking for a movie for your Halloween party?</p>
    <p>You've come to the right place.</p>
    <h1><Link to="/pick">Come on in</Link></h1> 
    <Footer />
  </div>
  )
}

export default HomePage;