import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'


export default function Hostdropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    

    return (
        <div className="User-Account">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <p className="Account">My Account</p>
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}><Link to="/hostprofile">Profile</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/host">Upload property</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/property">Manage property</Link></MenuItem>
            
        </Menu>
        </div>
    );
}
