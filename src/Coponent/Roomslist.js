import React from 'react';
import Roomfilter from './Room_filter';

export default function Roomslist({rooms}) {
    if(rooms.length===0){
        return(
            <div className="empty-search">
                <h3>Unfortunately no rooms mathched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Roomfilter key={item.rid} room={item} />;
                    })
                }
            </div>
        </section>
    );
}
