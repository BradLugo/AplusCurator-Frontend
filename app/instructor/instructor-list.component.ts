import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

import { Instructor } from './instructor.model';
import { InstructorService } from './instructor.service';

@Component({
	moduleId: module.id,
	selector: 'instructor-list',
	templateUrl: './instructor-list.component.html',
})

export class InstructorListComponent implements OnInit {
	instructor: Instructor = new Instructor();
	instructors: Instructor[] = [];
	newInstructor: boolean;
	selectedInstructor: Instructor;
	displayDialog: boolean;

	status: SelectItem[];
	selectedStatus: string;

	role: SelectItem[];
	selectedRole: string;

	constructor(private instructorService: InstructorService, private router: Router) {
		this.role = [];
		this.role.push({ label: 'Select Status', value: -1 });
		this.role.push({ label: 'Instructor', value: 0 });
		this.role.push({ label: 'Lead Instructor', value: 1 });
		this.role.push({ label: 'Center Manager', value: 2 });
		this.role.push({ label: 'Center Director', value: 3 });
		this.status = [];
		this.status.push({ label: 'Select Status', value: -1 });
		this.status.push({ label: 'Active', value: 0 });
		this.status.push({ label: 'Hold', value: 1 });
		this.status.push({ label: 'Inactive', value: 2 });
	}

	getInstructors(): void {
		this.instructorService
			.getInstructors()
			.then(instructors => this.instructors = instructors);
	}

	showDialogToAdd() {
		this.newInstructor = true;
		this.instructor = new Instructor();
		this.displayDialog = true;
	}

	save() {
		if (this.newInstructor) {
			this.instructorService
				.create(this.instructor)
				.then(res => this.instructors.push(res));
		}
		else
			this.instructors[this.findSelectedInstructorIndex()] = this.instructor;

		this.instructor = null;
		this.displayDialog = false;
	}

	cancel(instructor: Instructor): void {
		this.instructor = null;
		this.displayDialog = false;
	}

	onRowSelect(event) {
		this.router.navigate(['/instructorDetail', this.selectedInstructor.instructorId]);
	}

	cloneInstructor(s: Instructor): Instructor {
		let instructor = new Instructor();
		for (let prop in s) {
			instructor[prop] = s[prop];
		}
		return instructor;
	}

	findSelectedInstructorIndex(): number {
		return this.instructors.indexOf(this.selectedInstructor);
	}

	ngOnInit(): void {
		this.getInstructors();
	}

}