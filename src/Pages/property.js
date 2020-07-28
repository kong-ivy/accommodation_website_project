import React, { Component } from 'react'
import Navibar from "../Coponent/Navibar";
import Noty from 'noty';


export default class Property extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response:[],
            rid:[]
        }
        this.handle_out=this.handle_out.bind(this);
        this.handle_cancel=this.handle_cancel.bind(this);
    }

    show(rid){
        let n=new Noty({
            text:"Are you sure to delete this property?",
            type:"success",
            theme:"bootstrap-v4",   
            layout: "center",
            buttons:[
                Noty.button("yes","btn btn-success",() =>{
                    console.log("button has clicked")
                    this.handle_cancel(rid)
                    n.close()
                },{id:"button1","data-status":"ok"}
                ),

                Noty.button("no","btn btn-error",()=>{
                    console.log("no")
                    n.close()
                })
            ]

        })
        n.show(rid);
    }
    
    
    handle_cancel(r){
        console.log(r)
        const data={"rid":r}
        console.log(data)
        let url="http://127.0.0.1:8081/v2/room/cancel";
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
                if(resp==="Your room has been removed"){
                    alert("Your room has been removed")
                    this.props.history.push('./myaccount');
                }
            })
        })
    }
    handle_out(){
        this.props.handlelogout()
    }


    render() {
        const da=this.props.proper
        console.log(da)
        return (
            <div className = "property">
                <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>  
                <div className="property-container">
                    <div >
                        {da.map((detail,index) => {
                            return <div className="s_div">
                                <div>
                                    <h2>Room </h2>
                                    <p className="di">{index+1}</p>
                                </div>
                                <br />
                                <div>
                                    <h3>Room name: </h3>
                                    <p className="di">{detail.name}</p>
                                </div>
                                <div>
                                    <h3>Room price: </h3>
                                    <p className="di">{detail.price+" per night"}</p>
                                </div>
                                <div>
                                    <h3>Room capacity: </h3>
                                    <p className="di">{detail.capacity}</p>
                                </div>
                                <div>
                                    <h3>Booking status: </h3>
                                    <p className="di">0</p>
                                </div>
                                <br />
                                <button className="cancel_button" onClick={()=>this.show(detail.rid)}>
                                    Delete
                                </button>
                            </div>
                        })}
                    </div>

                    
                </div>
            </div>      
        )
    }
}