package com.Medicare.entity.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ordered {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private Long orderid;
private String productnameoforder;
private String usernameoforder;
private Long orderprice;
public Ordered() {
	super();
	// TODO Auto-generated constructor stub
}
public Ordered(Long orderid, String productnameoforder, String usernameoforder, Long orderprice) {
	super();
	this.orderid = orderid;
	this.productnameoforder = productnameoforder;
	this.usernameoforder = usernameoforder;
	this.orderprice = orderprice;
}
public Long getOrderid() {
	return orderid;
}
public void setOrderid(Long orderid) {
	this.orderid = orderid;
}
public String getProductnameoforder() {
	return productnameoforder;
}
public void setProductnameoforder(String productnameoforder) {
	this.productnameoforder = productnameoforder;
}
public String getUsernameoforder() {
	return usernameoforder;
}
public void setUsernameoforder(String usernameoforder) {
	this.usernameoforder = usernameoforder;
}
public Long getOrderprice() {
	return orderprice;
}
public void setOrderprice(Long orderprice) {
	this.orderprice = orderprice;
}

}
