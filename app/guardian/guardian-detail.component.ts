import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/primeng';

import { Router } from '@angular/router';

import { Guardian } from './guardian.model';
import { GuardianService } from './guardian.service';
import { Student } from '../student/student.model';
import { StudentService } from '../student/student.service';

@Component({
	moduleId: module.id,
	selector: 'guardian-detail',
	templateUrl: './guardian-detail.component.html',
	providers: [GuardianService]
})

export class GuardianDetailComponent implements OnInit {
	guardian: Guardian;
	disabled: boolean = true;
	role: SelectItem[];
	selectedRole: string;
	status: SelectItem[];
	selectedStatus: string;

	guardianStudents: Student[] = [];
	students: Student[] = [];
	selectedStudent: Student;
	displayDialog: boolean;

	constructor(private guardianService: GuardianService, private route: ActivatedRoute, private location: Location, private router: Router, private studentService: StudentService) {
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

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['guardianId'];
			this.guardianService
				.getGuardian(id)
				.then(guardian => this.guardian = guardian);
			this.getGuardianStudents(id);
		});
	}

	getGuardianStudents(id: number): void {
		this.guardianService
			.getStudents(id)
			.then(students => this.guardianStudents = students);
	}

	getStudents(): void {
		this.studentService
			.getStudents()
			.then(students => this.students = students);
	}

	toggleDisabled() {
		this.disabled = !this.disabled;
	}


	save(): void {
		this.guardianService
			.update(this.guardian)
			.then(() => this.goBack());
	}

	showDialogToAdd() {
		this.getStudents();
		this.displayDialog = true;
	}

	onRowSelect(event) {
		this.router.navigate(['/studentDetail', this.selectedStudent.studentId]);
	}

	goBack(): void {
		this.location.back();
	}

	add() {
		this.guardianService.updateStudent(this.guardian.guardianId,this.selectedStudent.studentId);
		this.guardianStudents.push(this.selectedStudent);
		this.selectedStudent = null;
		this.displayDialog = false;
	}

	cancel(student: Student): void {
		this.selectedStudent = null;
		this.displayDialog = false;
	}

	delete(): void {
		this.guardianService
			.delete(this.guardian)
			.then(() => this.goBack());
	}
}