import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';

import { AppRoutingModule } from './app.routing';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
// import { InMemoryDataService } from './instructor/instructorsMem';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { AttendenceComponent } from './attendence/attendence.component';

import { StudentService } from './student/student.service';
import { StudentListComponent } from './student/student-list.component';
import { StudentDetailComponent } from './student/student-detail.component';

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
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        InputTextModule,
        DataTableModule,
        SharedModule,
        ButtonModule,
        PanelModule,
        MenuModule,
        FieldsetModule,
        ScheduleModule,
        DialogModule,
        AccordionModule,
        DataListModule,
        DragDropModule,
        TabViewModule,
        PickListModule,
        ChartModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AttendenceComponent,
        StudentListComponent,
        StudentDetailComponent,
        InstructorListComponent,
        InstructorDetailComponent,
        LessonsComponent,
        AccountsComponent,
    ],
    providers: [
        InstructorService,
        StudentService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
