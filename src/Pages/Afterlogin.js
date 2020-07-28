import React, { Component } from 'react';
import Navibar from "../Coponent/Navibar";
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import Axios from 'axios';

export default class Myaccount extends Component {
    constructor(){
        super();
        this.state = {
            info:[],
            response:[]
        }
        this.getData=this.getData.bind(this);
        this.getpropertyData=this.getpropertyData.bind(this);
        this.handle_out=this.handle_out.bind(this);
    }
    async getData(){
        console.log(this.props.loggedinstatus)
        var url="http://127.0.0.1:8080/v2/supplier/info?sid="
        url+=this.props.sid.email
        Axios.get(url)
            .then(res=>{
                console.log("res:",res.data);
                this.props.handleuser(res.data)
            });   
    }
    getpropertyData(){
        console.log(this.props.sid.email)
        var url="http://127.0.0.1:8081/v2/room/supplier?sid="
        url+=this.props.sid.email
        Axios.get(url)
            .then(res=>{
                console.log("res:",res.data);
                this.props.handleproperty(res.data)
            });   
    }
    handle_out(){
        this.props.handlelogout()
    }
    render() {
        
        return (
            <div className="room">
                <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>
                <div className="leftnav">
                    <FiUser/>
                    <div>
                        <Link to={"./hostprofile"} onClick={()=> {this.getData()}} info={this.state.info} loggedinstatus={this.props.loggedinstatus}><b>Your Profile</b></Link>
                    </div> 
                    <h4>Check your personal details and upload your head image</h4>
                </div>
                <div className="leftnav">
                    <FiHome />
                    <div>
                        <Link to={"./host"}><b>Upload properties</b></Link>
                    </div>
                    <h4>Uplpoad your properties to our website</h4>
                </div>
                <div className="leftnav">
                    <FiEdit />
                    <div>
                        <Link to={"./property"} onClick={()=> {this.getpropertyData()}}><b>Manage properties</b></Link>
                    </div>
                    <h4>check your property details or you can delete it</h4>
                </div>
                

            </div>
        );
    }
}
