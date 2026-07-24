package com.tenniszon.service;

import com.tenniszon.config.SupabaseProperties;
import com.tenniszon.model.Product;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {

    private final RestClient restClient;
    private final SupabaseProperties supabase;

    public ProductService(RestClient restClient, SupabaseProperties supabase) {
        this.restClient = restClient;
        this.supabase = supabase;
    }

    public List<Product> findAll() {
        if (!supabase.isConfigured()) {
            throw new IllegalStateException("Supabase is not configured. Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY.");
        }

        Product[] products = restClient.get()
                .uri(supabase.url().replaceAll("/+$", "") + "/rest/v1/products?select=*&order=sort_order.asc")
                .header("apikey", supabase.publishableKey())
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + supabase.publishableKey())
                .retrieve()
                .body(Product[].class);

        return products == null ? List.of() : Arrays.asList(products);
    }
}
