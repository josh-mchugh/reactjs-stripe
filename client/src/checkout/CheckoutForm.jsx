import { useEffect, useState } from 'react';
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:5173/checkout/complete"
            }
        }).then(({error}) => {
            const hasErrorType = ['card_error', 'validation_error'].includes(error.type);
            const message = hasErrorType ? error.message : "An unexpected error occurred.";
            setMessage(message);
            setIsLoading(false);
        });
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
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
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
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
