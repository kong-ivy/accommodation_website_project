import React, { Component } from 'react';
import Search from '../Coponent/Search';
import Navibar from '../Coponent/Navibar';

export default class Logout extends Component {
    render() {
        return (
            <div>
                <Navibar loggedinstatus={this.props.loggedinstatus}/>
                <Search handlesearchdata={this.handlesearchdata}/>
            </div>
        )
    }
}
