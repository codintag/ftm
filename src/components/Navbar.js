import React, {Component} from 'react';
import FtmLogo from '../images/logo.gif';
import {
    Link
} from "react-router-dom";

class Navbar extends Component {
    // en gros ma navbar en functional compo c'est mieux.
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <Link className="navbar-brand" to="/"><img className="imgLogo" src={FtmLogo} alt="logo"></img></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/teams">teams</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/codintag/ftm">See GitHub repository</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

//export my component
export default Navbar;