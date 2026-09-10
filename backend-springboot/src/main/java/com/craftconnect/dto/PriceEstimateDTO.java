package com.craftconnect.dto;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public class PriceEstimateDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Request {
        private String category;
        private BigDecimal rawMaterialCost;
        private BigDecimal craftingHours;
        @Builder.Default
        private Integer artisanExperienceYears = 5;
        @Builder.Default
        private String region = "Central India";
        @Builder.Default
        private Boolean isOdopCertified = true;
        @Builder.Default
        private String targetChannel = "ALL";
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private BigDecimal suggestedMinPrice;
        private BigDecimal suggestedIdealPrice;
        private BigDecimal suggestedPremiumPrice;
        private BigDecimal hourlyLaborRate;
        private BigDecimal fairWageTotal;
        private BigDecimal estimatedArtisanProfitPct;
        private BigDecimal confidenceScore;
        private BigDecimal marketDemandIndex;
        private Map<String, Object> priceBreakdown;
        private List<String> recommendations;
    }
}
