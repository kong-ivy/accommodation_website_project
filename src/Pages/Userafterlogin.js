import React, { Component } from 'react';
import Navibar from "../Coponent/Navibar";
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { AiFillShop } from "react-icons/ai";
import Axios from 'axios';

export default class Userafterlogin extends Component {
    async getData(){
        console.log(this.props.loggedinstatus)
        var url="http://127.0.0.1:8080/v2/user/info?uid="
        url+=this.props.uid.email
        Axios.get(url)
            .then(res=>{
                console.log("res:",res.data);
                this.props.handleuserprofile(res.data)
            });   
    }
    handle_out(){
        this.props.handlelogout()
    }
    getorderData(){
        var url="http://127.0.0.1:8081/v2/booking/user?uid="
        console.log(this.props.uid.email)
        url+=this.props.uid.email
        Axios.get(url)
            .then(res=>{
                console.log("res:",res.data);
                this.props.handleorder(res.data)
            });   
    }
    render() {
        return (
            <div className="room">
                <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>
                <div className="leftnav1">
                    <FiUser />
                    <div>
                        <Link to={"./profile"} onClick={()=> {this.getData()}} loggedinstatus={this.props.loggedinstatus}><b>Your Profile</b></Link>
                    </div> 
                    <h4>Check your personal details and upload your head image</h4>
                </div>
                <div className="leftnav1">
                    <AiFillShop />
                    <div>
                        <Link to={"./orders"} onClick={()=> {this.getorderData()}} loggedinstatus={this.props.loggedinstatus}><b>Your Orders</b></Link>
                    </div> 
                    <h4>Check your order details or you can cancel it</h4>
                </div>
                
            </div>
        )
    }
}
