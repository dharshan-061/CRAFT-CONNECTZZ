package com.craftconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "artisans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Artisan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, unique = true, length = 20)
    private String phone;

    @Column(length = 100)
    private String email;

    @Column(nullable = false, length = 100)
    private String state;

    @Column(nullable = false, length = 100)
    private String district;

    @Column(length = 150)
    private String village;

    @Column(name = "preferred_language", length = 50)
    @Builder.Default
    private String preferredLanguage = "Hindi";

    @Column(name = "craft_specialty", nullable = false, length = 150)
    private String craftSpecialty;

    @Column(name = "experience_years")
    @Builder.Default
    private Integer experienceYears = 1;

    @Builder.Default
    private Boolean verified = true;

    @Column(name = "shg_name", length = 150)
    private String shgName;

    @Column(name = "odop_registered")
    @Builder.Default
    private Boolean odopRegistered = false;

    @Column(name = "gem_seller_id", length = 100)
    private String gemSellerId;

    @Column(columnDefinition = "TEXT")
    private String bio;

    @Column(name = "avatar_url", length = 500)
    private String avatarUrl;

    @Column(name = "total_sales_count")
    @Builder.Default
    private Integer totalSalesCount = 0;

    @Column(name = "total_revenue", precision = 12, scale = 2)
    @Builder.Default
    private BigDecimal totalRevenue = BigDecimal.ZERO;

    @Column(precision = 3, scale = 2)
    @Builder.Default
    private BigDecimal rating = new BigDecimal("4.80");

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
