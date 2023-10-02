import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
qId=0;
qTitle=null;
questions:any=[];
  constructor(private route:ActivatedRoute,private questinsService:QuestionsService) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qid'];
    this.qTitle=this.route.snapshot.params['title'];
    this.questinsService.getQuestionsOfQuiz(this.qId).subscribe((data)=>
    {
      console.log(data)
this.questions=data;
    },(error)=>
    {
      Swal.fire("Error !","Error in loading data",'error');
    })
  }
  deleteQuestion(queId:any){
    Swal.fire({
      icon:'info',
      title:'Are You Sure ?',
      confirmButtonText : 'Delete',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this.questinsService.deleteQuestion(queId).subscribe((data)=>{
          this.questions=this.questions.filter((question:any)=>question.queId!=queId)
          Swal.fire('Success','Question Deleted Successfully','success')
        },
        (error)=>{
          Swal.fire('Failed','Problem Occured while deleting Question','error')
        }
        )
      }
    })
    }
}
