import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

import { AttendenceService } from './attendence/attendence.service';
import { AttendenceComponent } from './attendence/attendence.component';

import { StudentService } from './student/student.service';
import { StudentListComponent } from './student/student-list.component';
import { StudentDetailComponent } from './student/student-detail.component';

import { InstructorService } from './instructor/instructor.service';
import { InstructorListComponent } from './instructor/instructor-list.component';
import { InstructorDetailComponent } from './instructor/instructor-detail.component';

import { LessonsComponent } from './lessons/lessons.component';

import { GuardianService } from './guardian/guardian.service';
import { GuardianListComponent } from './guardian/guardian-list.component';
import { GuardianDetailComponent } from './guardian/guardian-detail.component';

import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
    imports: [
        AccordionModule,
        AppRoutingModule,
        BrowserModule,
        ButtonModule,
        CalendarModule,
        ChartModule,
        DataListModule,
        DataTableModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        FieldsetModule,
        FormsModule,
        HttpModule,
        InputTextModule,
        InputTextareaModule,
        InputMaskModule,
        PanelModule,
        PasswordModule,
        PickListModule,
        MenuModule,
        ScheduleModule,
        SharedModule,
        TabViewModule,
        RadioButtonModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        HomeComponent,
        AttendenceComponent,
        StudentListComponent,
        StudentDetailComponent,
        InstructorListComponent,
        InstructorDetailComponent,
        LessonsComponent,
        GuardianListComponent,
        GuardianDetailComponent,
        AccountsComponent,
    ],
    providers: [
        AttendenceService,
        InstructorService,
        StudentService,
        GuardianService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
