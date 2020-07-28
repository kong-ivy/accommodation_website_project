import React, { Component } from 'react';
import defaultBcg from "../images/defaultBcg.jpeg"
import Banner from '../Coponent/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import Zmage from 'react-zmage';
import Navibar from '../Coponent/Navibar';
import Hero from '../Coponent/Hero';


export default class Roominfo extends Component {
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg,
            r:[]
        }
        this.handle_out=this.handle_out.bind(this);
    }
    handle_out(){
        this.props.handlelogout()
    }
    handle_booking(room){
        
        console.log("infor: ",this.props.loggedinstatus)
        if(this.props.loggedinstatus==="not_logged_in"){
            this.props.history.push('../signin')
        }
        if(this.props.loggedinstatus==="logged_in"){
            
            this.props.handles_room(room)
            this.props.history.push('../booking')
        }
    }

    static contextType = RoomContext;

    //componentDidMount(){}
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (
                <div className="error">
                        <h3>No such room could be found</h3>
                        <Link to='/Room' className="btn-primary">
                            Back to Room
                        </Link>
                    </div>
            );
        }

        const {description,capacity,price,breakfast,pets,name,airconditioner,carpark,wifi,gym,kitchen,city,suburb,address} = room;
        
        
        return (  
            <>
            <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>
            <Hero hero="roomsHero">
                <Banner title = {`${name} room`}>
                    <Link to="/room" className="btn-room">
                    back to rooms
                    </Link>
                </Banner>
            </Hero>
            
            <section className="single-room">
                <div className="single-room-images">
                    <Zmage src={require("../images/"+name+"/2.jpg")} alt={name}/>
                    <Zmage src={require("../images/"+name+"/3.jpg")} alt={name}/>
                    <Zmage src={require("../images/"+name+"/4.jpg")} alt={name}/>
                    <Zmage src={require("../images/"+name+"/5.jpg")} alt={name}/>
                
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>description</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h2> info </h2>
                        <h6> price: ${price} per night</h6>
                        <h6> city: {city}</h6>
                        <h6> suburb: {suburb}</h6>
                        <h6> address: {address}</h6>
                        <h6> Max capacity:{" "}
                            {capacity >  1 ? `${capacity} people`:
                            `${capacity} person`}           
                        </h6>
                        <h6>{pets ? "pets allowed":"no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                        <h6>{airconditioner && "free airconditioner included"}</h6>
                        <h6>{carpark && "free carpark included"}</h6>
                        <h6>{wifi && "free wifi included"}</h6>
                        <h6>{gym && "free gym included"}</h6>
                        <h6>{kitchen && "free kitchen included"}</h6>
                        <button className = "btn-booking" onClick={()=> {this.handle_booking(room)}}>
                            Booking
                        </button>
                    </article>
                </div>
            </section> 
            </>      
        );
    }
}
