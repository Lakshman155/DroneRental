package com.drone.drone.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String fname;
	private String lname;
	private String email;
	private String phone;
	private String pswd;
	private String cnfpswd;
	
	
	

	





	public String getFname() {
		return fname;
	}





	public void setFname(String fname) {
		this.fname = fname;
	}





	public String getLname() {
		return lname;
	}





	public void setLname(String lname) {
		this.lname = lname;
	}





	public String getEmail() {
		return email;
	}





	public void setEmail(String email) {
		this.email = email;
	}





	public String getPhone() {
		return phone;
	}





	public void setPhone(String phone) {
		this.phone = phone;
	}





	public String getPswd() {
		return pswd;
	}





	public void setPswd(String pswd) {
		this.pswd = pswd;
	}





	public String getCnfpswd() {
		return cnfpswd;
	}





	public void setCnfpswd(String cnfpswd) {
		this.cnfpswd = cnfpswd;
	}





	public User(String fname, String lname, String email, String phone, String pswd, String cnfpswd) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.phone = phone;
		this.pswd = pswd;
		this.cnfpswd = cnfpswd;
	}




	public User() {
		
		
		
		// TODO Auto-generated constructor stub
	}

}
