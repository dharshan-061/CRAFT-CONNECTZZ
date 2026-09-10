package com.craftconnect.repository;

import com.craftconnect.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByOrderNumber(String orderNumber);
    List<Order> findByOrderStatus(Order.OrderStatus status);
    List<Order> findByOrderType(Order.OrderType orderType);
}
