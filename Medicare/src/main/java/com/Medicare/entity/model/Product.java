package com.Medicare.entity.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private Long productid;
private String productname;
private String productdescription;
private Long price;
private Long discount;
private Long discountedprice;
private boolean enable=false;
public Product() {
	super();
	
}
public Product(Long productid, String productname, String productdescription, Long price, Long discount,
		Long discountedprice, boolean enable) {
	super();
	this.productid = productid;
	this.productname = productname;
	this.productdescription = productdescription;
	this.price = price;
	this.discount = discount;
	this.discountedprice = discountedprice;
	this.enable = enable;
}
public Long getProductid() {
	return productid;
}
public void setProductid(Long productid) {
	this.productid = productid;
}
public String getProductname() {
	return productname;
}
public void setProductname(String productname) {
	this.productname = productname;
}
public String getProductdescription() {
	return productdescription;
}
public void setProductdescription(String productdescription) {
	this.productdescription = productdescription;
}
public Long getPrice() {
	return price;
}
public void setPrice(Long price) {
	this.price = price;
}
public Long getDiscount() {
	return discount;
}
public void setDiscount(Long discount) {
	this.discount = discount;
}
public Long getDiscountedprice() {
	return discountedprice;
}
public void setDiscountedprice(Long discountedprice) {
	this.discountedprice = discountedprice;
}
public boolean isEnable() {
	return enable;
}
public void setEnable(boolean enable) {
	this.enable = enable;
}

}
