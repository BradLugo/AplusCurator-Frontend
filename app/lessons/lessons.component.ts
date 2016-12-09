import { Component, OnInit } from '@angular/core';

import { Lessons } from './lessons.model';
import { LessonsService } from './lessons.service';

@Component({
	moduleId: module.id,
	selector: 'lessons',
	templateUrl: 'lessons.component.html',
	providers: [LessonsService]
})

export class LessonsComponent implements OnInit {
	lessons: Lessons[] = [];

	constructor(private lessonsService: LessonsService) { }

	ngOnInit() {
		this.lessonsService.getList().subscribe((res) => {
			this.lessons = res;
		});
	}
}