import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'main',
    templateUrl: 'main.component.html',
})
export class MainComponent {

    disabled: boolean = false;

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
            { label: 'Accounts', routerLink: ['/accounts'] },
            { label: 'Log Out', routerLink: ['/login'] }
        ]
    }

    toggleDisabled() {
        this.disabled = !this.disabled;
    }
}
