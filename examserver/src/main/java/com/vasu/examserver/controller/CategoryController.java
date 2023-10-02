package com.vasu.examserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vasu.examserver.entity.Category;
import com.vasu.examserver.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;

	//add category api
	@PostMapping("/")
	public ResponseEntity<Category> addCategory(@RequestBody Category category){
		Category categoryAdded = this.categoryService.addCategory(category);
		return ResponseEntity.ok(categoryAdded);
}
	//get category api
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId") Long categoryId) {
		return this.categoryService.getCategory(categoryId);
	}
	//get all categories api
	@GetMapping("/")
	public ResponseEntity<List<Category>> getAllCategories(){
		return ResponseEntity.ok(this.categoryService.getCategories());
	}
	
	//update categrgory api
	@PutMapping("/update")
	public ResponseEntity<?> updateCategory(@RequestBody Category category){
		Category categoryUpdated = this.categoryService.addCategory(category);
		return ResponseEntity.ok(categoryUpdated);
}
	
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") Long categoryId){
		this.categoryService.deleteCategory(categoryId);
}
}
