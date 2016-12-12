import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentDetailComponent } from './student/student-detail.component';
import { InstructorListComponent } from './instructor/instructor-list.component';
import { InstructorDetailComponent } from './instructor/instructor-detail.component';
import { LessonsComponent } from './lessons/lessons.component';
import { GuardianListComponent } from './guardian/guardian-list.component';
import { GuardianDetailComponent } from './guardian/guardian-detail.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  //{ path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'attendence', component: AttendenceComponent },

  { path: 'student', component: StudentListComponent },
  { path: 'studentDetail/:studentId', component: StudentDetailComponent },

  { path: 'instructor', component: InstructorListComponent },
  { path: 'instructorDetail/:instructorId', component: InstructorDetailComponent },

  { path: 'lessons', component: LessonsComponent },

  { path: 'guardian', component: GuardianListComponent },
  { path: 'guardianDetail/:guardianId', component: GuardianDetailComponent },

  { path: 'accounts', component: AccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];