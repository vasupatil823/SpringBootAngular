package com.vasu.examserver.service;

import java.util.List;

import com.vasu.examserver.entity.Questions;
import com.vasu.examserver.entity.Quiz;

public interface QuestionsService {
	public Questions addQuestions(Questions question);
	public Questions updateQuestions(Questions question);
	public List<Questions> getQuestions();
	public Questions getQuestion(Long id);
	public void deleteQuestion(Long id);
	public List<Questions> getQuestionsOfQuiz(Quiz quiz); 
}
