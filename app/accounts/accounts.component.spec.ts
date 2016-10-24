import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AccountsComponent } from './accounts.component';
import { AccountsService } from './shared/accounts.service';
import { Accounts } from './shared/accounts.model';

describe('a accounts component', () => {
	let component: AccountsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: AccountsService, useClass: MockAccountsService },
				AccountsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AccountsComponent], (AccountsComponent) => {
		component = AccountsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original accounts service
class MockAccountsService extends AccountsService {
	getList(): Observable<any> {
		return Observable.from([{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]);
	}
}
