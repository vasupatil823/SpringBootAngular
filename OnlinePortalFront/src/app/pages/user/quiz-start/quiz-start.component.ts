import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {
quizid:any;
questions:any;
marksGot:any;
correctAns:any;
attempted:any;
  constructor(private locationStrategy : LocationStrategy, private route:ActivatedRoute, private questionService : QuestionsService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.quizid=this.route.snapshot.params['qid'];
    this.loadQuestions();
  }
preventBackButton(){
  history.pushState(null,'',location.href);
  this.locationStrategy.onPopState(()=>{
    history.pushState(null,'',location.href)
  });
}
loadQuestions(){
  this.questionService.getQuestionsOfQuiz(this.quizid).subscribe(
    (data:any)=>{
      this.questions=data;
      this.questions.forEach((q:any)=>{
        q['givenAnswer']='';
      })
    },
    (error)=>{
      Swal.fire("Error","Error Occured while Loading questions",'error');
    }
  )
}
}
