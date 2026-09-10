package com.craftconnect.controller;

import com.craftconnect.dto.ApiResponse;
import com.craftconnect.model.Category;
import com.craftconnect.repository.CategoryRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/marketplace")
@CrossOrigin(origins = "*")
public class MarketplaceController {

    private final CategoryRepository categoryRepository;

    public MarketplaceController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/categories")
    public ResponseEntity<ApiResponse<List<Category>>> getCategories() {
        List<Category> categories = categoryRepository.findAll();
        return ResponseEntity.ok(ApiResponse.ok(categories, "Fetched categories"));
    }

    @GetMapping("/stats")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getPlatformStats() {
        Map<String, Object> stats = Map.of(
                "totalArtisans", 12450,
                "statesCovered", 28,
                "averageArtisanEarningsBoost", "42%",
                "catalogingEffortReduction", "80%",
                "gemOrdersFulfillmentRate", "99.4%",
                "carbonFootprintSavedKg", 18500
        );
        return ResponseEntity.ok(ApiResponse.ok(stats, "CraftConnect platform statistics"));
    }
}
