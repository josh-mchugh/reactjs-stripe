package com.example.stripe;

import java.util.List;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("")
@ApplicationScoped
public class StripeResource {

    public StripeResource(@ConfigProperty(name = "stripe.api.key") String stripeApiKey) {
        Stripe.apiKey = stripeApiKey;
    }

    public record CreatePaymentRequest(List<String> itemIds) { }

    public record CreatePaymentResponse(String clientSecret) { }

    @POST
    @Path("/create-payment-intent")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response postCreatePaymentIntent(CreatePaymentRequest payment) throws StripeException {;

        PaymentIntentCreateParams.AutomaticPaymentMethods paymentMethods = PaymentIntentCreateParams.AutomaticPaymentMethods.builder()
            .setEnabled(true)
            .build();

        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
            .setCurrency("usd")
            .setAmount(1400l)
            .setAutomaticPaymentMethods(paymentMethods)
            .build();

        PaymentIntent paymentIntent = PaymentIntent.create(params);
        
        return Response.ok(paymentIntent.getClientSecret()).build();
    }
}