import React from 'react';
import './BoxPage.css';
import { Link } from 'react-router-dom';

class BoxPage extends React.Component {
    constructor() {
        super();
    };

   
    render() {
        return (
            <div className= "buttonsToClick">
                <div className="buttonRang1">
                    <button className="button" type="button" /*onClick={handleClick1}*/>
                    <link to="/movie"></link>
                    </button>
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                </div>
                <div className="buttonRang2">
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                </div>
                <div className="buttonRang3">
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                </div>
                <div className="buttonRang4">
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                </div>
                <div className="buttonRang5">
                    <button className="button" type="button" >
                    <link to="/movie"></link>
                    </button>
                </div>
            </div>
        );
    }
}


export default BoxPage;