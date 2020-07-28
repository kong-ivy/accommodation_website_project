import React, { Component } from 'react'
import loadinggif from '../images/loading-arrow.gif';

export default class loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            w:""
        }
        
    }
    sleep( ms ) {
        let start = Date.now();
        while ( Date.now() < start + ms ) {} 
    }
    
    render() {
        return (
            <div className="loading">
                <h4>rooms data loading...</h4>
                <img src={loadinggif} alt=""></img>
                
            </div>
            
            
        )
    }
}
