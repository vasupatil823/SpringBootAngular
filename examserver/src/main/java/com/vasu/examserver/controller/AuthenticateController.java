package com.vasu.examserver.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vasu.examserver.config.JwtUtil;
import com.vasu.examserver.entity.JwtRequest;
import com.vasu.examserver.entity.JwtResponse;
import com.vasu.examserver.entity.User;
import com.vasu.examserver.exception.UserNotFoundException;
import com.vasu.examserver.serviceImpl.UserDetailServiceImpl;

@RestController
public class AuthenticateController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserDetailServiceImpl userDetailService;

	@Autowired
	private JwtUtil jwtUtil;

	// generate token api
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		try {
			authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
		} catch (UserNotFoundException unfe) {
			throw new Exception("User Not found");
		}
		// user authenticated sucessfully

		UserDetails userDetails = this.userDetailService.loadUserByUsername(jwtRequest.getUsername());
		String token = this.jwtUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	private void authenticate(String username, String password) throws Exception {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException de) {
			throw new Exception("USER DISABLED" + de.getMessage());
		} catch (BadCredentialsException bce) {
			throw new Exception("BAD CREDENTIAL" + bce.getMessage());
		}
	}
//return the details of curent loggen in user 
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		return ((User) this.userDetailService.loadUserByUsername(principal.getName()));
	}
}
