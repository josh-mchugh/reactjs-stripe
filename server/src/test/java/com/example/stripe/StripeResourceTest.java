package com.example.stripe;

import io.quarkus.test.InjectMock;
import io.quarkus.test.junit.QuarkusTest;
import jakarta.ws.rs.core.Response;

import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;


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
}
