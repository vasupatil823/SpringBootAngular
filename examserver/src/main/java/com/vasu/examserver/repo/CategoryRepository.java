package com.vasu.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vasu.examserver.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
