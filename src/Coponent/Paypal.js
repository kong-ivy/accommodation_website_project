import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends React.Component {
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state={
            pay:[]
        }
    }
    handlebooking(){
        let url="http://127.0.0.1:8081/v2/booking";
        const data=this.props.data
        data.price=this.props.total_price
        console.log(data)
        
        fetch(url,{
            method: 'post',
            headers:{
                'content-type':'application/json',
                'accept':'application/xml'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp)=>{
                console.log(resp)
                if(resp==="order succeed"){
                    alert("order succeed")
                } 
                if(resp==="Time error"){
                    alert("room has been booked,please select another room")
                    
                } 
            })
        })
    }
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                console.log("The payment was succeeded!", payment);
                this.handlebooking()
                this.props.handle_payment()
            	// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'AUD'; // or you can set this value from your props or state
        var total = this.props.total_price; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
        
        const client = {
            sandbox:    'AXgMDd8-93aSv_hA8PzBTLPUH-ICwU-dtKKCFplquI_xJxQnZZPa8O8c2Co2VFvzotDQuIVHixriBcQp',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={total} 
                onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel}
                style={{
                    size:'large',
                    color:'blue',
                    shape:'rect',
                    label:'checkout'
                }}
                    />
        );
    }
}