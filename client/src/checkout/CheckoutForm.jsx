import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        if(!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

        if(!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
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
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:5173/checkout"
            }
        });

        if(error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const handleChange = (e) => {
        setEmail(e.target.value)
    };

    const paymentElementOptions = {
        layout: "tabs"
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={handleChange}
          />
          <PaymentElement id="payment-element" options={paymentElementOptions}/>
          <button
            id="submit"
            disabled={isLoading || !stripe || !elements}
          >
            <span id="button-text">
              { isLoading ? "Loading..." : "Pay now" }
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </form>
    );
}

export default CheckoutForm;
