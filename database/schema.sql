-- ==============================================================================
-- CraftConnect Database Schema
-- Target: MySQL 8.0+
-- Project: Smart India Hackathon 2026 (Problem Statement ID: 26SIH090)
-- ==============================================================================

CREATE DATABASE IF NOT EXISTS craftconnect_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE craftconnect_db;

-- 1. Artisans Table
CREATE TABLE IF NOT EXISTS artisans (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100),
    state VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    village VARCHAR(150),
    preferred_language VARCHAR(50) DEFAULT 'Hindi',
    craft_specialty VARCHAR(150) NOT NULL,
    experience_years INT DEFAULT 1,
    verified BOOLEAN DEFAULT TRUE,
    shg_name VARCHAR(150), -- Self Help Group name if applicable
    odop_registered BOOLEAN DEFAULT FALSE,
    gem_seller_id VARCHAR(100),
    bio TEXT,
    avatar_url VARCHAR(500),
    total_sales_count INT DEFAULT 0,
    total_revenue DECIMAL(12, 2) DEFAULT 0.00,
    rating DECIMAL(3, 2) DEFAULT 4.8,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. Craft Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon_name VARCHAR(50),
    image_url VARCHAR(500),
    regional_hub VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 3. Products Table
CREATE TABLE IF NOT EXISTS products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    artisan_id BIGINT NOT NULL,
    category_id BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    short_description VARCHAR(500),
    full_description TEXT,
    raw_material VARCHAR(150),
    dimensions VARCHAR(100),
    weight_kg DECIMAL(6, 2),
    crafting_time_hours INT,
    
    -- Pricing Breakdown
    cost_price DECIMAL(10, 2) NOT NULL,
    suggested_price DECIMAL(10, 2) NOT NULL,
    final_price DECIMAL(10, 2) NOT NULL,
    discount_percentage INT DEFAULT 0,
    stock_quantity INT DEFAULT 1,
    
    -- Status & Channels
    status ENUM('DRAFT', 'PUBLISHED', 'OUT_OF_STOCK', 'ARCHIVED') DEFAULT 'PUBLISHED',
    listed_on_gem BOOLEAN DEFAULT TRUE,
    listed_on_ondc BOOLEAN DEFAULT TRUE,
    listed_on_tribes_india BOOLEAN DEFAULT FALSE,
    
    -- AI & Voice Cataloging Metadata
    voice_language VARCHAR(50),
    voice_transcript_original TEXT,
    ai_enhanced_image BOOLEAN DEFAULT TRUE,
    ai_confidence_score DECIMAL(4, 2) DEFAULT 0.95,
    
    view_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (artisan_id) REFERENCES artisans(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT,
    INDEX idx_product_category (category_id),
    INDEX idx_product_artisan (artisan_id),
    INDEX idx_product_status (status)
) ENGINE=InnoDB;

-- 4. Product Images Table
CREATE TABLE IF NOT EXISTS product_images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    original_raw_url VARCHAR(500) NOT NULL,
    enhanced_studio_url VARCHAR(500) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    lighting_adjusted BOOLEAN DEFAULT TRUE,
    background_removed BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 5. AI Price Recommendations History
CREATE TABLE IF NOT EXISTS price_recommendations (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT,
    raw_material_cost DECIMAL(10, 2) NOT NULL,
    crafting_hours INT NOT NULL,
    hourly_rate DECIMAL(10, 2) NOT NULL,
    competitor_avg_price DECIMAL(10, 2),
    market_demand_index DECIMAL(4, 2), -- 0.0 to 2.0
    suggested_min_price DECIMAL(10, 2) NOT NULL,
    suggested_ideal_price DECIMAL(10, 2) NOT NULL,
    suggested_premium_price DECIMAL(10, 2) NOT NULL,
    artisan_accepted_price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- 6. Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(50) NOT NULL UNIQUE,
    buyer_name VARCHAR(150) NOT NULL,
    buyer_email VARCHAR(100) NOT NULL,
    buyer_phone VARCHAR(20) NOT NULL,
    shipping_address TEXT NOT NULL,
    order_type ENUM('RETAIL_B2C', 'BULK_B2B', 'GEM_GOVERNMENT') DEFAULT 'RETAIL_B2C',
    total_amount DECIMAL(12, 2) NOT NULL,
    artisan_payout_amount DECIMAL(12, 2) NOT NULL, -- Direct payout to artisan (85-90%)
    platform_fee DECIMAL(10, 2) NOT NULL,
    payment_status ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED') DEFAULT 'PAID',
    order_status ENUM('PLACED', 'IN_CRAFTING', 'SHIPPED', 'DELIVERED', 'CANCELLED') DEFAULT 'PLACED',
    tracking_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 7. Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
) ENGINE=InnoDB;

-- 8. Regional Market Trends Table
CREATE TABLE IF NOT EXISTS market_trends (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    category_id BIGINT NOT NULL,
    season_name VARCHAR(100) NOT NULL, -- e.g. Diwali Festive Season, Summer Home Decor
    demand_growth_pct DECIMAL(5, 2) DEFAULT 0.00,
    top_search_keywords VARCHAR(500),
    suggested_craft_focus TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB;
