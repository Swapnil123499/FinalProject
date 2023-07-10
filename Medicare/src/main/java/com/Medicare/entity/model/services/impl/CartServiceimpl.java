package com.Medicare.entity.model.services.impl;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Medicare.entity.model.Cart;
import com.Medicare.entity.model.repo.CartRepository;
import com.Medicare.entity.model.services.CartService;
@Service
public class CartServiceimpl implements CartService {
@Autowired
private CartRepository repository;
	@Override
	public Cart creatcart(Cart cart) {
		
		return this.repository.save(cart);
	}

	@Override
	public Cart updatecart(Cart cart) {
		
		return this.repository.save(cart);
	}

	@Override
	public void deletecart(Long cartid) {
		this.repository.deleteById(cartid);

	}

	@Override
	public Cart getcartbyid(Long cartid) {
		
		return this.repository.findById(cartid).get();
	}

	@Override
	public Set<Cart> getallcart() {
		
		return new LinkedHashSet<> (this.repository.findAll());
	}

	@Override
	public List<Cart> getallusercart(String usernameofcart) {
		
		return this.repository.findByUsernameofcart(usernameofcart);
	}

	@Override
	public void deletedallcartbyuser(String usernameofcart) {
		   List<Cart> cartdeletebyitsusername= this.repository.findByUsernameofcart(usernameofcart);
		  this.repository.deleteAll(cartdeletebyitsusername);
	}

}
