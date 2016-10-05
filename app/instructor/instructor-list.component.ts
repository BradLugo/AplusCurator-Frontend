import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Instructor } from './instructor';
import { InstructorService } from './instructor.service';

@Component({
    moduleId: module.id,
    selector: 'my-instructor-list',
    templateUrl: 'instructor-list.component.html',
    // styleUrls: ['instructor-list.component.css'],
})

export class InstructorListComponent implements OnInit {
    title: string = 'Instructor List';
    instructors: Instructor[];
    selectedInstructor: Instructor;

    constructor(
        private instructorService: InstructorService,
        private router: Router) { }

    /**
     * Call instructor.service to get Instructors
     * then assigns them to instructor[]
     */
    getInstructors(): void {
        this.instructorService.getInstructors()
            .then(instructors => this.instructors = instructors);
    }

    /**
     * Function for the add button
     * Insert instructor only in firstName
     */
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.instructorService.create(name)
            .then(instructor => {
                this.instructors.push(instructor);
                this.selectedInstructor = null;
            });
    }

    /**
     * Function for the delete button
     * Delete instructor using it's id
     */
    delete(instructor: Instructor): void {
        this.instructorService
            .delete(instructor.instructorId)
            .then(() => {
                this.instructors = this.instructors.filter(i => i !== instructor);
                if (this.selectedInstructor === instructor) { this.selectedInstructor = null; }
            });
    }

    /**
     * Get the group of instructor
     */
    ngOnInit(): void {
        this.getInstructors();
    }

    /**
     * Save selection
     */
    onSelect(instructor: Instructor): void {
        this.selectedInstructor = instructor;
    }

    /**
     * Function for the View Detail button
     * Route to selected instructor
     */
    gotoDetail(): void {
        this.router.navigate(['/instructor', this.selectedInstructor.instructorId]);
    }
}
