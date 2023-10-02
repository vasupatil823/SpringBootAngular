package com.vasu.examserver.entity;

import org.springframework.security.core.GrantedAuthority;

public class Authorities implements GrantedAuthority{

	private String autherity;
	
	public Authorities(String autherity) {
		this.autherity=autherity;
	}
	
	@Override
	public String getAuthority() {
		return this.autherity;
	}

}
