import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Loading from './loading';
import Roomfilter from './Room_filter';



export default class Featuredroom extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms:rooms}=this.context;
        rooms = rooms.map(room => {
            return <Roomfilter key={room.id} room={room} />;
        });
        return (
            <section className="featured-rooms">
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}
