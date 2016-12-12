import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
	moduleId: module.id,
	selector: 'student-list',
	templateUrl: './student-list.component.html',
})

export class StudentListComponent implements OnInit {
	displayDialog: boolean;
	student: Student = new Student();
	selectedStudent: Student;
	newStudent: boolean;
	students: Student[] = [];
	gender: SelectItem[];
	selectedGender: string;
	status: SelectItem[];
	selectedStatus: string;

	constructor(private studentService: StudentService, private router: Router) {
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
				.create(this.student)
				.then(res => this.students.push(res));
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