import { Component, OnInit } from '@angular/core';

import { Instructors } from './shared/instructors.model';
import { InstructorsService } from './shared/instructors.service';

@Component({
	moduleId: module.id,
	selector: 'instructors',
	templateUrl: 'instructors.component.html',
	providers: [InstructorsService]
})

export class InstructorsComponent implements OnInit {
	instructors: Instructors[] = [];

	constructor(private instructorsService: InstructorsService) { }

	ngOnInit() {
		this.instructorsService.getList().subscribe((res) => {
			this.instructors = res;
		});
	}
}