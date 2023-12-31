import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
catId: any;
quizzes:any;
  constructor(
    private route : ActivatedRoute, private quizService:QuizService 
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log(params);
this.catId=params['catid'];
if(this.catId==0){
  this.quizService.loadActiveQuizzes().subscribe(
    (data:any)=>{
this.quizzes=data;
console.log(this.quizzes);
    },
    (error)=>{
console.log(error);
alert("error in loading all quizzes");
    }
    )
}
else{
  console.log("Load specific quiz");
  this.quizService.loadActiveQuizzesOfCategory(this.catId).subscribe(
    (data:any)=>{
this.quizzes=data;
console.log(this.quizzes);
    },
    (error)=>{
console.log(error);
alert("error in loading all quizzes");
    }
    )
}
    });
    
  }

}
