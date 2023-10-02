import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  category={
    title:'',
    description:''
  }

  constructor(private categoryService: CategoryService, private snake:MatSnackBar) { }

  ngOnInit(): void {
  }
  addCategory(){
    if(this.category.title.trim()=='' || this.category.title.trim()==null){
      this.snake.open('Title Required','',{
        duration:3000
      });
      return;
    }
    else if(this.category.description.trim()=='' || this.category.description.trim()==null){
      this.snake.open('Description Required','',{
        duration:3000
      });
      return;
  }
    this.categoryService.addCategories(this.category).subscribe((data:any)=>{
      this.category.title=''
      this.category.description=''
      Swal.fire('Success !!','Category Added Successfully','success')
    },
    (error)=>{
      Swal.fire('Failed','Problem Occured While Adding Category','error')
    }
    );

  

    }
  }
