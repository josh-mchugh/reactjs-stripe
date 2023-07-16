package com.example.stripe;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import jakarta.inject.Singleton;

@Singleton
public class ProductService {

    public record Product(
        String id,
        String name,
        BigDecimal price,
        String imgUrl
    ) {}

    private final Map<String, Product> PRODUCTS = Map.of(
        "c8b4", createPlainBagel(),
        "1e6d", createSesameBagel(),
        "020f", createCinnamonRaisinBagel(),
        "af96", createPoppyBagel()
    );

    public long getProductItemsTotal(List<String> productIds) {
        BigDecimal total = productIds.stream()
            .map(productId -> PRODUCTS.get(productId).price())
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        return total.multiply(new BigDecimal(100)).longValue();
    }

    private Product createPlainBagel() {
        return new Product("c8b4", "Plain Bagel", new BigDecimal("1.60"), "/plain.jpg");
    }

    private Product createSesameBagel() {
        return new Product("1e6d", "Sesame Bagel", new BigDecimal("1.60"), "/sesame.jpg");
    }

    private Product createCinnamonRaisinBagel() {
        return new Product("020f", "Cinnamon Raisin Bagel", new BigDecimal("1.60"), "/cinnamon-raisin.jpg");
    }

    private Product createPoppyBagel() {
        return new Product("af96", "Poppy Bagel", new BigDecimal("1.60"), "/poppy.jpg");
    }
}
