import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryInstructorDataService } from './api/instructor.test';
import { InMemoryStudentDataService } from './api/student.test';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { InstructorListComponent } from './instructor/instructor-list.component';
import { InstructorDetailComponent } from './instructor/instructor-detail.component';
import { InstructorService } from './instructor/instructor.service';
import { StudentListComponent } from './student/student-list.component';
import { StudentDetailComponent } from './student/student-detail.component';
import { StudentService } from './student/student.service';

import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryStudentDataService, InMemoryInstructorDataService),
        // InMemoryWebApiModule.forRoot(InMemoryInstructorDataService),
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        InstructorListComponent,
        InstructorDetailComponent,
        StudentListComponent,
        StudentDetailComponent,
    ],
    providers: [InstructorService, StudentService],
    bootstrap: [AppComponent],
})

export class AppModule { }
