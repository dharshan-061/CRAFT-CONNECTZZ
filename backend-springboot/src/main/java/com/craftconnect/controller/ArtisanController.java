package com.craftconnect.controller;

import com.craftconnect.dto.ApiResponse;
import com.craftconnect.model.Artisan;
import com.craftconnect.service.ArtisanService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artisans")
@CrossOrigin(origins = "*")
public class ArtisanController {

    private final ArtisanService artisanService;

    public ArtisanController(ArtisanService artisanService) {
        this.artisanService = artisanService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Artisan>>> getAllArtisans() {
        List<Artisan> artisans = artisanService.getAllArtisans();
        return ResponseEntity.ok(ApiResponse.ok(artisans, "Fetched all registered artisans"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Artisan>> getArtisanById(@PathVariable Long id) {
        return artisanService.getArtisanById(id)
                .map(a -> ResponseEntity.ok(ApiResponse.ok(a, "Artisan found")))
                .orElseGet(() -> ResponseEntity.status(404).body(ApiResponse.error("Artisan not found with ID: " + id)));
    }

    @GetMapping("/odop")
    public ResponseEntity<ApiResponse<List<Artisan>>> getOdopArtisans() {
        List<Artisan> odop = artisanService.getOdopArtisans();
        return ResponseEntity.ok(ApiResponse.ok(odop, "Fetched ODOP verified artisans"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Artisan>> registerArtisan(@RequestBody Artisan artisan) {
        Artisan saved = artisanService.saveArtisan(artisan);
        return ResponseEntity.status(201).body(ApiResponse.ok(saved, "Artisan registered successfully"));
    }
}
