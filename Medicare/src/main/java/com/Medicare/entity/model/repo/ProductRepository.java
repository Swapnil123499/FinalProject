package com.Medicare.entity.model.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Medicare.entity.model.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {

	public List<Product> findByEnable(Boolean b);
}
