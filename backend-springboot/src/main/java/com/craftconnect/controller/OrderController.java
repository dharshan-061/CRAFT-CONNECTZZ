package com.craftconnect.controller;

import com.craftconnect.dto.ApiResponse;
import com.craftconnect.dto.OrderRequestDTO;
import com.craftconnect.model.Order;
import com.craftconnect.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Order>>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(ApiResponse.ok(orders, "Fetched orders"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Order>> getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id)
                .map(o -> ResponseEntity.ok(ApiResponse.ok(o, "Order found")))
                .orElseGet(() -> ResponseEntity.status(404).body(ApiResponse.error("Order not found with ID: " + id)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Order>> createOrder(@Valid @RequestBody OrderRequestDTO dto) {
        try {
            Order order = orderService.placeOrder(dto);
            return ResponseEntity.status(201).body(ApiResponse.ok(order, "Order placed successfully! Payout assigned directly to artisan."));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
}
