import React, {Component} from 'react';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';


class Search extends Component{
    constructor(){
        super()
        this.state = {
            city: "",
            suburb: "",
            check_in_date:"",
            check_out_date:"",
            querystr:"city=sydney&suburb=maroubra&check_in_date=2020-04-03&check_out_date=2020-04-07",
            items:[],
            search_data:[],
            isloaded:false
        }
        this.getData = this.getData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    async getData(){
        const data=this.state
        const usp= new URLSearchParams(this.state.querystr)
        usp.set('city',this.state.city)
        usp.set('suburb',this.state.suburb)
        usp.set('check_in_date',this.state.check_in_date)
        usp.set('check_out_date',this.state.check_out_date)
        console.log(usp)
        var url="http://127.0.0.1:8081/v2/room/search?"
        url+=usp
        Axios.get(url)
            .then(res=>{
                console.log("res:",res.data);
                this.props.handlesearchdata(data);    
                this.setState({items: res.data,
                                isloaded:true,
                                search_data:data})
                this.downloadFile()
                this.sleep(2)
                this.props.history.push("/room");
            
            });   
    }
    sleep( ms ) {
        let start = Date.now();
        while ( Date.now() < start + ms ) {} 
    }
    
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    


    fun() {
        this.sleep(4)
        this.props.history.push("/room");
    }
    downloadFile = async () => {
        const {items} = this.state; 
        console.log("file",items)
        const fileName = "data";
        const json = JSON.stringify(items);
        const blob = new Blob(["export default "+json],{type:'application/json'});
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".js";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
    }
    render(){
        const {city,suburb,check_in_date,check_out_date} =this.state
        
    return (
        <div className="back">
            <div className="Search">
                <h2>Find your place</h2>
                <br/>
                
                <label className="ci"><b>City:</b>
                    <input type="text" name="city" value={city} placeholder="input city name"
                    onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label className="ci"><b>Suburb:</b>
                    <input type="text" name="suburb" value={suburb} placeholder="input suburb name" 
                    onChange={this.handleInputChange}/>  
                </label>
                <br/>
                <label className="ci"><b>Check in:</b>
                <input type="date" name="check_in_date" value={check_in_date} placeholder="input check in date"
                onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label className="ci"><b>Check out:</b>
                    <input type="date" name="check_out_date" value={check_out_date} placeholder="input check out date"
                    onChange={this.handleInputChange}/>
                </label>
                <br/>
                
                <button className="sea_button" onClick={()=> {this.getData()}}>
                    <h3>Search</h3>
                </button>  
                    
                
            </div>
            
        </div>
        
        
    );
    }
}
export default withRouter(Search);




