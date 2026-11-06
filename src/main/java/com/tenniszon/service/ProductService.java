package com.tenniszon.service;

import com.tenniszon.model.Product;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final JdbcClient jdbcClient;

    public ProductService(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<Product> findAll() {
        return jdbcClient.sql("""
                        SELECT id, name, category, description_zh, description_en,
                               price, currency, badge, sort_order
                        FROM products
                        ORDER BY sort_order, id
                        """)
                .query((rs, rowNum) -> new Product(
                        rs.getString("id"),
                        rs.getString("name"),
                        rs.getString("category"),
                        rs.getString("description_zh"),
                        rs.getString("description_en"),
                        rs.getInt("price"),
                        rs.getString("currency"),
                        rs.getString("badge"),
                        rs.getInt("sort_order")
                ))
                .list();
    }
}
