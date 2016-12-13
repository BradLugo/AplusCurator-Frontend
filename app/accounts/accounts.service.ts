import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Accounts } from './accounts.model';

@Injectable()
export class AccountsService {

	constructor(private http: Http) { }
	private guardiansUrl = 'http://localhost:5000/api/guardians';  // URL to web api
	private studentsUrl = 'http://localhost:5000/api/students';  // URL to web api

	getYearProjected(year: number) {
		const url = `${this.guardiansUrl}/payments/date/${year}/projected`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json())
	}

	getMonthProjected(year: number, month: number) {
		const url = `${this.guardiansUrl}/payments/date/${year}/${month}/projected`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json())
	}

	getDayProjected(year: number, month: number, day: number) {
		const url = `${this.guardiansUrl}/payments/date/${year}/${month}/${day}/projected`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json())
	}

	getYearCollected(year: number) {
		const url = `${this.guardiansUrl}/payments/date/${year}/collected`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json())
	}

	getMonthCollected(year: number, month: number) {
		const url = `${this.guardiansUrl}/payments/date/${year}/${month}/collected`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json())
	}

	getDayCollected(year: number, month: number, day: number) {
		const url = `${this.guardiansUrl}/payments/date/${year}/${month}/${day}/collected`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json())
	}

}