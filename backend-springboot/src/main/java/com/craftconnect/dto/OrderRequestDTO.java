package com.craftconnect.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderRequestDTO {

    @NotBlank(message = "Buyer name is required")
    private String buyerName;

    @NotBlank(message = "Buyer email is required")
    private String buyerEmail;

    @NotBlank(message = "Buyer phone is required")
    private String buyerPhone;

    @NotBlank(message = "Shipping address is required")
    private String shippingAddress;

    @Builder.Default
    private String orderType = "RETAIL_B2C";

    @NotEmpty(message = "Cart cannot be empty")
    private List<OrderItemDTO> items;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class OrderItemDTO {
        private Long productId;
        private Integer quantity;
        private BigDecimal unitPrice;
    }
}
