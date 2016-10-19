import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { InstructorsComponent } from './instructors.component';
import { InstructorsService } from './shared/instructors.service';
import { Instructors } from './shared/instructors.model';

describe('a instructors component', () => {
	let component: InstructorsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: InstructorsService, useClass: MockInstructorsService },
				InstructorsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([InstructorsComponent], (InstructorsComponent) => {
		component = InstructorsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original instructors service
class MockInstructorsService extends InstructorsService {
	getList(): Observable<any> {
		return Observable.from([{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]);
	}
}
