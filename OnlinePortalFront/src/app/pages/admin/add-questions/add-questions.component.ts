import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  //public Editor = ClassicEditor;
qId: any;
qTitle: any;
question:any={
  quiz:{},
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
}
  constructor(private route:ActivatedRoute, private _service:QuestionsService) { }

  ngOnInit(): void {
    this.qId=this.route.snapshot.params['qid']
    this.qTitle=this.route.snapshot.params['title']
    this.question.quiz['qid']=this.qId
  }
formSubmit(){
  if(this.question.content.trim()=='' || this.question.content==null){
    return
  }
  if(this.question.option1.trim()==null || this.question.option2==null){
    return
  }
  this._service.addQuestion(this.question).subscribe(
    (data:any)=>{
      Swal.fire('Success','Question Added', 'success')
      this.question.option1=''
      this.question.option2=''
      this.question.option3=''
      this.question.option4=''
      this.question.answer=''
      this.question.content=''
    },
(error)=>{
  Swal.fire('Error','Error in Adding question','error')
}
    );
}
}
