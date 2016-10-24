import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            { label: 'Home', routerLink: ['/home'] },
            { label: 'Attendence', routerLink: ['/attendence'] },
            { label: 'Students', routerLink: ['/student'] },
            { label: 'Instructors', routerLink: ['/instructor'] },
            { label: 'Learning Plans', routerLink: ['/lessons'] },
            { label: 'Accounts', routerLink: ['/accounts'] }
        ]
    }
}
