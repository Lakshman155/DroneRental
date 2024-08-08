package com.drone.drone.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.drone.drone.models.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	
	

}
