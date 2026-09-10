package com.craftconnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CraftConnectApplication {

    public static void main(String[] args) {
        SpringApplication.run(CraftConnectApplication.class, args);
        System.out.println("=================================================");
        System.out.println("🚀 CraftConnect Backend Service Started!");
        System.out.println("🌐 Local API: http://localhost:8080/api/products");
        System.out.println("🛠 H2 Console: http://localhost:8080/h2-console");
        System.out.println("=================================================");
    }
}
