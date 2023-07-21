package com.example.stripe;

import java.math.BigDecimal;

public record Product(
        String id,
        String name,
        BigDecimal price,
        String imgUrl)
{}
