import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AttendenceComponent } from './attendence.component';
import { AttendenceService } from './shared/attendence.service';
import { Attendence } from './shared/attendence.model';

describe('a attendence component', () => {
	let component: AttendenceComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: AttendenceService, useClass: MockAttendenceService },
				AttendenceComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AttendenceComponent], (AttendenceComponent) => {
		component = AttendenceComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original attendence service
class MockAttendenceService extends AttendenceService {
	getList(): Observable<any> {
		return Observable.from([{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]);
	}
}
