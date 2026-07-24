package com.tenniszon.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "supabase")
public record SupabaseProperties(
        String url,
        String publishableKey
) {
    public boolean isConfigured() {
        return url != null && !url.isBlank()
                && publishableKey != null && !publishableKey.isBlank();
    }
}
