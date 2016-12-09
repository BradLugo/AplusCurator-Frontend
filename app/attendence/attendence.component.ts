import { Component, OnInit } from '@angular/core';

import { Student } from '../student/student.model';
import { Instructor } from '../instructor/instructor.model';
import { AttendenceService } from './attendence.service';

@Component({
    moduleId: module.id,
    selector: 'attendence',
    templateUrl: 'attendence.component.html',
    providers: [AttendenceService]
})

export class AttendenceComponent implements OnInit {

    notCurStudent: Student[];
    curStudent: Student[];
    notCurInstructor: Instructor[];
    curInstructor: Instructor[];
    selectedStudent: Student;
    selectedInstructor: Instructor;

    constructor(private attendenceService: AttendenceService) { }

    ngOnInit() {
        this.attendenceService.getCurrentStudents()
            .then(students => this.curStudent = students);
        this.attendenceService.getNotCurrentStudents()
            .then(students => this.notCurStudent = students);

        this.attendenceService.getCurrentInstructors()
            .then(instructors => this.curInstructor = instructors);
        this.attendenceService.getNotCurrentInstructors()
            .then(instructors => this.notCurInstructor = instructors);
    }

    signInStudent(event: any): void {
        this.attendenceService.signInStudent(event.items[0]);
    }

    signOutStudent(event: any): void {
        this.attendenceService.signOutStudent(event.items[0]);
    }

    signInInstructor(event: any): void {
        console.log(event.items[0]);
        this.attendenceService.signInInstructor(event.items[0]);
    }

    signOutInstructor(event: any): void {
        this.attendenceService.signOutInstructor(event.items[0]);
    }

}