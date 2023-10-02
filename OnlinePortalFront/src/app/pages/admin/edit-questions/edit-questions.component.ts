import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})
export class EditQuestionsComponent implements OnInit {
  quizid=null;
  quiztitle=null;
  questionId=0;
  questionTitle=null;
  question:any;
  constructor(private route:ActivatedRoute,private questinsService:QuestionsService, private router:Router) { }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.params['queid'];
    this.questionTitle=this.route.snapshot.params['title'];
    this.quizid=this.route.snapshot.params['quizid'];
    this.quiztitle=this.route.snapshot.params['quiztitle'];
    console.log('quiz id sent to the server is : '+this.questionId)
    this.questinsService.getSingleQuestion(this.questionId).subscribe((data)=>
    {
      console.log(data)
this.question=data;
    },(error)=>
    {
      Swal.fire("Error !","Error in loading data",'error');
    })
  }

  //update question
  updateQuestion(){
    this.questinsService.updateQuestion(this.question).subscribe((data)=>{
      Swal.fire('Success !!','Question Updated Successfully','success').then((e)=>{
        this.router.navigate(['/admin-dashboard/view-questions/'+this.quizid+'/'+this.quiztitle])
      })
    },(error)=>
    {
      Swal.fire('Failed','Problem Occured while Updating Question','error')
    })
  }
}
