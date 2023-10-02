package com.vasu.examserver.service;

import java.util.List;

import com.vasu.examserver.entity.Category;
import com.vasu.examserver.entity.Quiz;

public interface QuizService {
	public Quiz addQuizes(Quiz quizes);
	public Quiz updateQuizes(Quiz quiz);
	public List<Quiz> getQuizes();
	public Quiz getQuiz(Long id);
	public void deleteQuiz(Long id);
	public List<Quiz> getQuizesOfCategory(Category category);
	public List<Quiz> findByIsActive(Boolean isactive);
	public List<Quiz> findByCategoryAndIsActive(Category category);
}
