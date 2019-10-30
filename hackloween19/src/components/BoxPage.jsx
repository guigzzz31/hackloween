import React from 'react';
import './BoxPage.css';
import { Link } from 'react-router-dom';

class BoxPage extends React.Component {
    constructor() {
        super()
    };


    render() {
        return (
            <div className= "buttonsToClick">
                <div className="buttonRang1">
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                </div>
                <div className="buttonRang2">
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                </div>
                <div className="buttonRang3">
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                </div>
                <div className="buttonRang4">
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                </div>
                <div className="buttonRang5">
                  <Link to="/movie"><button className="button" type="button" > </button></Link>
                </div>
            </div>
        );
    }
}


export default BoxPage;