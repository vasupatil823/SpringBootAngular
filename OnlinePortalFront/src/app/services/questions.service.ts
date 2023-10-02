import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpclient:HttpClient) { }
  public getQuestionsOfQuiz(qId:number){
return this.httpclient.get(`${baseUrl}/questions/quiz/all/${qId}`)
  }
  //add question
  public addQuestion(question:any){
    return this.httpclient.post(`${baseUrl}/questions/`,question)
  }
  //delete question
  public deleteQuestion(queId:any){
    return this.httpclient.delete(`${baseUrl}/questions/${queId}`)
  }
  //get single question
  public getSingleQuestion(questionId:number){
    return this.httpclient.get(`${baseUrl}/questions/${questionId}`)
      }
  //update question
  //update quiz
  public updateQuestion(question:any){
    return this.httpclient.put(`${baseUrl}/questions/`,question)
  }

  //get question of quiz id
  public getQuestionsOfQuizId(quizid:number){
    return this.httpclient.get(`${baseUrl}/questions/quiz/${quizid}`)
      }
}
