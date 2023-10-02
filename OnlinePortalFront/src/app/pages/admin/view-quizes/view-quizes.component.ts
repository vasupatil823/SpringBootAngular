import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {
quizes:any=[];
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe((data)=>{
      this.quizes=data;
      console.log(data)
    },
    (error)=>{
Swal.fire('Error While Loading data','Problem Occured while Loading data','error')
    }
    )
  }
deleteQuiz(qid:any){
Swal.fire({
  icon:'info',
  title:'Are You Sure ?',
  confirmButtonText : 'Delete',
  showCancelButton:true
}).then((result)=>{
  if(result.isConfirmed){
    this.quizService.deleteQuiz(qid).subscribe((data)=>{
      this.quizes=this.quizes.filter((quiz:any)=>quiz.qid!=qid)
      Swal.fire('Success','Quiz Deleted Successfully','success')
    },
    (error)=>{
      Swal.fire('Failed','Problem Occured while deleting Quiz','error')
    }
    )
  }
})
}
}