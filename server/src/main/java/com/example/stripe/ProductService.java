package com.example.stripe;

import java.util.Collection;
import java.util.List;

public interface ProductService {

    Collection<Product> getProducts();

    long getProductItemsTotal(List<String> productIds);
}
