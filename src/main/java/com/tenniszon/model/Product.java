package com.tenniszon.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record Product(
        String id,
        String name,
        String category,
        @JsonProperty("description_zh")
        String descriptionZh,
        @JsonProperty("description_en")
        String descriptionEn,
        int price,
        String currency,
        String badge,
        @JsonProperty("sort_order")
        int sortOrder
) {
}
