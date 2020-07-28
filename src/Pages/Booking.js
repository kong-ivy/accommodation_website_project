import React, { Component } from 'react'
//import FullWidthGrid from '../Coponent/layout'
import Navibar from '../Coponent/Navibar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Paypal from '../Coponent/Paypal';



export default class Booking extends Component {
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state={
            rid:this.props.r.rid,
            uid:this.props.uid.email,
            price:0,
            date_start:this.props.s.check_in_date,
            date_end:this.props.s.check_out_date,
            last_name: "",
            first_name: "",
            email:"",
            mobile_phone:"",
            payment_statue:false
        }
        
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handle_out=this.handle_out.bind(this);
        this.handle_payment=this.handle_payment.bind(this);
    }
    
    handle_out(){
        this.props.handlelogout()
    }
    handle_payment(){
        this.setState({
            payment_statue:true
        })
        this.props.history.push("./useraccount")
    }

    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    

    render(){
        const {last_name,first_name,email,mobile_phone} =this.state
        const checkin=this.props.s.check_in_date
        const checkout=this.props.s.check_out_date
        var moment = require('moment');
        const year1=moment(checkin).get('year')
        const year2=moment(checkout).get('year')
        const month1=moment(checkin).get('month')
        const month2=moment(checkout).get('month')
        const day1=moment(checkin).get('date')
        const day2=moment(checkout).get('date')
        var dif_month=0
        var dif=0
        if(year1===year2 && month1===month2){
            dif=day2-day1
            
        }
        if(month1 !==month2){
            dif_month=month2-month1
            dif=day2-day1+30*dif_month
        }
        var total_price=dif*this.props.r.price

        return (
            <div className="back-ground">
            <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>   
            <div className="main">
                <h2>Your Booking details</h2>
                <Grid container spacing={1} className="booking-grid">
                    <Grid item xs={12} sm={12}>
                    <Paper className="paper">
                    <h5>STEP 1: Check Your Room information</h5>
                    <div className="propertycheck">
                        <div>
                            <p>Room Name: </p>
                            <h5>{this.props.r.name}</h5> 
                            <p>Room type:</p>
                            <h5>{this.props.r.type}</h5> 
                            <p>Room capacity:</p>
                            <h5>{this.props.r.capacity}</h5>
                            <p>Check in date:</p>
                            <h5>{this.props.s.check_in_date}</h5>
                            <p>check out date:</p>
                            <h5>{this.props.s.check_out_date}</h5>
                        </div>
                    </div>
                    </Paper>
                </Grid>
                    <Grid item xs={12} sm={12}>
                    <Paper className="paper">
                        <div className="Personal-information">
                            <h5>STEP 2: Please Input Check-in details</h5>
                            <div className="guest-box">
                                <p>Last name:
                                <input type="text" name="last_name" value={last_name}
                                onChange={this.handleInputChange}/></p>
                                <p>First name:
                                <input type="text" name="first_name" value={first_name}
                                onChange={this.handleInputChange}/></p>
                                <p>Email:
                                <input type="text" name="email" value={email}
                                onChange={this.handleInputChange}/></p>
                                <p>Mobile phone:
                                <input type="text" name="mobile_phone" value={mobile_phone}
                                onChange={this.handleInputChange}/></p>
                            </div>    
                        </div>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <Paper className="paper"> 
                    <div className="Payment-detail">
                        <h5>STEP 3: Check Payment details</h5>
                        <div className="Payment">
                            <p> Price per Night (AU$) : </p> 
                            <h4>{this.props.r.price}</h4>
                            <p> Nights: </p>
                            <h4>{dif}</h4>
                            <h3>Total (AU$) : {total_price}</h3> 
                        </div>
                    </div></Paper>
                    </Grid>
                </Grid>
                </div>
                <div className="paypal">
                    <Paypal total_price={total_price} data={this.state} handle_payment={this.handle_payment}/>               
                </div>
            </div>
            
                );
                
            }
        }
