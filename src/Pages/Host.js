import React, { Component} from 'react'
import Navibar from '../Coponent/Navibar';


export default class Host extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rid:"01",
            sid:"s01",
            slug:"",
            type: "",
            city: "",
            Suburb:"",
            Address:"",
            name: "",
            description: "",
            price: "",
            capacity: "",
            pets: false,
            breakfast: false,
            airconditioner: false,
            carpark: false,
            wifi: false,
            gym: false,
            kitchen: false,
            url1: "",
            url2:"",
            url3:"",
            url4:"",
            url5:"",
            
        }
        this.handleSubmit1=this.handleSubmit1.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleInputChange1=this.handleInputChange1.bind(this);
        this.handleInputChang2=this.handleInputChang2.bind(this);
        this.handle_out=this.handle_out.bind(this);

    }
    

    handleSubmit1= (event) =>{
        let url="http://127.0.0.1:8081/v2/room";
        const data=this.state;
        data.sid=this.props.sid.email;
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
                if(resp==="Succeed"){
                    alert("succeed")
                } 
            })
        })
        
        
    }  
    handle_out(){
        this.props.handlelogout()
    }
    
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleInputChange1 =(e)=>{
        e.preventDefault()
        if(e.target.value ==="on"){
            this.setState({
                [e.target.name] : true
            })
        }
        
    }
    handleInputChang2 = (event) =>{
        event.preventDefault()
        const parsed = parseInt(event.target.value, 10);
        this.setState({
            [event.target.name] : parsed
        })
    }


    render() {
        const { type,address,name,description,price,city,Suburb,capacity,url1,url2,url3,url4,url5} = this.state
        
        return (
            <div className="host">
                <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>
                <h2>Upload accommodation</h2>           
                <div className = "host-mask">
                    <div className="host_border">
                        <h3>Room Type</h3>
                        <select className="inp" type="text" name="type" value={type} 
                        onChange={this.handleInputChange} >
                            <option aria-label="None" value=""/>
                            <option>single</option>
                            <option>double</option>
                            <option>family</option>
                            <option>presidential</option>
                        </select>
                        <h3>Room Name</h3>
                        <select className="inp" type="text" name="name" value={name} 
                        onChange={this.handleInputChange}>
                            <option aria-label="None" value=""/>
                            <option>single_economy</option>
                            <option>single_basic</option>
                            <option>single_standard</option>
                            <option>single_deluxe</option>
                            <option>double_economy</option>
                            <option>double_basic</option>
                            <option>double_standard</option>
                            <option>double_deluxe</option>
                            <option>family_economy</option>
                            <option>family_basic</option>
                            <option>family_standard</option>
                            <option>presidential</option>
                        </select>
                        <h3>Address</h3>
                        <input className="inp" type="text" name="Address" value={address} placeholder="input address"
                        onChange={this.handleInputChange} />
                        <h3>City</h3>
                        <input className="inp" type="text" name="city" value={city} placeholder="input city"
                        onChange={this.handleInputChange} />
                        <h3>Suburb</h3>
                        <input className="inp" type="text" name="Suburb" value={Suburb} placeholder="input Suburb"
                        onChange={this.handleInputChange} />
                        <h3>Capacity</h3>
                        <input className="inp" type="text" name="capacity" value={capacity} placeholder="input room capacity"
                        onChange={this.handleInputChang2} />
                        <h3>Price ($AU) Per night</h3>
                        <input className="inp" type="text" name="price" value={price} placeholder="input room price"
                        onChange={this.handleInputChang2} />
                        <h3>Description</h3>
                        <textarea className="des" type="text" name="description" cols="50" rows="30" value={description} placeholder="input descriptions"
                            onChange={this.handleInputChange} />
                        <h3>Select Facilities</h3>
                        <div className="facilities">
                            <div>
                                <input type="checkbox" 
                                name="wifi" id="wifi" 
                                checked={this.state.wifi} onChange={this.handleInputChange1}/>
                                <label htmlFor="wifi" className="host_fil">
                                    Free wifi</label>
                            </div >
                            <div>
                                <input type="checkbox"  
                                name="airconditioner" id="airconditioner" 
                                checked={this.state.airconditioner} onChange={this.handleInputChange1}/>
                                <label htmlFor="airconditioner" className="host_fil">
                                Airconditioner</label>
                            </div>
                            <div>
                                <input type="checkbox" 
                                    name="kitchen" id="kitchen" 
                                    checked={this.state.kitchen} onChange={this.handleInputChange1}/>
                                    <label htmlFor="kitchen" className="host_fil">
                                    Kitchen</label>
                            </div>
                            <div>
                                <input type="checkbox" 
                                name="gym" id="gym" 
                                checked={this.state.gym} onChange={this.handleInputChange1}/>
                                <label htmlFor="gym" className="host_fil">
                                Gym</label>
                            </div>                            
                            <div>
                                <input type="checkbox" 
                                name="carpark" id="carpark" 
                                checked={this.state.carpark} onChange={this.handleInputChange1}/>
                                <label htmlFor="carpark" className="host_fil">
                                Carpark</label>
                            </div>
                            <div>
                                <input type="checkbox" 
                                name="pets" id="pets" 
                                checked={this.state.pets} onChange={this.handleInputChange1}/>
                                <label htmlFor="pets" className="host_fil">
                                Pets</label>
                            </div>
                            <div>
                                <input type="checkbox" 
                                name="breakfast" id="breakfast" 
                                checked={this.state.breakfast} onChange={this.handleInputChange1}/>
                                <label htmlFor="breakfast" className="host_fil">
                                Breakfast</label>
                            </div>

                        </div>
                        
                        <h3>Upload images</h3>
                        <input type="file" name="url1" value={url1} onChange={this.handleInputChange} />
                        <input type="file" name="url2" value={url2} onChange={this.handleInputChange} />
                        <input type="file" name="url3" value={url3} onChange={this.handleInputChange} />
                        <input type="file" name="url4" value={url4} onChange={this.handleInputChange} />
                        <input type="file" name="url5" value={url5} onChange={this.handleInputChange} />
                        
                        <button className="host_submit" onClick={()=>this.handleSubmit1()}>
                        Submit
                        </button>
                    </div>
                    
                </div>
            </div>
            
            
        );
        
    }
}
