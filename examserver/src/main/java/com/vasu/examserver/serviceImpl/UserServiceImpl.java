package com.vasu.examserver.serviceImpl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vasu.examserver.entity.User;
import com.vasu.examserver.entity.UserRole;
import com.vasu.examserver.exception.UserFoundException;
import com.vasu.examserver.repo.RoleRepository;
import com.vasu.examserver.repo.UserRepository;
import com.vasu.examserver.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	@Autowired
	private RoleRepository roleRepo;

	@Override
	public User createUser(User user, Set<UserRole> userRole) throws Exception {
		User createdUser = null;
		User username = userRepo.findByUsername(user.getUsername());
		if(username!=null) {
			System.out.println("User is Allready Avalable !!");
		 throw new UserFoundException("User is Allready Avalable !!");
		}
		else {
			for(UserRole usrRole : userRole) {
				roleRepo.save(usrRole.getRole());
			}
			user.getUserRoles().addAll(userRole);
			createdUser = userRepo.save(user);
		}
		return createdUser;
	}

	@Override
	public User findByUsername(String username) {
		return userRepo.findByUsername(username);
	}
	@Override
	public void deleteById(Long id) {
		userRepo.deleteById(id);
	}

}
