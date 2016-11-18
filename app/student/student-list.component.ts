import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
	moduleId: module.id,
	selector: 'student-list',
	templateUrl: './student-list.component.html',
	// styleUrls: ['./css/student-list.component.css']
})

export class StudentListComponent implements OnInit {
	displayDialog: boolean;
	student: Student = new Student();
	selectedStudent: Student;
	newStudent: boolean;
	students: Student[] = [];

	constructor(
		private studentService: StudentService,
		private router: Router) { }

	getStudents(): void {
		this.studentService
			.getStudents()
			.then(students => this.students = students);
	}

	showDialogToAdd() {
		this.newStudent = true;
		this.student = new Student();
		this.displayDialog = true;
	}

	save() {
		if (this.newStudent) {
			this.studentService
			.create(this.student);
			this.students.push(this.student);
		}
		else
			this.students[this.findSelectedStudentIndex()] = this.student;

		this.student = null;
		this.displayDialog = false;
	}

	cancel(student: Student): void {
		this.student = null;
		this.displayDialog = false;
	}

	onRowSelect(event) {
		// this.newStudent = false;
		// // this.student = this.selectedStudent;
		// this.studentService.getStudent(this.selectedStudent.studentId)
		// 		.then(student => this.student = student);
		// this.displayDialog = true;
		this.router.navigate(['/studentDetail', this.selectedStudent.studentId]);

	}

	cloneStudent(s: Student): Student {
		let student = new Student();
		for (let prop in s) {
			student[prop] = s[prop];
		}
		return student;
	}

	findSelectedStudentIndex(): number {
		return this.students.indexOf(this.selectedStudent);
	}

	ngOnInit(): void {
		this.getStudents();
	}

}