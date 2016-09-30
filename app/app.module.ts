import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})

export class AppModule { }
