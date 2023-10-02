package com.vasu.examserver.controller;

import java.util.List;

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

import com.vasu.examserver.entity.Category;
import com.vasu.examserver.entity.Quiz;
import com.vasu.examserver.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
    @PostMapping("/")
	public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
	Quiz addedQuiz = this.quizService.addQuizes(quiz);
	return ResponseEntity.ok(addedQuiz);
}
    @PutMapping("/")
	public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz) {
	Quiz updatedQuiz = this.quizService.updateQuizes(quiz);
	return ResponseEntity.ok(updatedQuiz); 
}
    @GetMapping("/")
    public List<Quiz> getAllQuizes() { 
    	return this.quizService.getQuizes();
    }
    
    @GetMapping("/{quizId}")
    public Quiz getQuiz(@PathVariable("quizId") Long id) {
    	return this.quizService.getQuiz(id);
    }
    
    @DeleteMapping("/{quizId}")
    public void deleteQuiz(@PathVariable("quizId") Long id) {
    	this.quizService.deleteQuiz(id);
    }
    
    @GetMapping("/category/{cid}")
    public List<Quiz> getQuizByCategoryId(@PathVariable("cid") Long cid) {
    	Category category = new Category();
    	category.setCid(cid);
    	return this.quizService.getQuizesOfCategory(category);
    }
    //get active quizzes
    @GetMapping("/activequizzes")
    public List<Quiz> getActiveQuizzes() {
    	return this.quizService.findByIsActive(true);
    }
    
  //get active quizzes
    @GetMapping("/activequizzesofcategory/{cid}")
    public List<Quiz> getActiveQuizzesofCategory(@PathVariable("cid") Long cid) {
    	Category category = new Category();
    	category.setCid(cid);
    	return this.quizService.findByCategoryAndIsActive(category);
    }
}
