package com.vasu.examserver.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.vasu.examserver.serviceImpl.UserDetailServiceImpl;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailServiceImpl userDetailService;
	
	@Autowired
	private JwtUtil jwtUtils;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final String requestTokenHeader = request.getHeader("Authorization");
		String username=null;
		String Jwttoken=null;
		if(requestTokenHeader!=null && requestTokenHeader.startsWith("vasu ")) {
			Jwttoken=requestTokenHeader.substring(5);
			try {
			username = jwtUtils.extractUsername(Jwttoken);
			}
			catch(ExpiredJwtException eje) {
				System.out.println("JWT Token has expired");
			}
			catch(Exception e) {
		System.out.println("Exception Occured is : "+e.getMessage());		
			}
		}
		else {
			System.out.println("Invalied Token");
		}
		//validate the token
		if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
			final UserDetails userDetails =  userDetailService.loadUserByUsername(username);
		if(this.jwtUtils.validateToken(Jwttoken, userDetails)) {
			//token is valid
			UsernamePasswordAuthenticationToken userNamePasswordAuthentication = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
			userNamePasswordAuthentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
			SecurityContextHolder.getContext().setAuthentication(userNamePasswordAuthentication);
		}
		else {
			System.out.println("Token is not valid");
		}
		
		}
		filterChain.doFilter(request, response);
	}

}
