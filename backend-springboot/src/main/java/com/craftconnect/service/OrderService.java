package com.craftconnect.service;

import com.craftconnect.dto.OrderRequestDTO;
import com.craftconnect.model.Artisan;
import com.craftconnect.model.Order;
import com.craftconnect.model.OrderItem;
import com.craftconnect.model.Product;
import com.craftconnect.repository.ArtisanRepository;
import com.craftconnect.repository.OrderRepository;
import com.craftconnect.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final ArtisanRepository artisanRepository;

    public OrderService(OrderRepository orderRepository,
                        ProductRepository productRepository,
                        ArtisanRepository artisanRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.artisanRepository = artisanRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    @Transactional
    public Order placeOrder(OrderRequestDTO dto) {
        String orderNum = "ORD-2026-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        BigDecimal total = BigDecimal.ZERO;
        Order.OrderType orderType = Order.OrderType.RETAIL_B2C;
        try {
            orderType = Order.OrderType.valueOf(dto.getOrderType());
        } catch (Exception ignored) {}

        Order order = Order.builder()
                .orderNumber(orderNum)
                .buyerName(dto.getBuyerName())
                .buyerEmail(dto.getBuyerEmail())
                .buyerPhone(dto.getBuyerPhone())
                .shippingAddress(dto.getShippingAddress())
                .orderType(orderType)
                .paymentStatus(Order.PaymentStatus.PAID)
                .orderStatus(Order.OrderStatus.PLACED)
                .trackingId("INDPOST-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase())
                .totalAmount(BigDecimal.ZERO)
                .artisanPayoutAmount(BigDecimal.ZERO)
                .platformFee(BigDecimal.ZERO)
                .build();

        for (OrderRequestDTO.OrderItemDTO itemDTO : dto.getItems()) {
            Product product = productRepository.findById(itemDTO.getProductId())
                    .orElseThrow(() -> new IllegalArgumentException("Product not found ID: " + itemDTO.getProductId()));

            int qty = itemDTO.getQuantity() != null && itemDTO.getQuantity() > 0 ? itemDTO.getQuantity() : 1;
            BigDecimal unitPrice = itemDTO.getUnitPrice() != null ? itemDTO.getUnitPrice() : product.getFinalPrice();
            BigDecimal subtotal = unitPrice.multiply(BigDecimal.valueOf(qty));

            total = total.add(subtotal);

            OrderItem item = OrderItem.builder()
                    .order(order)
                    .product(product)
                    .quantity(qty)
                    .unitPrice(unitPrice)
                    .subtotal(subtotal)
                    .build();

            order.getItems().add(item);

            // Update product stock and artisan revenue
            if (product.getStockQuantity() != null && product.getStockQuantity() >= qty) {
                product.setStockQuantity(product.getStockQuantity() - qty);
            }
            productRepository.save(product);

            Artisan artisan = product.getArtisan();
            BigDecimal artisanShare = subtotal.multiply(BigDecimal.valueOf(0.88)).setScale(2, RoundingMode.HALF_UP);
            artisan.setTotalRevenue(artisan.getTotalRevenue().add(artisanShare));
            artisanRepository.save(artisan);
        }

        order.setTotalAmount(total);
        BigDecimal artisanPayout = total.multiply(BigDecimal.valueOf(0.88)).setScale(2, RoundingMode.HALF_UP);
        BigDecimal fee = total.subtract(artisanPayout);

        order.setArtisanPayoutAmount(artisanPayout);
        order.setPlatformFee(fee);

        return orderRepository.save(order);
    }
}
