import React,{Component} from 'react';
import Navibar from '../Coponent/Navibar';


class HostSignin extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:""
        }
    }
    handleSubmit2= (event) =>{
        let url="http://127.0.0.1:8080/v2/supplier/login";
        const data=this.state;
        fetch(url,{
            method: 'post',
            headers:{
                'content-type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp)=>{
                console.warn("resp",resp)
                if(resp==="Correct"){
                    console.warn("resp",resp)
                    this.props.handlehostlogstatus1(data)
                    this.props.history.push('./myaccount')
                }
                else if(resp==="Incorrect password/username"){
                    alert("incorrect password or email,please check")
                }
                
            })
        })
    }  
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    }     
    
    render(){
        const {email} =this.state
        const {password} =this.state
        return (
            <div className="back">
                <Navibar loggedinstatus={this.props.loggedinstatus}/>
                <div className="login">
                    <h1>Host Log in</h1>
                    <div className="textbox">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <input type="text" name="email" placeholder="email" value={email}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="textbox">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" name="password" placeholder="password" value={password}
                        onChange={this.handleInputChange}/>
                    </div>
                    <button className="btn" onClick={()=> {this.handleSubmit2()}}>
                        Log in
                    </button>
                </div>
            
                
            </div>
        );
    }
}

export default HostSignin;