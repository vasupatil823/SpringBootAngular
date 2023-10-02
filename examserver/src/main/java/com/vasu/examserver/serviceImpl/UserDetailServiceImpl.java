package com.vasu.examserver.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.vasu.examserver.entity.User;
import com.vasu.examserver.repo.UserRepository;

@Service
public class UserDetailServiceImpl implements UserDetailsService{

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepo.findByUsername(username);
		if(user==null) {
			System.out.println("User not Found !!");
			throw new UsernameNotFoundException("User is Not Available !!");
		}
		return user;
	}

}
