import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { StudentsComponent } from './students/students.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AttendenceComponent,
        StudentsComponent,
        InstructorsComponent,
        LessonsComponent,
        AccountsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
