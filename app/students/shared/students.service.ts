import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Students } from './students.model';

@Injectable()
export class StudentsService {

	constructor(private http: Http) { }

	// change /api/list to /api/students.json
	getList(): Observable<Students[]> {
		return this.http.get('/api/students.json').map(res => res.json() as Students[]);
	}
}