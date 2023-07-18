import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';

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

    const options = {
        clientSecret,
        appearance: { theme: 'stripe'}
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

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PaymentElement
            id="payment-element"
            options={ { layout: "tabs" } }
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
