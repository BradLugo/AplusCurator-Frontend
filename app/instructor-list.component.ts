import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Instructor } from './instructor';
import { InstructorService } from './instructor.service';

@Component({
    moduleId: module.id,
    selector: 'my-instructor-list',
    templateUrl: 'instructor-list.component.html',
    styleUrls: ['instructor-list.component.css'],
})

export class InstructorListComponent implements OnInit {
    title: string = 'Instructor List';
    instructors: Instructor[];
    selectedInstructor: Instructor;

    constructor(
        private instructorService: InstructorService,
        private router: Router) { }

    getInstructors(): void {
        this.instructorService
            .getInstructors()
            .then(instructors => this.instructors = instructors);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.instructorService.create(name)
            .then(instructor => {
                this.instructors.push(instructor);
                this.selectedInstructor = null;
            });
    }

    delete(instructor: Instructor): void {
        this.instructorService
            .delete(instructor.instructorId)
            .then(() => {
                this.instructors = this.instructors.filter(i => i !== instructor);
                if (this.selectedInstructor === instructor) { this.selectedInstructor = null; }
            });
    }

    ngOnInit(): void {
        this.getInstructors();
    }

    onSelect(instructor: Instructor): void {
        this.selectedInstructor = instructor;
    }

    gotoDetail(): void {
        this.router.navigate(['/instructor', this.selectedInstructor.instructorId]);
    }
}
