package com.drone.drone.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drone.drone.models.User;
import com.drone.drone.repos.UserRepo;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/users")

public class UserController {
	@Autowired
	 UserRepo userrepo;
	
	@GetMapping("/getusers")
	public List<User> getusers() {
		
		
		
		
		return userrepo.findAll();
		
	}
	
	@GetMapping("/getuser")
	public User Login(@RequestBody User user) {
		
		
		List<User> templist=userrepo.findAll();
		
		boolean found=false;
		
			for (User usr:templist) {
				System.out.println(user.getEmail()+user.getPswd());
				
				if(usr.getEmail().equals(user.getEmail())) {
					
					if (usr.getPswd().equals(user.getPswd())) {
						found=true;
						
						
						
						
						return usr;
						
								
					}
					
				}
				
				
				
			}
			
			
			
			return null;
	}
	
	@PostMapping("/adduser")
	public ResponseEntity<User> addUser(@RequestBody User user){
		
		System.out.println("Added the user called");
		return new ResponseEntity<> (userrepo.save(user),HttpStatus.CREATED);
		
		
		
	}
	

}
