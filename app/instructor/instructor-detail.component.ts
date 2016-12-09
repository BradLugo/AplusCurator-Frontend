import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/primeng';

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
	selectedGender: string;
	disabled: boolean = true;

	status: SelectItem[];
	selectedStatus: string;

	role: SelectItem[];
	selectedRole: string;

	constructor(
		private instructorService: InstructorService,
		private route: ActivatedRoute,
		private location: Location
	) {
		this.role = [];
		this.role.push({ label: 'Select Status', value: -1 });
		this.role.push({ label: 'Instructor', value: 0 });
		this.role.push({ label: 'Lead Instructor', value: 1 });
		this.role.push({ label: 'Center Manager', value: 2 });
		this.role.push({ label: 'Center Director', value: 3 });
		this.status = [];
		this.status.push({ label: 'Select Status', value: -1 });
		this.status.push({ label: 'Active', value: 0 });
		this.status.push({ label: 'Hold', value: 1 });
		this.status.push({ label: 'Inactive', value: 2 });
	}

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

	delete(): void {
		this.instructorService
			.delete(this.instructor)
			.then(() => this.goBack());
	}
}