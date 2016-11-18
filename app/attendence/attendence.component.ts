import { Component, OnInit } from '@angular/core';

import { Attendence } from './attendence.model';
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
    attendence: Attendence[] = [];
    notCurrentStudents: Student[];
    currentStudents: Student[];
    selectedStudents: Student[];
    draggedStudent: Student;
    notCurrentInstructors: Instructor[];
    currentInstructors: Instructor[];
    selectedInstructors: Instructor[];
    draggedInstructor: Instructor;

    constructor(private attendenceService: AttendenceService) { }

    ngOnInit() {
        this.selectedStudents = [];
        this.attendenceService.getNotCurrentStudents().then(students => this.notCurrentStudents = students);
        this.attendenceService.getNotCurrentInstructors().then(instructors => this.notCurrentInstructors = instructors);
    }

    dragStart(event, student: Student) {
        this.draggedStudent = student;
    }

    dropStudent(event) {
        if (this.draggedStudent) {
            this.selectedStudents.push(this.draggedStudent);
            this.notCurrentStudents.splice(this.findIndex(this.draggedStudent), 1);
            this.draggedStudent = null;
        }
    }

    dropInstructor(event) {
        if (this.draggedInstructor) {
            this.selectedInstructors.push(this.draggedInstructor);
            // this.notCurrentInstructors.splice(this.findIndex(this.draggedInstructor), 1);
            this.draggedInstructor = null;
        }
    }

    dragEnd(event) {
        this.draggedStudent = null;
    }

    findIndex(student: Student) {
        let index = -1;
        for (let i = 0; i < this.notCurrentStudents.length; i++) {
            if (student.studentId === this.notCurrentStudents[i].studentId) {
                index = i;
                break;
            }
        }
        return index;
    }

}