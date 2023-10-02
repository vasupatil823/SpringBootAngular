package com.vasu.examserver.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vasu.examserver.entity.Category;
import com.vasu.examserver.repo.CategoryRepository;
import com.vasu.examserver.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryRepository categoryRepo;

	@Override
	public Category addCategory(Category category) {
		return this.categoryRepo.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return this.categoryRepo.save(category);
	}

	@Override
	public List<Category> getCategories() {
		return this.categoryRepo.findAll();
	}

	@Override
	public Category getCategory(Long id) {
		return this.categoryRepo.findById(id).get();
	}

	@Override
	public void deleteCategory(Long id) {
		this.categoryRepo.deleteById(id);
	}

}
