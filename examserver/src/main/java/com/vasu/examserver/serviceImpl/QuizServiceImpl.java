package com.vasu.examserver.serviceImpl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vasu.examserver.entity.Category;
import com.vasu.examserver.entity.Quiz;
import com.vasu.examserver.repo.QuizRepository;
import com.vasu.examserver.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService{

	@Autowired
	private QuizRepository quizRepo;
	@Override
	public Quiz addQuizes(Quiz quizes) {
		return this.quizRepo.save(quizes);
	}

	@Override
	public Quiz updateQuizes(Quiz quiz) {
		return this.quizRepo.save(quiz);
	}

	@Override
	public List<Quiz> getQuizes() {
		return this.quizRepo.findAll();
	}

	@Override
	public Quiz getQuiz(Long id) {
		return this.quizRepo.findById(id).get();
	}

	@Override
	public void deleteQuiz(Long id) {
		this.quizRepo.deleteById(id);
	}

	@Override
	public List<Quiz> getQuizesOfCategory(Category category) {
		return this.quizRepo.findByCategory(category);
	}

	@Override
	public List<Quiz> findByIsActive(Boolean isactive) {
		return this.quizRepo.findByIsActive(isactive);
	}

	@Override
	public List<Quiz> findByCategoryAndIsActive(Category category) {
		return this.quizRepo.findByCategoryAndIsActive(category, true);
	}

}
