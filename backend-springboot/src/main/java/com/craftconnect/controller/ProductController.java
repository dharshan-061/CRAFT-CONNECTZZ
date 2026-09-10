package com.craftconnect.controller;

import com.craftconnect.dto.ApiResponse;
import com.craftconnect.dto.ProductCreateDTO;
import com.craftconnect.model.Product;
import com.craftconnect.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Product>>> getAllProducts(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) Long artisanId) {
        
        List<Product> products;
        if (search != null && !search.trim().isEmpty()) {
            products = productService.searchProducts(search);
        } else if (categoryId != null) {
            products = productService.getProductsByCategory(categoryId);
        } else if (artisanId != null) {
            products = productService.getProductsByArtisan(artisanId);
        } else {
            products = productService.getAllPublishedProducts();
        }
        return ResponseEntity.ok(ApiResponse.ok(products, "Fetched " + products.size() + " products successfully."));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Product>> getProductById(@PathVariable Long id) {
        return productService.getProductById(id)
                .map(p -> ResponseEntity.ok(ApiResponse.ok(p, "Product found")))
                .orElseGet(() -> ResponseEntity.status(404).body(ApiResponse.error("Product not found with id: " + id)));
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<ApiResponse<Product>> getProductBySlug(@PathVariable String slug) {
        return productService.getProductBySlug(slug)
                .map(p -> ResponseEntity.ok(ApiResponse.ok(p, "Product found")))
                .orElseGet(() -> ResponseEntity.status(404).body(ApiResponse.error("Product not found with slug: " + slug)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Product>> createProduct(@Valid @RequestBody ProductCreateDTO dto) {
        try {
            Product created = productService.createProduct(dto);
            return ResponseEntity.status(201).body(ApiResponse.ok(created, "Product published successfully to CraftConnect & linked marketplaces!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @GetMapping("/gem-marketplace")
    public ResponseEntity<ApiResponse<List<Product>>> getGeMProducts() {
        List<Product> gemProducts = productService.getGeMProducts();
        return ResponseEntity.ok(ApiResponse.ok(gemProducts, "Fetched GeM government listed craft products"));
    }
}
