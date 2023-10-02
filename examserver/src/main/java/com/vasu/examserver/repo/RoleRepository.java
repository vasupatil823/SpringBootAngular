package com.vasu.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vasu.examserver.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

}
