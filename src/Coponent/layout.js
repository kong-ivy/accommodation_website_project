import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GuestInfo from './Personalinfo';
import useStyles from '../Coponent/useStyles'
import PropertyDetail from '../Coponent/PropertyDetail'
import PaymentDetail from './PaymentDetail';
import Paypal from './Paypal'

export default function FullWidthGrid(){
    
    const classes = useStyles();
    return (
        <div className="back-ground">
        <div className="main">
            <h2>Your Booking details</h2>
            <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                <div >
                    <h5>STEP 1: Check Yor Room information</h5>
                    <h2>{this.props.name}</h2>
                    <PropertyDetail/>
                </div></Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                    <h5>STEP 2: Please Input Check-in details</h5>
                    <GuestInfo/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}> 
                <div >
                    <h5>STEP 3: Check Payment details</h5>
                    <PaymentDetail></PaymentDetail>
                </div></Paper>
                </Grid>
            </Grid>
            </div>
            <div className="paypal">
                <Paypal />
            </div> 
        </div>
        </div>
    );
}
