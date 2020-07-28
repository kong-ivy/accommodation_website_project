import React, { Component } from 'react';
import Navibar from '../Coponent/Navibar';
import Banner from '../Coponent/Banner';
import {Link} from 'react-router-dom';
import Hero from '../Coponent/Hero';

export default class Error extends Component {
    constructor(props){
        super(props);
        this.state={
            s:{}
        }
    }
    render() {
        return (
            <div className="room">
                <Navibar loggedinstatus={this.props.loggedinstatus}/>
                <Hero hero="roomsHero">
                        <Banner title="Error">
                            <Link to="/" className="btn-primary">
                                return home
                            </Link>
                        </Banner>
                    </Hero>;
            </div>
            );
    }
}
