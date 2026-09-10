package com.craftconnect.repository;

import com.craftconnect.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findBySlug(String slug);
    List<Product> findByArtisanId(Long artisanId);
    List<Product> findByCategoryId(Long categoryId);
    List<Product> findByStatus(Product.ProductStatus status);

    @Query("SELECT p FROM Product p WHERE p.status = 'PUBLISHED' AND " +
           "(LOWER(p.title) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.shortDescription) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.rawMaterial) LIKE LOWER(CONCAT('%', :query, '%')))")
    List<Product> searchProducts(@Param("query") String query);

    List<Product> findByListedOnGemTrue();
    List<Product> findByListedOnOndcTrue();
}
