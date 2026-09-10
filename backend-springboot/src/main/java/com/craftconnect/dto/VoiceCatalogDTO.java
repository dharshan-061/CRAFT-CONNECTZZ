package com.craftconnect.dto;

import lombok.*;
import java.util.List;

public class VoiceCatalogDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Request {
        private String audioTranscript;
        private String spokenLanguage;
        private String artisanName;
        private String state;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private String detectedLanguage;
        private String englishTitle;
        private String vernacularTitle;
        private String extractedCategory;
        private List<String> suggestedTags;
        private List<String> rawMaterialsDetected;
        private String dimensionsEstimate;
        private List<String> shortBulletPoints;
        private String generatedStoryDescription;
        private List<String> seoKeywords;
    }
}
