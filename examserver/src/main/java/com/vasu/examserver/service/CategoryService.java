package com.vasu.examserver.service;

import java.util.List;

import com.vasu.examserver.entity.Category;

public interface CategoryService {
public Category addCategory(Category category);
public Category updateCategory(Category category);
public List<Category> getCategories();
public Category getCategory(Long id);
public void deleteCategory(Long id);
}
