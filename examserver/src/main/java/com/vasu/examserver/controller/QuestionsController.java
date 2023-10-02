package com.vasu.examserver.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vasu.examserver.entity.Questions;
import com.vasu.examserver.entity.Quiz;
import com.vasu.examserver.service.QuestionsService;
import com.vasu.examserver.service.QuizService;

@RestController
@RequestMapping("/questions")
@CrossOrigin("*")
public class QuestionsController {
	
	@Autowired
	private QuizService quizService;
	
	@Autowired
	private QuestionsService queService;
	
	@PostMapping("/")
	public ResponseEntity<Questions> addQuestions(@RequestBody Questions questions) {
		Questions addedQuestions = this.queService.addQuestions(questions);
		return ResponseEntity.ok(addedQuestions);
	}

	@GetMapping("/")
	public List<Questions> getAllQuestions(){
		return this.queService.getQuestions();
	}
	
	@PutMapping("/")
	public ResponseEntity<Questions> updateQuestions(@RequestBody Questions questions) {
		return ResponseEntity.ok(this.queService.updateQuestions(questions));
	}
	@GetMapping("/quiz/{quizid}")
	public ResponseEntity<List<Questions>> getQuestionOfQuiz(@PathVariable("quizid") Long quizId) {
		/*
		 * Quiz quiz = new Quiz(); quiz.setQid(quizId); return
		 * ResponseEntity.ok(this.queService.getQuestionsOfQuiz(quiz));
		 */		
		Quiz quiz = this.quizService.getQuiz(quizId);
		Set<Questions> questionsList = quiz.getQuestions();
		List quesList = new ArrayList<>(questionsList);
		if(questionsList.size() > Integer.valueOf(quiz.getNumberOfQuestion())) {
			quesList = quesList.subList(0, Integer.valueOf(quiz.getNumberOfQuestion()+1));
		}
		Collections.shuffle(quesList);
		return ResponseEntity.ok(quesList);
	}
	@GetMapping("/quiz/all/{quizid}")
	public ResponseEntity<List<Questions>> getAllQuestionOfQuiz(@PathVariable("quizid") Long quizId) {
		
		  Quiz quiz = new Quiz(); 
		  quiz.setQid(quizId); 
		  return ResponseEntity.ok(this.queService.getQuestionsOfQuiz(quiz));
		 		
	}
	@GetMapping("/{questionid}")
	public Questions getSingleQuestion(@PathVariable("questionid") Long questionId) {
		System.out.println("getting question with questin id : " + questionId);
		return this.queService.getQuestion(questionId);
	}
	@DeleteMapping("/{questionid}")
	public void DeleteQuestion(@PathVariable("questionid") Long questionId) {
		System.out.println("Deleting question with questin id : " + questionId);
		this.queService.deleteQuestion(questionId);
	}
}
