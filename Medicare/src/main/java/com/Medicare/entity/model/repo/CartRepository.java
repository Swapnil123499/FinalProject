package com.Medicare.entity.model.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Medicare.entity.model.Cart;


public interface CartRepository extends JpaRepository<Cart, Long> {
  public List<Cart> findByUsernameofcart(String usernameofcart);
  
   void deleteByUsernameofcart(String usernameofcart);
}
