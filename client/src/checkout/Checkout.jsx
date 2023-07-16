import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const mapStateToProps = (state) => ({
    bag: state.bag
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

function Checkout(props) {
    const [ clientSecret, setClientSecret ] = useState("");
    useEffect(() => {
        if(props.bag.length) {
            fetchPaymentIntent();
        }
    }, []);

    function fetchPaymentIntent() {
        fetch("/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    itemIds: props.bag ? props.bag.map(item => item.id) : []
                })
            })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }

    const appearance = {
        theme: 'stripe'
    };
    const options = {
        clientSecret,
        appearance
    };
    return (
        <div className="">
          { props.bag.length === 0 && <div>Bag is empty!</div>}
          { clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
          )}
        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
