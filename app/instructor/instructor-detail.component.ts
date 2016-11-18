import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Instructor } from './instructor.model';
import { InstructorService } from './instructor.service';

@Component({
	moduleId: module.id,
	selector: 'instructor-detail',
	templateUrl: './instructor-detail.component.html',
	// styleUrls: ['./css/instructor-detail.component.css'],
	providers: [InstructorService]
})

export class InstructorDetailComponent implements OnInit {
	instructor: Instructor;
	disabled: boolean = true;

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

	toggleDisabled() {
		this.disabled = !this.disabled;
	}


	save(): void {
		this.instructorService.update(this.instructor)
			.then(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}
}