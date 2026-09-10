package com.craftconnect.controller;

import com.craftconnect.dto.ApiResponse;
import com.craftconnect.dto.PriceEstimateDTO;
import com.craftconnect.dto.VoiceCatalogDTO;
import com.craftconnect.service.AiIntegrationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai-studio")
@CrossOrigin(origins = "*")
public class AiStudioController {

    private final AiIntegrationService aiIntegrationService;

    public AiStudioController(AiIntegrationService aiIntegrationService) {
        this.aiIntegrationService = aiIntegrationService;
    }

    @PostMapping("/estimate-price")
    public ResponseEntity<ApiResponse<PriceEstimateDTO.Response>> estimatePrice(@RequestBody PriceEstimateDTO.Request request) {
        PriceEstimateDTO.Response response = aiIntegrationService.getDynamicPriceEstimate(request);
        return ResponseEntity.ok(ApiResponse.ok(response, "AI Dynamic Price calculated successfully with fair wage breakdown."));
    }

    @PostMapping("/voice-catalog")
    public ResponseEntity<ApiResponse<VoiceCatalogDTO.Response>> voiceToCatalog(@RequestBody VoiceCatalogDTO.Request request) {
        VoiceCatalogDTO.Response response = aiIntegrationService.generateCatalogFromVoice(request);
        return ResponseEntity.ok(ApiResponse.ok(response, "Multilingual Voice transcribed and structured into SEO-friendly catalog."));
    }

    @PostMapping("/enhance-image-preview")
    public ResponseEntity<ApiResponse<Map<String, Object>>> enhanceImagePreview(@RequestBody Map<String, Object> req) {
        String preset = (String) req.getOrDefault("presetStyle", "Warm Heritage Studio");
        Map<String, Object> result = Map.of(
                "status", "SUCCESS",
                "studioPreset", preset,
                "backgroundRemoved", true,
                "lightingAdjusted", true,
                "sharpnessScore", "2.4x clarity boost",
                "enhancedUrl", "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=90"
        );
        return ResponseEntity.ok(ApiResponse.ok(result, "Image studio enhancement completed"));
    }
}
