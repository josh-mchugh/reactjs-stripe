import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const MESSAGES = {
    succeeded: {
        header: "Payment Successful!",
        subheader: "Thank you for choosing Delicious Bagels."
    },
    processing: {
        header: "Payment is processing...",
        subheader: "We are working on processing your payment... hold tight."
    },
    requires_payment_method: {
        header: "Your payment was not successful.",
        subheader: "Return to check to try again."
    }
};

const UNKNOWN_ERROR_MESSAGE = {
    header: "Something went wrong.",
    subheader: "Please try again. A notification has been created of this issue."
};

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

    const [ messages, setMessages ] = useState({});

    useEffect(() => {
        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
        if(stripe && clientSecret) {
            stripe.retrievePaymentIntent(clientSecret)
                .then(({ paymentIntent }) => setMessages(handlePaymentIntentStatus(paymentIntent)));
        }
    }, [stripe]);

    const handlePaymentIntentStatus = (paymentIntent) => {
        const message = MESSAGES[`${paymentIntent.status}`];
        return message ? message : UNKNOWN_ERROR_MESSAGE;
    };

    return (
        <article className="checkout-complete">
          <h5 className="checkout-complete__header">{messages.header}</h5>
          <p className="checkout-complete__subheader">{messages.subheader}</p>
          <Link className="checkout-complete__return" to="/">
            Back to product page
          </Link>
        </article>
    );
}

export default CheckoutComplete;
