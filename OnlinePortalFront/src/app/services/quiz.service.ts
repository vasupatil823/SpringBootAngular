import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private htt:HttpClient) { }
  public getQuizzes(){
    return this.htt.get(`${baseUrl}/quiz/`)
  }
  public addQuizezes(quiz:any){
    return this.htt.post(`${baseUrl}/quiz/`,quiz)
  }
  public deleteQuiz(qid:any){
return this.htt.delete(`${baseUrl}/quiz/${qid}`)

  }
  //get single quiz
  public getSingleQuiz(qid:any){
    return this.htt.get(`${baseUrl}/quiz/${qid}`)
  }
  //update quiz
  public updateQuiz(quiz:any){
    return this.htt.put(`${baseUrl}/quiz/`,quiz)
  }

  //load quiz based on category
  public loadQuizesOfCategory(cid:any){
    return this.htt.get(`${baseUrl}/quiz/category/${cid}`)
  }
  //get active quizzes
  public loadActiveQuizzes(){
    return this.htt.get(`${baseUrl}/quiz/activequizzes`)
  }
  //get active quizzes of category
  public loadActiveQuizzesOfCategory(cid:any){
    return this.htt.get(`${baseUrl}/quiz/activequizzesofcategory/${cid}`)
  }
}
