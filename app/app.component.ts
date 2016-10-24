import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    // Use for TabMenu
    private items: MenuItem[];

    ngOnInit() {
        // In item contains tab of routerLink
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
