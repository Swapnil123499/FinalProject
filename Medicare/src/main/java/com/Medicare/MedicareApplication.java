package com.Medicare;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.Medicare.entity.Role;
import com.Medicare.entity.User;
import com.Medicare.entity.UserRole;
import com.Medicare.service.UserService;

@SpringBootApplication
public class MedicareApplication implements CommandLineRunner {
	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(MedicareApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		User user = new User();
//		
//		user.setFirstName("swapnil");
//		user.setLastName("jounjalkar");
//		user.setEmail("jounjalkarswapnil@gmail.com");
//		user.setUsername("swapniljounjalkar");
//		user.setPassword(this .bCryptPasswordEncoder.encode("abc"));
//		user.setProfile("default.png");
//		
//	    
//		
//		Role role1= new Role();
//		
//		role1.setRoleId(44L);
//		role1.setRoleName("Admin");
//		
//		Set<UserRole> userRoleSet = new HashSet<>();
//		
//		UserRole userRole=new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		
//		userRoleSet.add(userRole);
//		
//	//	
//		User user1 =this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUsername());
		
	}

}
