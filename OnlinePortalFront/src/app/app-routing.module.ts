import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { EditQuestionsComponent } from './pages/admin/edit-questions/edit-questions.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UserViewQuizComponent } from './pages/user/user-view-quiz/user-view-quiz.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { QuizInstructionComponent } from './pages/user/quiz-instruction/quiz-instruction.component';
import { QuizStartComponent } from './pages/user/quiz-start/quiz-start.component';

const routes: Routes = [
{
path:'signup',
component: SignupComponent,
pathMatch: 'full'
},
{
  path:'login',
  component: LoginComponent,
  pathMatch: 'full'
},
{
  path:'',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path:'user-dashboard',
  component: UserdashboardComponent,
  canActivate:[NormalGuard],
  children: [
    {
      path:':catid',
      component:LoadQuizComponent,
    },
    {
      path:'instruction/:quizid',
      component:QuizInstructionComponent,
    },
  ],
},
{
  path:'admin-dashboard',
  component: DashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {
path:'profile',
component:ProfileComponent
},{
path:'',
component:WelcomeComponent
},
{
  path:'categories',
  component:ViewCategoriesComponent
},
{
path:'add-categories',
component:AddCategoriesComponent
},
{
  path:'view-quiz',
  component:ViewQuizesComponent
  },
  {
    path:'add-quiz',
    component:AddQuizComponent
    },
    {
      path:'quiz/:qid',
      component:UpdateQuizComponent
      },
      {
        path:'view-questions/:qid/:title',
        component:ViewQuestionsComponent
        },
        {
          path:'add-questions/:qid/:title',
          component:AddQuestionsComponent
          },
          {
            path:'question/:queid/:title/:quizid/:quiztitle',
            component:EditQuestionsComponent
            }
]
},
{
  path:'startquiz/:qid',
  component:QuizStartComponent,
  canActivate:[NormalGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
