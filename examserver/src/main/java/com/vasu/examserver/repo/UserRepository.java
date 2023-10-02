package com.vasu.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vasu.examserver.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public User findByUsername(String username);
	
}
