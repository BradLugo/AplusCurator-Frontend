import { Component, OnInit } from '@angular/core';

import { Students } from './shared/students.model';
import { StudentsService } from './shared/students.service';

@Component({
	moduleId: module.id,
	selector: 'students',
	templateUrl: 'students.component.html',
	providers: [StudentsService]
})

export class StudentsComponent implements OnInit {
	students: Students[] = [];

	constructor(private studentsService: StudentsService) { }

	ngOnInit() {
		this.studentsService.getList().subscribe((res) => {
			this.students = res;
		});
	}
}