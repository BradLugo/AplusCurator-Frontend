import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Instructors } from './instructors.model';

@Injectable()
export class InstructorsService {

	constructor(private http: Http) { }

	getList(): Observable<Instructors[]> {
		return this.http.get('/api/list').map(res => res.json() as Instructors[]);
	}
}