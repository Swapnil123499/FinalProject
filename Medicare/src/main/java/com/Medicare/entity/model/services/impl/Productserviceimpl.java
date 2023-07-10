package com.Medicare.entity.model.services.impl;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Medicare.entity.model.Product;
import com.Medicare.entity.model.repo.ProductRepository;
import com.Medicare.entity.model.services.ProductService;
@Service
public class Productserviceimpl implements ProductService {
@Autowired	
private ProductRepository repository;
	@Override
	public Product createproduct(Product product) {
		
		return this.repository.save(product);
	}

	@Override
	public Product updateproduct(Product product) {
		
		return this.repository.save(product);
	}

	@Override
	public Product getproductbyid(Long productid) {
		
		return this.repository.findById(productid).get();
	}

	@Override
	public Set<Product> getallproduct() {
		
		return new LinkedHashSet<>(this.repository.findAll());
	}

	@Override
	public void deleteproductbyid(Long productid) {
		this.repository.deleteById(productid);
		
	}

	@Override
	public List<Product> getactiveproduct() {
		
		return this.repository.findByEnable(true);
	}

}
