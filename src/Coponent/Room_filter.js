import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Roomfilter({room}) {

    const {price,name}=room;
    
    return (
        <article className="rooms">
            <div className="img-container">
                
                <img src={require("../images/"+name+"/1.jpg")} alt="single room" />
                <div className="price-top">
                    <h5>${price}</h5>
                    <p>per night</p>
                </div>
                <Link to={`/room/${name}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

Roomfilter.propTypes ={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string),
        price:PropTypes.number.isRequired,
    })
};