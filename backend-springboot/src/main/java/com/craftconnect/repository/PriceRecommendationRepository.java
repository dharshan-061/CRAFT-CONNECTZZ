package com.craftconnect.repository;

import com.craftconnect.model.PriceRecommendation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PriceRecommendationRepository extends JpaRepository<PriceRecommendation, Long> {
    List<PriceRecommendation> findByProductId(Long productId);
}
