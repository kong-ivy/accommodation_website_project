import React, { Component } from 'react'

export default class RoomSearch extends Component {
    constructor(props){
        super(props);
        this.state={
            s:{}
        }
    }
    render() {
        return (
            <div>
                <br />
                <br />
                <h2>Search Room</h2>
                <form className="filter-form">
                    {/*select city */}
                    <div className="form-group">
                        <label htmlFor="city">city</label>
                        <input type="text" name="city" placeholder={this.props.city} className="form-control"/>
                    </div>
                    {/*finish select city */}
                    {/*select suburb */}
                    <div className="form-group">
                        <label htmlFor="suburb">suburb</label>
                        <input type="text" name="suburb" placeholder={this.props.suburb} className="form-control"/>
                    </div>
                    {/*finish select suburb */}
                    {/*select check in */}
                    <div className="form-group">
                        
                        <label htmlFor="checkin">check in date</label>
                        
                        <input type="date" name="checkin" defaultValue={this.props.check_in_date} className="form-control"/>
                    </div>
                    {/*finish select check in */}
                    {/*select check out */}
                    <div className="form-group">
                        <label htmlFor="checkout">check out date</label>
                        <input type="date" name="checkout" defaultValue={this.props.check_out_date} className="form-control"/>
                    </div>
                    <button className="form-button" >search</button>
                    {/*finish select check in */}
                </form>
            </div>
        )
    }
}
