import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

import { Guardian } from './guardian.model';
import { GuardianService } from './guardian.service';

@Component({
	moduleId: module.id,
	selector: 'guardian-list',
	templateUrl: './guardian-list.component.html',
})

export class GuardianListComponent implements OnInit {
	displayDialog: boolean;
	guardian: Guardian = new Guardian();
	selectedGuardian: Guardian;
	newGuardian: boolean;
	guardians: Guardian[] = [];
	role: SelectItem[];
	selectedRole: string;
	status: SelectItem[];
	selectedStatus: string;

	constructor(private guardianService: GuardianService, private router: Router) {
		this.role = [];
		this.role.push({ label: 'Select Role', value: -1 });
		this.role.push({ label: 'Mother', value: 0 });
		this.role.push({ label: 'Father', value: 1 });
		this.role.push({ label: 'Guardian', value: 2 });
		this.role.push({ label: 'Other', value: 3 });
		this.status = [];
		this.status.push({ label: 'Select Status', value: -1 });
		this.status.push({ label: 'Active', value: 0 });
		this.status.push({ label: 'Hold', value: 3 });
		this.status.push({ label: 'Inactive', value: 4 });
	}

	getGuardians(): void {
		this.guardianService
			.getGuardians()
			.then(guardians => this.guardians = guardians);
	}

	showDialogToAdd() {
		this.newGuardian = true;
		this.guardian = new Guardian();
		this.displayDialog = true;
	}

	save() {
		if (this.newGuardian) {
			this.guardianService
				.create(this.guardian)
				.then(res => this.guardians.push(res));
		}
		else
			this.guardians[this.findSelectedGuardianIndex()] = this.guardian;

		this.guardian = null;
		this.displayDialog = false;
	}

	cancel(guardian: Guardian): void {
		this.guardian = null;
		this.displayDialog = false;
	}

	onRowSelect(event) {
		this.router.navigate(['/guardianDetail', this.selectedGuardian.guardianId]);
	}

	cloneGuardian(s: Guardian): Guardian {
		let guardian = new Guardian();
		for (let prop in s) {
			guardian[prop] = s[prop];
		}
		return guardian;
	}

	findSelectedGuardianIndex(): number {
		return this.guardians.indexOf(this.selectedGuardian);
	}

	ngOnInit(): void {
		this.getGuardians();
	}

}