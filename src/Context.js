import React, { Component } from 'react';
import items from './data';


const RoomContext =React.createContext();
class RoomProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            rooms:[],
            sortedRooms:[],
            featuredRooms:[],
            loading: true,
            type:'all',
            slug:'',
            name:"",
            capacity:1,
            price:0,
            minPrice:0,
            maxPrice:0,
            airconditioner:false,
            carpark:false,
            wifi:false,
            gym:false,
            pets:false,
            breakfast:false,
            kitchen:false
        }
        
    }
    //getdata
    componentDidMount() {
        let rooms =this.formatData(items);
        let featuredRooms=rooms.filter(room => room.featured === true);
        let maxPrice=Math.max(...rooms.map(item=>item.price));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice, 
            maxPrice
        });
    }
    formatData(items){
        let tempItems = items.map(item =>{
            let room={...item};
            return room;
        });
        return tempItems;
    }
    getRoom= name =>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room)=>room.name === name);
        return room;
    };

    handleChange = event => {
        const target=event.target
        const value=event.target.value === 'checkbox' ? 
        target.checked:target.value
        const name=event.target.name;
        this.setState({
            [name]:value
        },this.filterarooms)
        
    };
    filterarooms= () => {
        let{
            rooms,type,capacity,price,airconditioner,
            carpark,wifi,gym,pets,breakfast,kitchen
        } =this.state;
    
    //all the rooms
    let temRooms=[...rooms];
    //transform values
    capacity = parseInt(capacity)
    price=parseInt(price)
    //filter by type
    if(type !== 'all'){
        temRooms=temRooms.filter(room =>room.type ===type)
    }
    //filter by capacity
    if(capacity!==1){
        temRooms=temRooms.filter(room=>room.capacity >=capacity)
    }

    //filter by price
    temRooms=temRooms.filter(room=>room.price <=price);

    //filter by extras
    if(airconditioner){
        temRooms=temRooms.filter(room=>room.airconditioner===true)
    }
    if(carpark){
        temRooms=temRooms.filter(room=>room.carpark===true)
    }
    if(wifi){
        temRooms=temRooms.filter(room=>room.wifi===true)
    }
    if(gym){
        temRooms=temRooms.filter(room=>room.gym===true)
    }
    if(pets){
        temRooms=temRooms.filter(room=>room.pets===true)
    }
    if(breakfast){
        temRooms=temRooms.filter(room=>room.breakfast===true)
    }
    if(kitchen){
        temRooms=temRooms.filter(room=>room.kitchen===true)
    }



    //change state
    this.setState({
        sortedRooms:temRooms
    })
    };
    render() {
        return (
            <RoomContext.Provider 
            value={{...this.state,getRoom:this.getRoom,
            handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
            

        );
    }
}

const RoomConsumer =RoomContext.Consumer;

export function withroomconsumer(Component){
    return function Consumerwrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export {RoomProvider,RoomConsumer,RoomContext};