package com.Medicare.service;

import java.util.Set;

import com.Medicare.entity.User;
import com.Medicare.entity.UserRole;





public interface UserService {

	//creating user
	public User createUser(User user, Set<UserRole> userRole) throws Exception;
	
	//get user by username
	
	 public User getUser(String username);
	 
	 //delete user by id
	 
	 public void deleteuserbyid(Long id);
	
}
