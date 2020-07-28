import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    }));
    

export default function FullWidthGrid() {

    const classes = useStyles();

    return (
        <div className="main">
            <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <h2>Your Booking details</h2></Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><div >
                                    <h3>property detail</h3>
                                    <p>Hotel Name:</p>
                                    <p>Address:</p>
                                    <p>Date:</p>
                                </div></Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}> <div >
                                        <h3>Payment-detail</h3>
                                    </div></Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><h3>Payment-method</h3> </Paper>
            </Grid>
        </Grid>
        </div>

        </div>
        
    );
}
