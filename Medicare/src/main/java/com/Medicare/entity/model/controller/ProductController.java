package com.Medicare.entity.model.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Medicare.entity.model.Product;
import com.Medicare.entity.model.services.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
@Autowired
private ProductService service;
@PostMapping("/")
public Product createproductincontroller(@RequestBody Product product) {
	Long discount=product.getDiscount();
	Long price=product.getPrice();
	Long oprice=(long) (price-(price*discount*0.01));
	product.setDiscountedprice(oprice);
	return this.service.createproduct(product);
}
@PutMapping("/{productid}")
public Product updateproductincontroller(@PathVariable("productid") Long productid,@RequestBody Product product) {
	product.setProductid(productid);
	Long discount=product.getDiscount();
	Long price=product.getPrice();
	Long oprice=(long) (price-(price*discount*0.01));
	product.setDiscountedprice(oprice);
	return this.service.updateproduct(product);
}
@GetMapping("/")
public Set<Product> getallproductincontroller(){
	return this.service.getallproduct();
}
@GetMapping("/{productid}")
public Product getproductbyidcontroller(@PathVariable("productid") Long productid) {
	return this.service.getproductbyid(productid);
}
@DeleteMapping("{productid}")
public void deletproductbyidcontroller(@PathVariable("productid") Long productid)
{
	this.service.deleteproductbyid(productid);
}
@GetMapping("/active")
public List<Product> getallactiveproduct(){
	
	return this.service.getactiveproduct();
}
}
