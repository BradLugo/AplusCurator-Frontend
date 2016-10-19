import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { LessonsComponent } from './lessons.component';
import { LessonsService } from './shared/lessons.service';
import { Lessons } from './shared/lessons.model';

describe('a lessons component', () => {
	let component: LessonsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: LessonsService, useClass: MockLessonsService },
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

// Mock of the original lessons service
class MockLessonsService extends LessonsService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
