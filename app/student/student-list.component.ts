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
		if (this.newStudent)
			this.students.push(this.student);
		else
			this.students[this.findSelectedStudentIndex()] = this.student;

		this.student = null;
		this.displayDialog = false;
	}

	delete() {
		this.students.splice(this.findSelectedStudentIndex(), 1);
		this.student = null;
		this.displayDialog = false;
	}

	onRowSelect(event) {
		this.newStudent = false;
		this.student = this.selectedStudent;
		this.displayDialog = true;
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