package com.example.stripe;

import java.util.Optional;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class PaymentServiceImpl implements PaymentService {

    public PaymentServiceImpl(@ConfigProperty(name = "stripe.api.key") String stripeApiKey) {
        Stripe.apiKey = stripeApiKey;
    }

    @Override
    public String handlePaymentIntent(long amount) throws StripeException {

        PaymentIntentCreateParams.AutomaticPaymentMethods paymentMethods = PaymentIntentCreateParams.AutomaticPaymentMethods
                .builder()
                .setEnabled(true)
                .build();

        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setCurrency("usd")
                .setAmount(amount)
                .setAutomaticPaymentMethods(paymentMethods)
                .build();

        PaymentIntent paymentIntent = PaymentIntent.create(params);

        return paymentIntent.getClientSecret();
    }
}
