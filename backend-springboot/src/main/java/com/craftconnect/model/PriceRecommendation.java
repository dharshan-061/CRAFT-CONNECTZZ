package com.craftconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "price_recommendations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PriceRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "raw_material_cost", nullable = false, precision = 10, scale = 2)
    private BigDecimal rawMaterialCost;

    @Column(name = "crafting_hours", nullable = false)
    private Integer craftingHours;

    @Column(name = "hourly_rate", nullable = false, precision = 10, scale = 2)
    private BigDecimal hourlyRate;

    @Column(name = "market_demand_index", precision = 4, scale = 2)
    private BigDecimal marketDemandIndex;

    @Column(name = "suggested_min_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal suggestedMinPrice;

    @Column(name = "suggested_ideal_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal suggestedIdealPrice;

    @Column(name = "suggested_premium_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal suggestedPremiumPrice;

    @Column(name = "artisan_accepted_price", precision = 10, scale = 2)
    private BigDecimal artisanAcceptedPrice;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
