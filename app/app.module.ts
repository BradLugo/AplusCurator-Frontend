import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryInstructorDataService } from './in-memory-data-instructor.service';
import { InMemoryStudentDataService } from './in-memory-data-student.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { InstructorListComponent } from './instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail.component';
import { InstructorService } from './instructor.service';
import { StudentListComponent } from './student-list.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentService } from './student.service';

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
