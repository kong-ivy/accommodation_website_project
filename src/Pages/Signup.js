import React, {Component} from 'react';
import Navibar from '../Coponent/Navibar';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            uid:"u01",
            last_name: "",
            first_name: "",
            email:"",
            mobile_phone:"",
            password:"",
            confirm_password:"",
            birthday:"",
            userStatus:0,
            list:[]
        }
        
    }
    handleSubmit1= (event) =>{
        
        let url="http://127.0.0.1:8080/v2/user";
        const data=this.state;
        data.uid=this.state.email
        
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
                    console.log("resp",resp)
                    if(resp==="Succeed"){
                        
                        this.setState({
                            list:data
                        })
                        this.setState({
                            uid:data.email
                        })
                        this.props.handlelogstatus(data)
                        this.props.history.push('./signin')  
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
            })}
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

    render(){
        
        const {last_name,first_name,email,mobile_phone,password,birthday} =this.state
        
        return (
            <div className="back">
                <Navibar loggedinstatus={this.props.loggedinstatus} />
                <div className="signup">
                    <h2>Sign up</h2>
                    
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
                    <a href="http://localhost:3000/signin">Log in</a>
                </div>
                </div>
                
            </div>
        );
    }
}
