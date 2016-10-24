import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Lessons } from './lessons.model';

@Injectable()
export class LessonsService {

	constructor(private http: Http) { }

	getList(): Observable<Lessons[]> {
		return this.http.get('/api/list').map(res => res.json() as Lessons[]);
	}
}