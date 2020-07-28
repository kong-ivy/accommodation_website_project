import React, { Component } from 'react';
import Navibar from "../Coponent/Navibar";
import Noty from 'noty';


export default class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reply:[]  
        }
        this.handle_out=this.handle_out.bind(this);
    }
    
    handle_out(){
        this.props.handlelogout()
    }
    show(rid){
        let n=new Noty({
            text:"Are you sure to cancel this order?",
            type:"success",
            theme:"bootstrap-v4",   
            layout: "center",
            buttons:[
                Noty.button("yes","btn btn-success",() =>{
                    console.log("button has clicked")
                    this.cancelorder(rid)
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

    cancelorder(rid){
        let url="http://127.0.0.1:8081/v2/booking/cancelorder";
        const data={"rid":rid,
                    "uid":this.props.uid.email}
        console.log(data)
        
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
                if(resp==="Your order has been removed"){
                    alert("Your order has been removed")
                    this.props.history.push("/useraccount");
                } 
                
            })
        })
    }
    
    
    render() {
        const rep=this.props.order
        console.log(rep)
        return (
            <div className="order">
                <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>
                <div className="order_container">
                    <h2>Your orders</h2>
                    <div >
                        {rep.map((detail,index) => {
                            const checkin=detail.date_start
                            const checkout=detail.date_end
                            const dif=checkout-checkin
                            
                            var total_price=detail.price/dif
                            console.log(dif)
                            console.log(total_price)
                            return <div className="s_div">
                                <div>
                                    <h2>Order: </h2>
                                    <p className="di">{index+1}</p>
                                </div>
                                <br />
                                <div>
                                    <h3>Room name: </h3>
                                    <p className="di">{detail.room_name}</p>
                                </div>
                                <div>
                                    <h3>Room type: </h3>
                                    <p className="di">{detail.room_type}</p>
                                </div>
                                
                                <div>
                                    <h3>City: </h3>
                                    <p className="di">{detail.city}</p>
                                </div>
                                <div>
                                    <h3>Suburb: </h3>
                                    <p className="di">{detail.surburb}</p>
                                </div>
                                <div>
                                    <h3>Room address: </h3>
                                    <p className="di">{detail.address}</p>
                                </div>
                                <div>
                                    <h3>Check in date: </h3>
                                    <p className="di">{detail.date_start}</p>
                                </div>
                                <div>
                                    <h3>Check out date: </h3>
                                    <p className="di">{detail.date_end}</p>
                                </div>
                                <div>
                                    <h3>price per night: </h3>
                                    <p className="di">{total_price}</p>
                                </div>
                                <div>
                                    <h3>Total price: </h3>
                                    <p className="di">{detail.price}</p>
                                </div>
                                <button className="order_cancel" onClick={()=>this.show(detail.rid)}>Cancel</button>
                                
                            </div>   
                        })}

                    </div>
                </div>
            </div>
        );
    }
}
