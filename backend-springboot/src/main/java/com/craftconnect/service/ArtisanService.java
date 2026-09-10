package com.craftconnect.service;

import com.craftconnect.model.Artisan;
import com.craftconnect.repository.ArtisanRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArtisanService {

    private final ArtisanRepository artisanRepository;

    public ArtisanService(ArtisanRepository artisanRepository) {
        this.artisanRepository = artisanRepository;
    }

    public List<Artisan> getAllArtisans() {
        return artisanRepository.findAll();
    }

    public Optional<Artisan> getArtisanById(Long id) {
        return artisanRepository.findById(id);
    }

    public List<Artisan> getOdopArtisans() {
        return artisanRepository.findByOdopRegisteredTrue();
    }

    public Artisan saveArtisan(Artisan artisan) {
        return artisanRepository.save(artisan);
    }
}
