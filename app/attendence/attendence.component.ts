import { Component, OnInit } from '@angular/core';

import { Attendence } from './shared/attendence.model';
import { AttendenceService } from './shared/attendence.service';

@Component({
    moduleId: module.id,
	selector: 'attendence',
	templateUrl: 'attendence.component.html',
	providers: [AttendenceService]
})

export class AttendenceComponent implements OnInit {
	attendence: Attendence[] = [];

	constructor(private attendenceService: AttendenceService) { }

	ngOnInit() {
		this.attendenceService.getList().subscribe((res) => {
			this.attendence = res;
		});
	}
}