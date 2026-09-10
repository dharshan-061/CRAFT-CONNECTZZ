package com.craftconnect.service;

import com.craftconnect.dto.ProductCreateDTO;
import com.craftconnect.model.Artisan;
import com.craftconnect.model.Category;
import com.craftconnect.model.Product;
import com.craftconnect.model.ProductImage;
import com.craftconnect.repository.ArtisanRepository;
import com.craftconnect.repository.CategoryRepository;
import com.craftconnect.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ArtisanRepository artisanRepository;
    private final CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository,
                          ArtisanRepository artisanRepository,
                          CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.artisanRepository = artisanRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Product> getAllPublishedProducts() {
        return productRepository.findByStatus(Product.ProductStatus.PUBLISHED);
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Optional<Product> getProductBySlug(String slug) {
        return productRepository.findBySlug(slug);
    }

    public List<Product> getProductsByCategory(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    public List<Product> getProductsByArtisan(Long artisanId) {
        return productRepository.findByArtisanId(artisanId);
    }

    public List<Product> searchProducts(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllPublishedProducts();
        }
        return productRepository.searchProducts(query.trim());
    }

    public List<Product> getGeMProducts() {
        return productRepository.findByListedOnGemTrue();
    }

    @Transactional
    public Product createProduct(ProductCreateDTO dto) {
        Artisan artisan = artisanRepository.findById(dto.getArtisanId())
                .orElseThrow(() -> new IllegalArgumentException("Artisan not found with ID: " + dto.getArtisanId()));

        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Category not found with ID: " + dto.getCategoryId()));

        String baseSlug = dto.getTitle().toLowerCase()
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("^-|-$", "");
        String uniqueSlug = baseSlug + "-" + UUID.randomUUID().toString().substring(0, 6);

        Product product = Product.builder()
                .artisan(artisan)
                .category(category)
                .title(dto.getTitle())
                .slug(uniqueSlug)
                .shortDescription(dto.getShortDescription())
                .fullDescription(dto.getFullDescription())
                .rawMaterial(dto.getRawMaterial())
                .dimensions(dto.getDimensions())
                .weightKg(dto.getWeightKg())
                .craftingTimeHours(dto.getCraftingTimeHours())
                .costPrice(dto.getCostPrice())
                .suggestedPrice(dto.getSuggestedPrice())
                .finalPrice(dto.getFinalPrice())
                .discountPercentage(dto.getDiscountPercentage() != null ? dto.getDiscountPercentage() : 0)
                .stockQuantity(dto.getStockQuantity() != null ? dto.getStockQuantity() : 1)
                .status(Product.ProductStatus.PUBLISHED)
                .listedOnGem(Boolean.TRUE.equals(dto.getListedOnGem()))
                .listedOnOndc(Boolean.TRUE.equals(dto.getListedOnOndc()))
                .listedOnTribesIndia(Boolean.TRUE.equals(dto.getListedOnTribesIndia()))
                .voiceLanguage(dto.getVoiceLanguage())
                .voiceTranscriptOriginal(dto.getVoiceTranscriptOriginal())
                .aiEnhancedImage(true)
                .build();

        // Add primary image
        String rawImg = dto.getOriginalRawImageUrl() != null ? dto.getOriginalRawImageUrl() : "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80";
        String studioImg = dto.getEnhancedStudioImageUrl() != null ? dto.getEnhancedStudioImageUrl() : rawImg;

        ProductImage primaryImage = ProductImage.builder()
                .product(product)
                .originalRawUrl(rawImg)
                .enhancedStudioUrl(studioImg)
                .isPrimary(true)
                .backgroundRemoved(true)
                .lightingAdjusted(true)
                .build();

        product.getImages().add(primaryImage);

        // Update artisan stats
        artisan.setTotalSalesCount(artisan.getTotalSalesCount() + 1);
        artisanRepository.save(artisan);

        return productRepository.save(product);
    }
}
