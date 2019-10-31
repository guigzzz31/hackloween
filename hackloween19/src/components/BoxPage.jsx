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
                <h1>Choose wisely...</h1>
                <div className="buttonRang1">
                  <Link to="/Oops"><button className="button no-top" type="button" >? </button></Link>
                  <Link to="/movie"><button className="button no-top" type="button" >? </button></Link>
                </div>
                <div className="buttonRang2">
                  <Link to="/mybad"><button className="button" type="button" >? </button></Link>
                  <Link to="/movie"><button className="button" type="button" >? </button></Link>
                  <Link to="/areyoulost"><button className="button" type="button" >? </button></Link>
                </div>
                <div className="buttonRang3">
                  <Link to="/movie"><button className="button" type="button" >? </button></Link>
                  <Link to="/movie"><button className="button" type="button" >? </button></Link>
                  <Link to="/booh"><button className="button" type="button" >? </button></Link>
                  <Link to="/movie"><button className="button" type="button" >? </button></Link>
                </div>
                <div className="buttonRang4">
                  <Link to="/yesyouare"><button className="button" type="button" >? </button></Link>
                  <Link to="/movie"><button className="button" type="button" >? </button></Link>
                  <Link to="/behindyou"><button className="button" type="button" >? </button></Link>
                </div>
                <div className="buttonRang5">
                  <Link to="/behindyou"><button className="button" type="button" >? </button></Link>
                </div>
            </div>
        );
    }
}


export default BoxPage;