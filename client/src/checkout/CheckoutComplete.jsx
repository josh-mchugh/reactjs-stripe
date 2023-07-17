import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function CheckoutComplete(props) {
    return (
        <Elements stripe={stripePromise}>
          <Message {...props}/>
        </Elements>
    );
}

function Message(props) {

    const stripe = useStripe();
    const elements = useElements();

    const [ message, setMessage ] = useState(null);

    useEffect(() => {
        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
        if(stripe && clientSecret) {
            stripe.retrievePaymentIntent(clientSecret)
                .then(handlePaymentIntentStatus);
        }
    }, [stripe]);

    const handlePaymentIntentStatus = ({paymentIntent}) => {
        switch(paymentIntent.status) {
        case "succeeded":
            setMessage("Payment succeeded!");
            break;
        case "processing":
            setMessage("Your payment is processing.");
            break;
        case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
        default:
            setMessage("Something went wrong.");
            break;
        }
    };

    return (
        <div>{message}</div>
    );
}

export default CheckoutComplete;
