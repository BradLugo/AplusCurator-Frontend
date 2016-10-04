import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
    moduleId: module.id,
    selector: 'my-student-detail',
    templateUrl: 'student-detail.component.html',
    // styleUrls: ['student-detail.component.css'],
})

export class StudentDetailComponent implements OnInit {
    title = 'Student Detail'
    student: Student;

    constructor(
        private studentService: StudentService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    /**
     * Load all params from routing to store in student
     */
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['studentId'];
            this.studentService.getStudent(id)
                .then(student => this.student = student);
        });
    }

    /**
     * Function for save button
     * Call student.service for method update insstructor
     * then route back previous page
     */
    save(): void {
        this.studentService.update(this.student)
            .then(() => this.goBack());
    }

    /**
     * Route back to previous page
     */
    goBack(): void {
        this.location.back();
    }
}
