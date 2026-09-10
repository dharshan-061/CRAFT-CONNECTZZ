package com.craftconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "artisan_id", nullable = false)
    private Artisan artisan;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, length = 255)
    private String slug;

    @Column(name = "short_description", length = 500)
    private String shortDescription;

    @Column(name = "full_description", columnDefinition = "TEXT")
    private String fullDescription;

    @Column(name = "raw_material", length = 150)
    private String rawMaterial;

    @Column(length = 100)
    private String dimensions;

    @Column(name = "weight_kg", precision = 6, scale = 2)
    private BigDecimal weightKg;

    @Column(name = "crafting_time_hours")
    private Integer craftingTimeHours;

    @Column(name = "cost_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal costPrice;

    @Column(name = "suggested_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal suggestedPrice;

    @Column(name = "final_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal finalPrice;

    @Column(name = "discount_percentage")
    @Builder.Default
    private Integer discountPercentage = 0;

    @Column(name = "stock_quantity")
    @Builder.Default
    private Integer stockQuantity = 1;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private ProductStatus status = ProductStatus.PUBLISHED;

    @Column(name = "listed_on_gem")
    @Builder.Default
    private Boolean listedOnGem = true;

    @Column(name = "listed_on_ondc")
    @Builder.Default
    private Boolean listedOnOndc = true;

    @Column(name = "listed_on_tribes_india")
    @Builder.Default
    private Boolean listedOnTribesIndia = false;

    @Column(name = "voice_language", length = 50)
    private String voiceLanguage;

    @Column(name = "voice_transcript_original", columnDefinition = "TEXT")
    private String voiceTranscriptOriginal;

    @Column(name = "ai_enhanced_image")
    @Builder.Default
    private Boolean aiEnhancedImage = true;

    @Column(name = "ai_confidence_score", precision = 4, scale = 2)
    @Builder.Default
    private BigDecimal aiConfidenceScore = new BigDecimal("0.95");

    @Column(name = "view_count")
    @Builder.Default
    private Integer viewCount = 0;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Builder.Default
    private List<ProductImage> images = new ArrayList<>();

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public enum ProductStatus {
        DRAFT, PUBLISHED, OUT_OF_STOCK, ARCHIVED
    }
}
