import React, {Component} from 'react';
import Navibar from '../Coponent/Navibar';
import md5 from "md5";



export default class HostSignup extends Component {
    constructor(props){
        super(props)
        this.state = {
            sid:"s1",
            last_name: "",
            first_name: "",
            email:"",
            mobile_phone:"",
            password:"",
            birthday:"",
            userStatus:0
        }
    }
    handleSubmit1= (event) =>{
        
        let url="http://127.0.0.1:8080/v2/supplier";
        const data=this.state;
        data.sid=this.state.email
        if(data.password===data.confirm_password){
            fetch(url,{
                method: 'post',
                headers:{
                    'content-type':'application/json',
                    'accept':'application/xml'
                },
                body: JSON.stringify(data)
            }).then((result) => {
                result.json().then((resp)=>{
                    console.log(resp)
                    if(resp==="Succeed"){
                        this.props.handlehostlogstatus(data)
                        this.setState({
                            sid:data.email
                        })
                        this.props.history.push('./hostsignin')
                    }
                    else if(resp==="Wrong email"){
                        alert("wrong email format,please check")
                    }
                    else if(resp==="User has existed"){
                        alert("user has existed,please change your email or log in")
                    }
                    else if(resp==="Incorrect information"){
                        alert("incorrect information,please check!")
                    }
                    
                })
            })
        }
        if(data.password!==data.confirm_password){
            alert("please double check your confirm password")
        }  

    }  


    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleInputChange1= e => 
    {
        this.setState({
            password : md5(e.target.value)
        })
    }
    

    render(){
        const {last_name} =this.state
        const {first_name} =this.state
        const {email} =this.state
        const {mobile_phone} =this.state
        const {password} =this.state
        const {birthday} =this.state
        return (
            <div className="back">
                <Navibar loggedinstatus={this.props.loggedinstatus}/>
                <div className="signup">
                    <h2>Host Sign up</h2>
                    
                    <div className="signup_box">
                        Last name:
                        <input type="text" name="last_name" value={last_name}
                        onChange={this.handleInputChange}/>
                        <br />First name:<br />
                        <input type="text" name="first_name" value={first_name}
                        onChange={this.handleInputChange}/>
                        <br />Birthday:<br />
                        <input type="date" name="birthday" value={birthday}
                        onChange={this.handleInputChange}/>
                        <br />Email:<br />
                        <input type="text" name="email" value={email}
                        onChange={this.handleInputChange}/>
                        <br />Mobile phone: <br />
                        <input type="number" name="mobile_phone" value={mobile_phone}
                        onChange={this.handleInputChange}/>
                        <br />Password:<br />
                        <input type="password" name="password" value={password}
                        onChange={this.handleInputChange}/>
                        <br />Confirm Password:<br />
                        <input type="password" name="confirm_password" 
                        onChange={this.handleInputChange}/>
                        <br />
                        <button className="submit" onClick={()=>this.handleSubmit1()}>
                            Submit
                        </button>
                    </div>             
                    
                <div className="alr">
                    already an account?   
                    <a href="http://localhost:3000/hostsignin">Log in</a>
                </div>
                </div>
            </div>
        );
    }
}
