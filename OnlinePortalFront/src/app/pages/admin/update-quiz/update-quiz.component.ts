import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
qId=0;
quiz:any;
categories:any;
  constructor(private route:ActivatedRoute, private quizService:QuizService, private snake:MatSnackBar,private categoryService:CategoryService,
    private router:Router) { }

  ngOnInit(): void {
    this.qId=this.route.snapshot.params['qid'];
    this.quizService.getSingleQuiz(this.qId).subscribe((data:any)=>
    {
      this.quiz=data;
    },
    (error)=>{
      console.error(error)
    })
    this.categoryService.categories().subscribe((data)=>
    {
this.categories=data;
    },(error)=>
    {
      console.error('Error while loading category data')
    })
  }
updateQuiz(){
  this.quizService.updateQuiz(this.quiz).subscribe((data)=>{
    Swal.fire('Success !!','Quiz Updated Successfully','success').then((e)=>{
      this.router.navigate(['/admin-dashboard/view-quiz'])
    })
  },(error)=>
  {
    Swal.fire('Failed','Problem Occured while Updating Quiz','error')
  })
}
}
