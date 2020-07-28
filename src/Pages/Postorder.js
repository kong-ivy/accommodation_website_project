import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Postorder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rid:this.props.r.rid,
            uid:this.props.uid.email
        }
        
        this.cancelorder=this.cancelorder.bind(this);
    }
    cancelorder(){
        let url="http://127.0.0.1:8081/v2/booking/cancelorder";
        const data=this.state
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
                    this.props.history.push("/orders");
                } 
                
            })
        })
    }
    render() {
        return (
            <div>
                <button className="order_cancel" onClick={()=>this.cancelorder()}>Cancel</button>
            </div>
        )
    }
}
export default withRouter(Postorder)