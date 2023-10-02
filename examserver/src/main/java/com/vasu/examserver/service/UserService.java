package com.vasu.examserver.service;

import java.util.Set;

import com.vasu.examserver.entity.User;
import com.vasu.examserver.entity.UserRole;

public interface UserService {
//create user 
	public User createUser(User user, Set<UserRole> userRole) throws Exception;
	public User findByUsername(String username);
	public void deleteById(Long id);
}
