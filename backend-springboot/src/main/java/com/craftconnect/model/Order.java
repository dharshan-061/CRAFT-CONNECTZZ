package com.craftconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_number", nullable = false, unique = true, length = 50)
    private String orderNumber;

    @Column(name = "buyer_name", nullable = false, length = 150)
    private String buyerName;

    @Column(name = "buyer_email", nullable = false, length = 100)
    private String buyerEmail;

    @Column(name = "buyer_phone", nullable = false, length = 20)
    private String buyerPhone;

    @Column(name = "shipping_address", nullable = false, columnDefinition = "TEXT")
    private String shippingAddress;

    @Enumerated(EnumType.STRING)
    @Column(name = "order_type")
    @Builder.Default
    private OrderType orderType = OrderType.RETAIL_B2C;

    @Column(name = "total_amount", nullable = false, precision = 12, scale = 2)
    private BigDecimal totalAmount;

    @Column(name = "artisan_payout_amount", nullable = false, precision = 12, scale = 2)
    private BigDecimal artisanPayoutAmount;

    @Column(name = "platform_fee", nullable = false, precision = 10, scale = 2)
    private BigDecimal platformFee;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_status")
    @Builder.Default
    private PaymentStatus paymentStatus = PaymentStatus.PAID;

    @Enumerated(EnumType.STRING)
    @Column(name = "order_status")
    @Builder.Default
    private OrderStatus orderStatus = OrderStatus.PLACED;

    @Column(name = "tracking_id", length = 100)
    private String trackingId;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Builder.Default
    private List<OrderItem> items = new ArrayList<>();

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public enum OrderType {
        RETAIL_B2C, BULK_B2B, GEM_GOVERNMENT
    }

    public enum PaymentStatus {
        PENDING, PAID, FAILED, REFUNDED
    }

    public enum OrderStatus {
        PLACED, IN_CRAFTING, SHIPPED, DELIVERED, CANCELLED
    }
}
