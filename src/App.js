import React,{Component} from 'react';
import './App.css';
import Home from './Pages/Home';
import Room from './Pages/Room';
import Host from './Pages/Host';
import Error from './Pages/Error';
import Signin from './Pages/Sinin';
import Signup from './Pages/Signup';
import Roominfo from './Pages/Roominfo';
import Profile from './Pages/profile';
import Orders from './Pages/orders';
import HostSignup from './Pages/hostsignup';
import HostSignin from './Pages/hostsignin';
import Property from './Pages/property';
import Hostprofile from './Pages/Hostprofile';
import {Route, Switch, withRouter} from 'react-router-dom';
import Booking from './Pages/Booking';
import loading from './Coponent/loading';
import Myaccount from './Pages/Afterlogin';
import Userafterlogin from './Pages/Userafterlogin';


import '../node_modules/noty/lib/noty.css';
import '../node_modules/noty/lib/themes/bootstrap-v4.css'

class App extends Component {
  constructor(){
    super();
    this.state={
      loggedinstatus:"not_logged_in",
      user:{},
      s:[],
      r:[],
      price:0,
      sid:{},
      uid:{},
      info:{},
      proper:[],
      userinfo:{},
      order:[]
    }
    this.handlelogstatus=this.handlelogstatus.bind(this);
    this.handlelogstatus1=this.handlelogstatus1.bind(this);
    this.handlehostlogstatus=this.handlehostlogstatus.bind(this);
    this.handlehostlogstatus1=this.handlehostlogstatus1.bind(this);
    this.handles=this.handles.bind(this);
    this.handles_room=this.handles_room.bind(this);
    this.handlelprice=this.handlelprice.bind(this);
    this.handlelogout=this.handlelogout.bind(this);
    this.handleuser=this.handleuser.bind(this);
    this.handleproperty=this.handleproperty.bind(this);
    this.handleuserprofile=this.handleuserprofile.bind(this);
    this.handleorder=this.handleorder.bind(this);

  }
  
  handlelogstatus(data){
    this.setState({
      loggedinstatus:"logged_in",
      user:data
    })
    console.log(this.state.user)
    
  }
  handleuser(data){
    this.setState({
      info:data
    })
  }
  handleuserprofile(data){
    this.setState({
      userinfo:data
    })
  }

  handlelogstatus1(data){
    this.setState({
      loggedinstatus:"logged_in",
      uid:data
    })
    console.log(this.state.uid)
  }

  handles_room(data){
    console.log(data)
    this.setState({
      r:data
    })
    console.log("room data: ",this.state.r)
  }

  handlelprice(data){
    this.setState({
      price:data
    })
    console.log(this.state.price)
  }

  handlehostlogstatus(data){
    this.setState({
      user:data
    })
    console.log(this.state.user)
  }
  handlehostlogstatus1(data){
    this.setState({
      loggedinstatus:"hostlogged_in",
      sid:data
    })
  }
  handles(data){
    this.setState({
      s:data
    });
  }
  

  handlelogout(){
    this.setState({
      loggedinstatus:"not_logged_in"
    })
    
  }
  handleproperty(data){
    this.setState({
      proper:data
    })
  }
  handleorder(data){
    this.setState({
      order:data
    })
    console.log(this.state.order)
  }
  
  
  render() {
    return (<>
      <Switch>
          <Route exact path="/" render={props => (<Home {...props} handles={this.handles} loggedinstatus={this.state.loggedinstatus} handlelogout={this.handlelogout}/> 
          )}/>
          <Route exact path="/room" render={props => (<Room {...props} s={this.state.s} downloadFile={this.downloadFile} loggedinstatus={this.state.loggedinstatus} handlelogout={this.handlelogout}/>
          )}/>
          <Route exact path="/room/:slug" render={props => (<Roominfo {...props} loggedinstatus={this.state.loggedinstatus} handles_room={this.handles_room} handlelogout={this.handlelogout}/>
          )}/>
          <Route exact path="/host" render={props => (<Host {...props} loggedinstatus={this.state.loggedinstatus} user={this.state.user} sid={this.state.sid} handlelogout={this.handlelogout}/> )}/>
          <Route exact path="/signin" render={props => (<Signin {...props} user={this.state.user} loggedinstatus={this.state.loggedinstatus}
          handlelogstatus1={this.handlelogstatus1} handlelogout={this.handlelogout} /> 
          )}/>
          <Route exact path="/signup" 
          render={props => (
            <Signup {...props} loggedinstatus={this.state.loggedinstatus} handlelogstatus={this.handlelogstatus} 
            />
          )}/>
          
          <Route exact path="/profile" render={props => (<Profile {...props} userinfo={this.state.userinfo} loggedinstatus={this.state.loggedinstatus} handlelogout={this.handlelogout}/> 
          )}/> 
          <Route exact path="/hostprofile" render={props => (<Hostprofile {...props} user={this.state.user} handlelogout={this.handlelogout} info={this.state.info} sid={this.state.sid} loggedinstatus={this.state.loggedinstatus}/> 
          )}/> 
          <Route exact path="/orders" render={props => (<Orders {...props} loggedinstatus={this.state.loggedinstatus} order={this.state.order} r={this.state.r} price={this.state.price} s={this.state.s} uid={this.state.uid} handlelogout={this.handlelogout} info={this.state.info}/>)}/>
          <Route exact path="/hostsignup" render={props => (<HostSignup {...props} loggedinstatus={this.state.loggedinstatus} handlehostlogstatus={this.handlehostlogstatus}/> 
          )}/>
          <Route exact path="/hostsignin" render={props => (<HostSignin {...props} loggedinstatus={this.state.loggedinstatus} handlehostlogstatus1={this.handlehostlogstatus1}/> 
          )}/>
          <Route exact path="/booking" render={props => (<Booking {...props} loggedinstatus={this.state.loggedinstatus} r={this.state.r} s={this.state.s} user={this.state.user} uid={this.state.uid} handlelprice={this.handlelprice} handlelogout={this.handlelogout}/>
          )}/>
          <Route exact path="/property" render={props => (<Property {...props} loggedinstatus={this.state.loggedinstatus} user={this.state.user} sid={this.state.sid} handlelogout={this.handlelogout} proper={this.state.proper} />)}/>
          <Route exact path="/loading" component={loading}/> 
          <Route exact path="/myaccount" render={props => (<Myaccount {...props} loggedinstatus={this.state.loggedinstatus} sid={this.state.sid} handleuser={this.handleuser} handleproperty={this.handleproperty} handlelogout={this.handlelogout}/>)}/>
          <Route exact path="/useraccount" render={props => (<Userafterlogin {...props} loggedinstatus={this.state.loggedinstatus} uid={this.state.uid} handleuserprofile={this.handleuserprofile} handleorder={this.handleorder} handlelogout={this.handlelogout}/>)}/>
          <Route render={props => (<Error {...props} loggedinstatus={this.state.loggedinstatus}/>)}/>
          
      </Switch>

      </>
    );
  }
}

export default withRouter(App);