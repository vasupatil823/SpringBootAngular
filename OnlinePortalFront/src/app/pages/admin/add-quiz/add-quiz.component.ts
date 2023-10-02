import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories:any=[]
  quizes={
    title: '',
description : '',
maxMarks: '',
numberOfQuestion: '',
isActive: false,
category:{
  cid:''
}
  }
  constructor(private categoryService:CategoryService, private snake:MatSnackBar, private quizService: QuizService) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe((data)=>
    {
//sucesss
this.categories=data
    },(error)=>
    {
      Swal.fire('Error !!','Error in laoding data from server','error')
    })
  }
addQuiz(){
  if(this.quizes.title=='' || this.quizes.title==null){
    this.snake.open('Title required','',{
      duration:3000
    })
    return
  }
  this.quizService.addQuizezes(this.quizes).subscribe((data)=>{
    Swal.fire('Success !!','Quiz Added Successfully','success')
    this.quizes={
      title: '',
  description : '',
  maxMarks: '',
  numberOfQuestion: '',
  isActive: true,
  category:{
    cid:''
  }
    }
  },
  (error)=>{
    Swal.fire('Failed !!','Problem Occured while Adding Quiz','error')
  })
}
}
