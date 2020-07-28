import React from 'react'; 
import Navibar from "../Coponent/Navibar";
import Avatar from './../Coponent/uploadAvatar';



class profile extends React.Component{
    constructor(){
        super();
        this.state = {
            l:[]
        }
        this.handle_out=this.handle_out.bind(this);
        this.handle_save=this.handle_save.bind(this);
    }
    handle_out(){
        this.props.handlelogout()
    }
    handle_save(){
        alert("save successfully!")
    }
    
    render() {
        console.log(this.props.user)
        return (
            <div className="room">
                <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/> 
                <h2>Your profile</h2>
                <div className="allPro">            
                    <div className="containerPro">
                        <div className="colPro1">
                            <Avatar />
                        </div>
                        <div className="clear"></div>
                        <div >
                            <ul>
                                <li>
                                    <p>First Name: </p> 
                                    <br></br>
                                    <div className="profile_info">
                                        <h3>{this.props.userinfo.first_name}</h3>
                                    </div>
                                </li> 
                            
                                <li>
                                    <p>Last Name: </p>
                                    <br></br>
                                    <div className="profile_info">
                                        <h3>{this.props.userinfo.last_name}</h3>
                                    </div>
                                </li>                       
                            
                                <li>
                                    <p>Email: </p>
                                    <br></br>
                                    <div className="profile_info">
                                        <h3>{this.props.userinfo.email}</h3>
                                    </div>
                                </li>                          
                                <li>
                                    <p>Mobile Phone: </p>
                                    <br></br>
                                    <div className="profile_info">
                                        <h3>{this.props.userinfo.mobile_phone}</h3>
                                    </div>
                                </li>    
                                <li>
                                    <p>Data of birth: </p>
                                    <br></br>
                                    <div className="profile_info">
                                        <h3>{this.props.userinfo.birthday}</h3>
                                    </div>
                                </li>         
                                <button className="save_button" onClick={()=> {this.handle_save()}}>save</button>              
                            </ul>                      
                                
                        </div>
                    </div>
                </div>
            </div>
            )
    }  
    
}export default profile;
