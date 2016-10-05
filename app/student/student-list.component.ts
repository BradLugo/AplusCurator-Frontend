import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
    moduleId: module.id,
    selector: 'my-student-list',
    templateUrl: 'student-list.component.html',
    // styleUrls: ['student-list.component.css'],
})

export class StudentListComponent implements OnInit {
    title: string = 'Student List';
    students: Student[];
    selectedStudent: Student;

    constructor(
        private studentService: StudentService,
        private router: Router) { }

    /**
     * Call student.service to get Students
     * then assigns them to student[]
     */
    getStudents(): void {
        this.studentService.getStudents()
            .then(students => this.students = students);
    }

    /**
     * Function for the add button
     * Insert student only in firstName
     */
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.studentService.create(name)
            .then(student => {
                this.students.push(student);
                this.selectedStudent = null;
            });
    }

    /**
     * Function for the delete button
     * Delete student using it's id
     */
    delete(student: Student): void {
        this.studentService
            .delete(student.studentId)
            .then(() => {
                this.students = this.students.filter(i => i !== student);
                if (this.selectedStudent === student) { this.selectedStudent = null; }
            });
    }

    /**
     * Get the group of student
     */
    ngOnInit(): void {
        this.getStudents();
    }

    /**
     * Save selection
     */
    onSelect(student: Student): void {
        this.selectedStudent = student;
    }

    /**
     * Function for the View Detail button
     * Route to selected student
     */
    gotoDetail(): void {
        this.router.navigate(['/student', this.selectedStudent.studentId]);
    }
}
