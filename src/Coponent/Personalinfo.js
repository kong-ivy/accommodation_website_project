import React, { Component } from 'react'

export default class GuestInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            uid:"s2234",
            last_name: "",
            first_name: "",
            email:"",
            mobile_phone:"",
        }
    }
    
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    } 

    render(){
        const {last_name} =this.state
        const {first_name} =this.state
        const {email} =this.state
        const {mobile_phone} =this.state
    
        return (
            <div >
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
        )
    }
}
