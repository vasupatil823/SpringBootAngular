package com.vasu.examserver.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vasu.examserver.entity.Role;
import com.vasu.examserver.entity.User;
import com.vasu.examserver.entity.UserRole;
import com.vasu.examserver.exception.UserFoundException;
import com.vasu.examserver.exception.UserNotFoundException;
import com.vasu.examserver.service.UserService;


@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	BCryptPasswordEncoder passwordEncoder;

	// creating user
	@PostMapping("/")
	public User createNewUser(@RequestBody User user) throws Exception {
		user.setProfile("default.png");
		//encode th password with bCrypt
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		Set<UserRole> roles = new HashSet<>();
		Role role = new Role();
		role.setRoleId(1L);
		role.setRole("NORMAL");

		UserRole userRole = new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		roles.add(userRole);
		return userService.createUser(user, roles);
	}

     @GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
     return userService.findByUsername(username);
	}
     @DeleteMapping("/userId")
     public void deleteUser(@PathVariable("userId") Long userId) {
    	 userService.deleteById(userId);
     }
}
