import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
	moduleId: module.id,
	selector: 'student-detail',
	templateUrl: './html/student-detail.component.html',
	styleUrls: ['./css/student-detail.component.css'],
	providers: [StudentService]
})

export class StudentDetailComponent implements OnInit {
	student: Student;
	disabled: boolean = true;

	constructor(
		private studentService: StudentService,
		private route: ActivatedRoute,
		private location: Location
	) { }

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
}