package com.example.stripe;

import io.quarkus.test.InjectMock;
import io.quarkus.test.junit.QuarkusTest;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

import java.util.List;

import com.example.stripe.StripeResource.CreatePaymentRequest;
import com.stripe.exception.StripeException;


@QuarkusTest
public class StripeResourceTest {

    @InjectMock
    PaymentService paymentService;
    

    @Test
    public void whenGetProductsThenExpectOk() {

        given()
            .when()
                .get("/products")
            .then()
                .statusCode(Response.Status.OK.getStatusCode());
    }

    @Test
    public void whenPostCreatePaymentIntent() throws StripeException {

        Mockito.when(paymentService.handlePaymentIntent(Mockito.anyLong())).thenReturn("product-intent-client-secret");

        List<String> productIds = List.of("c8b4", "1e6d");
        CreatePaymentRequest request = new CreatePaymentRequest(productIds);

        given()
            .body(request)
            .contentType(MediaType.APPLICATION_JSON)
            .when()
                .post("/create-payment-intent")
            .then()
                .statusCode(Response.Status.OK.getStatusCode())
                .body("clientSecret", is("product-intent-client-secret"));
    }
}
