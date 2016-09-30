import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Instructor } from './instructor';
import { InstructorService } from './instructor.service';

@Component({
    moduleId: module.id,
    selector: 'my-instructor-detail',
    templateUrl: 'instructor-detail.component.html',
    styleUrls: ['instructor-detail.component.css'],
})

export class InstructorDetailComponent implements OnInit {
    title = 'Instructor Detail'
    instructor: Instructor;

    constructor(
        private instructorService: InstructorService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['instructorId'];
            this.instructorService.getInstructor(id)
                .then(instructor => this.instructor = instructor);
        });
    }

    save(): void {
        this.instructorService.update(this.instructor)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
