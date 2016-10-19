import { TestBed, inject } from '@angular/core/testing';

import { LessonsComponent } from './lessons.component';

describe('a lessons component', () => {
	let component: LessonsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LessonsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LessonsComponent], (LessonsComponent) => {
		component = LessonsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});