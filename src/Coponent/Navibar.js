import React, { Component } from 'react';
import logo from '../images/o2.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SimpleMenu from '../Coponent/userDropDown';
import Hostdropdown from '../Coponent/Hostdropdown';
import MenuItem from '@material-ui/core/MenuItem';

export default class Navibar extends Component {
    constructor(props){
        super(props)
    this.state={
        isOpen:false 
    }
    this.handle_out1=this.handle_out1.bind(this);
    
    }

    handleToggle=() =>{
        this.setState({isOpen:!this.state.isOpen});
    };
    handle_out1(){
        this.props.handle_out()
    }
    
    
    render() {
        
        if(this.props.loggedinstatus==="not_logged_in"){
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
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/room">Accommodations</Link>
                            </li>
                            <li>
                                <Link to="/hostsignup">Host Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signup">User Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signin">User Log In</Link>
                            </li>
                        </ul>
                    </div>  
                </nav>
            );
        }
        if(this.props.loggedinstatus==="logged_in")
        {
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
                            <Link to="/hostsignup">As a host</Link>
                        </li>
                        <li className="menu">
                            <Link to="/useraccount">My account</Link>
                        </li>
                        <li className="menu" onClick={this.handle_out1} loggedinstatus={this.props.loggedinstatus}>
                            <Link to="/">Log out</Link>
                        </li>
                    </ul>
                </div> 
            </nav>
            )
        }
        if(this.props.loggedinstatus==="hostlogged_in"){
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
                            <Link to="/myaccount">My account</Link>
                            </li>
                            <li className="menu" onClick={this.handle_out1} loggedinstatus={this.props.loggedinstatus}>
                            <Link to="/">Log out</Link>
                        </li>
                        </ul>
                    </div> 
                </nav>
            );
        }
    }
}
