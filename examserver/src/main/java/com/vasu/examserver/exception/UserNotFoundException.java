package com.vasu.examserver.exception;

public class UserNotFoundException extends Exception{
	
	public UserNotFoundException() {
		super("User is not Available in database !!");
	}
	public UserNotFoundException(String msg) {
		super(msg);
	}

}
