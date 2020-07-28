import React from 'react';
import RoomsFilter from "./RoomsFilters";
import Roomslist from './Roomslist';
import {withroomconsumer} from '../Context';
import Loading from './loading';




function RoomContainer({context}) {
    
    const {loading,sortedRooms,rooms}=context;
    if(loading){
        return <Loading />;
        
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <Roomslist rooms={sortedRooms} />
        </>
    );
}
export default withroomconsumer(RoomContainer)

