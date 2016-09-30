import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { InstructorListComponent } from './instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail.component';
import { InstructorService } from './instructor.service';

import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        InstructorListComponent,
        InstructorDetailComponent
    ],
    providers: [InstructorService],
    bootstrap: [AppComponent],
})

export class AppModule { }
