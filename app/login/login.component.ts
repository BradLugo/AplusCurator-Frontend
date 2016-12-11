import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    login(): void {
        this.router.navigate(['/home']);
    }
}