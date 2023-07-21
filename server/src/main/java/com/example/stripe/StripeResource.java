package com.example.stripe;

import java.util.List;

import com.stripe.exception.StripeException;

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

    private PaymentService paymentService;
    private ProductService productService;

    public StripeResource(PaymentService paymentService, ProductService  productService ) {
        this.paymentService = paymentService;
        this.productService = productService;
    }

    public record CreatePaymentRequest(List<String> itemIds) { }

    public record CreatePaymentResponse(String clientSecret) { }

    @GET
    @Path("/products")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProducts() {
        
        return Response.ok(productService.getProducts()).build();
    }

    @POST
    @Path("/create-payment-intent")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response postCreatePaymentIntent(CreatePaymentRequest payment) throws StripeException {;

        // calculate total amount of items for payment request
        long amount = productService.getProductItemsTotal(payment.itemIds());

        // use payment service to get payment intent for client secret
        String clientSercret = paymentService.handlePaymentIntent(amount);

        CreatePaymentResponse response = new CreatePaymentResponse(clientSercret);

        return Response.ok(response).build();
    }
}
