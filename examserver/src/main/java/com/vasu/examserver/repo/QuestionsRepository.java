package com.vasu.examserver.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vasu.examserver.entity.Questions;
import com.vasu.examserver.entity.Quiz;

public interface QuestionsRepository extends JpaRepository<Questions, Long> {
	
	public List<Questions> findByQuiz(Quiz quiz);

}
