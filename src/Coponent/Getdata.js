import React, { Component } from 'react'

export default class Getdata extends Component {
    constructor(props){
        super(props);
        this.state ={
            items:[],
            isloaded: false
        }
    }

    componentDidMount(){
        fetch("http://127.0.0.1:8080/v2/user")
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    isloaded:true,
                    items: json,
                })
            });
    }


    render() {
        var { isloaded, items } =this.state;
        if(!isloaded){
            return <div>loading...</div>;
        }
        else{
            return (
                <div>
                    <ul>
                        {items.map(item => (
                            <li key={item.uid}>
                                last_name: {item.name} |email:{item.email}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
