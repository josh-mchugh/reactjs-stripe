package com.example.stripe;

import com.stripe.exception.StripeException;

public interface PaymentService {

    String handlePaymentIntent(long amount) throws StripeException;
}
