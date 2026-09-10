package com.craftconnect.dto;

import jakarta.validation.constraints.*;
import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductCreateDTO {

    @NotNull(message = "Artisan ID is required")
    private Long artisanId;

    @NotNull(message = "Category ID is required")
    private Long categoryId;

    @NotBlank(message = "Product title is required")
    private String title;

    private String shortDescription;
    private String fullDescription;
    private String rawMaterial;
    private String dimensions;
    private BigDecimal weightKg;
    private Integer craftingTimeHours;

    @NotNull(message = "Cost price is required")
    private BigDecimal costPrice;

    @NotNull(message = "Suggested price is required")
    private BigDecimal suggestedPrice;

    @NotNull(message = "Final price is required")
    private BigDecimal finalPrice;

    @Builder.Default
    private Integer discountPercentage = 0;

    @Builder.Default
    private Integer stockQuantity = 1;

    @Builder.Default
    private Boolean listedOnGem = true;

    @Builder.Default
    private Boolean listedOnOndc = true;

    @Builder.Default
    private Boolean listedOnTribesIndia = false;

    private String voiceLanguage;
    private String voiceTranscriptOriginal;
    private String originalRawImageUrl;
    private String enhancedStudioImageUrl;
    private List<String> additionalImages;
}
