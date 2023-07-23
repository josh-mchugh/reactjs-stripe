package com.example.stripe;

import com.stripe.exception.StripeException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class PaymentServiceTest {

    @Test
    public void whenHandlePaymentIntentThenExpectClientSecret() throws StripeException {

        PaymentService paymentService = new PaymentServiceImpl(System.getProperty("stripe.api.key"));

        String clientSecret = paymentService.handlePaymentIntent(100);

        Assertions.assertNotNull(clientSecret);
    }
}
