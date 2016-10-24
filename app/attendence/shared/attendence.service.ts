import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Attendence } from './attendence.model';

@Injectable()
export class AttendenceService {

	constructor(private http: Http) { }

	getList(): Observable<Attendence[]> {
		return this.http.get('/api/list').map(res => res.json() as Attendence[]);
	}
}