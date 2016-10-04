import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { InstructorListComponent } from './instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail.component';
import { StudentListComponent } from './student-list.component';
import { StudentDetailComponent } from './student-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    // { path: 'attendence', component: AttendenceComponent },
    { path: 'students', component: StudentListComponent },
    { path: 'student/:studentId', component: StudentDetailComponent },
    { path: 'instructors', component: InstructorListComponent },
    { path: 'instructor/:instructorId', component: InstructorDetailComponent },
    // { path: 'lessons', component: LessonsComponent },
    // { path: 'accounts', component: accountComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [AppComponent];
