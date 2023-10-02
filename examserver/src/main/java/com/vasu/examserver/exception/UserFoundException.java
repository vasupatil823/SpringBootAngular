package com.vasu.examserver.exception;

public class UserFoundException extends Exception {

	public UserFoundException() {
		super("User is Allready Available in database !!");
	}

	public UserFoundException(String msg) throws Exception {
		super(msg);
	}
}
