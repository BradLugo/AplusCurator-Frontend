import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
	moduleId: module.id,
	selector: 'student-list',
	templateUrl: './html/student-list.component.html',
	styleUrls: ['./css/student-list.component.css']
})

export class StudentListComponent implements OnInit {
	students: Student[] = [];
	selectedStudent: Student;

	constructor(
		private studentService: StudentService,
		private router: Router) { }

	getStudents(): void {
		this.studentService
			.getStudents()
			.then(students => this.students = students);
	}

	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.studentService.create(name)
			.then(student => {
				this.students.push(student);
				this.selectedStudent = null;
			});
	}

	delete(student: Student): void {
		this.studentService
			.delete(student)
			.then(() => {
				this.students = this.students.filter(h => h !== student);
				if (this.selectedStudent === student) { this.selectedStudent = null; }
			});
	}

	ngOnInit(): void {
		this.getStudents();
	}

	onSelect(student: Student): void {
		this.selectedStudent = student;
	}

	gotoDetail(): void {
		this.router.navigate(['/studentDetail', this.selectedStudent.studentId]);
	}
}