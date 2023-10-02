package com.vasu.examserver.serviceImpl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vasu.examserver.entity.Questions;
import com.vasu.examserver.entity.Quiz;
import com.vasu.examserver.repo.QuestionsRepository;
import com.vasu.examserver.service.QuestionsService;

@Service
public class QuestionsServiceImpl implements QuestionsService {

	@Autowired
	private QuestionsRepository queRepo;
	@Override
	public Questions addQuestions(Questions question) {
		return this.queRepo.save(question);
	}

	@Override
	public Questions updateQuestions(Questions question) {
		return this.queRepo.save(question);
	}

	@Override
	public List<Questions> getQuestions() {
		return this.queRepo.findAll();
	}

	@Override
	public Questions getQuestion(Long id) {
		return this.queRepo.findById(id).get();
	}

	@Override
	public void deleteQuestion(Long id) {
		this.queRepo.deleteById(id);
		
	}

	@Override
	public List<Questions> getQuestionsOfQuiz(Quiz quiz) {
		return this.queRepo.findByQuiz(quiz);
	}

}
