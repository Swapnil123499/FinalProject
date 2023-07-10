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

import com.Medicare.entity.model.Cart;
import com.Medicare.entity.model.services.CartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin("*")
public class CartController {
@Autowired
private CartService service;
@PostMapping("/")
public Cart makecart(@RequestBody Cart cart) {
	return this.service.creatcart(cart);
}
@PutMapping("/{cartid}")
public Cart updatecartcontroller(@PathVariable("cartid") Long cartid,@RequestBody Cart cart)
{     cart.setCartid(cartid);
	return this.service.updatecart(cart);
}
@GetMapping("/")
public Set<Cart> getallcartcontroller(){
	
	return this.service.getallcart();
}
@GetMapping("/{cartid}")
public Cart getcartidcontroller(@PathVariable("cartid") Long cartid)
{
	return this.service.getcartbyid(cartid);
}
@DeleteMapping("/{cartid}")
public void deletecartincontroller(@PathVariable("cartid") Long cartid)
{
	this.service.deletecart(cartid);
}
@GetMapping("/cat/{usernameofcart}")
public List<Cart> getAllCartController(@PathVariable("usernameofcart") String usernameofcart){
	  System.out.println(usernameofcart);
	return this.service.getallusercart(usernameofcart);
}
@DeleteMapping("/deletee/{usernameofcart}")
public void deleteAllByUser(@PathVariable("usernameofcart") String usernameofcart) {
	this.service.deletedallcartbyuser(usernameofcart);
}

}
