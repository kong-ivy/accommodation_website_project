import React, { Component } from 'react';
import logo from '../images/o2.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hostdropdown from '../Coponent/Hostdropdown';

export default class Hostnav extends Component {
    state={
        isOpen:false 
    };
    handleToggle=() =>{
        this.setState({isOpen:!this.state.isOpen});
    };
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="KDY" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul 
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
                    >
                        <li className="menu">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu">
                            <Link to="/room">Accommodations</Link>
                        </li>
                        
                        <li className="menu">
                        <Hostdropdown />
                        </li>
                    </ul>
                </div> 
            </nav>
        );
    }
}
