import React, { Component } from 'react';
import RoomsContainer from '../Coponent/RoomContainer';
import Navibar from '../Coponent/Navibar';
import Banner from '../Coponent/Banner';
import {Link} from 'react-router-dom';
import Hero from '../Coponent/Hero';

export default class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            se:[]
        }
        this.handle_out=this.handle_out.bind(this);
        
    }
    handle_out(){
        this.props.handlelogout()
    }

    render() {   
        return (
            <div className="room4">
                <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>
                
                <Hero hero="roomsHero">
                    <Banner title="Welcome">
                        <Link to="/" className="btn-primary">
                            return home
                        </Link>
                    </Banner>
                </Hero>;
                
                <RoomsContainer se={this.state.se}/> 
            </div>    
        );
    }
}
