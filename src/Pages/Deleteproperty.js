import React, { Component } from 'react'

export default class Deleteproperty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rid:[]
        }
        this.handle_cancel=this.handle_cancel.bind(this);
        

    }
    handle_cancel(rid){
        console.log(rid)
        let url="http://127.0.0.1:8081/v2/room/cancel";
        fetch(url,{
            method: 'post',
            headers:{
                'content-type':'application/json',
                'accept':'application/xml'
            },
            body: JSON.stringify(rid)
        }).then((result) => {
            result.json().then((resp)=>{
                console.log(resp)
                if(resp==="Your room has been removed"){
                    alert("Your room has been removed")
                    this.props.history.push('./property')  
                }
            })
        })
    }
    render() {
        return (
            <div>
                <button className="cancel_button" onClick={()=>this.handle_cancel()}>
                    Delete property
                </button>
            </div>
        );
    }
}
