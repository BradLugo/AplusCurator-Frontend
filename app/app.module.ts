import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './instructor/instructorsMem';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { AttendenceComponent } from './attendence/attendence.component';

import { StudentsComponent } from './students/students.component';

import { InstructorService } from './instructor/instructor.service';
import { InstructorListComponent } from './instructor/instructor-list.component';
import { InstructorDetailComponent } from './instructor/instructor-detail.component';

import { LessonsComponent } from './lessons/lessons.component';

import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AttendenceComponent,
        StudentsComponent,
        InstructorListComponent,
        InstructorDetailComponent,
        LessonsComponent,
        AccountsComponent,
    ],
    providers: [
        InstructorService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
