package com.Medicare.entity.model.services;

import java.util.List;
import java.util.Set;

import com.Medicare.entity.model.Cart;

public interface CartService {
public Cart creatcart(Cart cart);
public Cart updatecart(Cart cart);
public void deletecart(Long cartid);
public Cart getcartbyid(Long cartid);
public Set<Cart> getallcart();
public List<Cart> getallusercart(String usernameofcart);
public void deletedallcartbyuser(String usernameofcart);
}
