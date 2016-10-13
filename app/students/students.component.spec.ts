import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { StudentsComponent } from './students.component';
import { StudentsService } from './shared/students.service';
import { Students } from './shared/students.model';

describe('a students component', () => {
	let component: StudentsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: StudentsService, useClass: MockStudentsService },
				StudentsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([StudentsComponent], (StudentsComponent) => {
		component = StudentsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original students service
class MockStudentsService extends StudentsService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
