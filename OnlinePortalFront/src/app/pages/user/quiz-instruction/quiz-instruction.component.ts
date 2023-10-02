import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-instruction',
  templateUrl: './quiz-instruction.component.html',
  styleUrls: ['./quiz-instruction.component.css']
})
export class QuizInstructionComponent implements OnInit {
quizid: any;
quiz: any;

  constructor(private route : ActivatedRoute, private quizService : QuizService,  private router : Router) { }

  ngOnInit(): void {
this.quizid=this.route.snapshot.params['quizid'];
this.quizService.getSingleQuiz(this.quizid).subscribe(
  (data:any)=>{
this.quiz=data;
  },
  (error)=>{
    Swal.fire("Error !","Error in loading Quiz Data",'error');
  }
)
  }
startQuiz(){
  Swal.fire({
    title: 'Do you want to Start the quiz?',
    showCancelButton: true,
    confirmButtonText: 'YES',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
    this.router.navigate(['/startquiz/'+this.quizid])
    } else if (result.isDenied) {
      Swal.fire('Quiz has not started', '', 'info')
    }
  })
}
}
