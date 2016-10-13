import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
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
        FormsModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'attendence', component: AttendenceComponent },
            { path: 'students', component: StudentsComponent },
            { path: 'instructors', component: InstructorsComponent },
            { path: 'lessons', component: LessonsComponent },
            { path: 'accounts', component: AccountsComponent },
            // { path: 'detail/:id', component: HeroDetailComponent },
        ])
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
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
