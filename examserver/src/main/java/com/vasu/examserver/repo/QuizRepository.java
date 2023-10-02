package com.vasu.examserver.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vasu.examserver.entity.Category;
import com.vasu.examserver.entity.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
public List<Quiz> findByCategory(Category category);
public List<Quiz> findByIsActive(Boolean isactive);
public List<Quiz> findByCategoryAndIsActive(Category category,Boolean isactive);
}
