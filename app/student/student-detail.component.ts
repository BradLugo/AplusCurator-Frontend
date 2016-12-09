import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/primeng';

import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
	moduleId: module.id,
	selector: 'student-detail',
	templateUrl: './student-detail.component.html',
	// styleUrls: ['./css/student-detail.component.css'],
	providers: [StudentService]
})

export class StudentDetailComponent implements OnInit {
	student: Student;
	disabled: boolean = true;
	gender: SelectItem[];
	selectedGender: string;
	status: SelectItem[];
	selectedStatus: string;

	constructor(
		private studentService: StudentService,
		private route: ActivatedRoute,
		private location: Location
	) {
		this.gender = [];
		this.gender.push({ label: 'Select Gender', value: null });
		this.gender.push({ label: 'Male', value: 1 });
		this.gender.push({ label: 'Female', value: 0 });
		this.status = [];
		this.status.push({ label: 'Select Status', value: -1 });
		this.status.push({ label: 'Enrolled', value: 0 });
		this.status.push({ label: 'Pre-enrolled', value: 1 });
		this.status.push({ label: 'Expired', value: 2 });
		this.status.push({ label: 'Hold', value: 3 });
		this.status.push({ label: 'Inactive', value: 4 });
		this.status.push({ label: 'New', value: 5 });
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['studentId'];
			this.studentService.getStudent(id)
				.then(student => this.student = student);
		});
	}

	toggleDisabled() {
		this.disabled = !this.disabled;
	}


	save(): void {
		this.studentService.update(this.student)
			.then(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}

	delete(): void {
		this.studentService
			.delete(this.student)
			.then(() => this.goBack());
	}
}