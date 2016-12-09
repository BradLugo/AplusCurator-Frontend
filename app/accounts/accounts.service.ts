import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Accounts } from './accounts.model';

@Injectable()
export class AccountsService {

	constructor(private http: Http) { }

	getList(): Observable<Accounts[]> {
		return this.http.get('/api/list').map(res => res.json() as Accounts[]);
	}
}