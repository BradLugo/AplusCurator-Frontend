import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Attendence } from './attendence.model';
import { Student } from '../student/student.model';
import { Instructor } from '../instructor/instructor.model';

@Injectable()
export class AttendenceService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private studentsUrl = 'http://localhost:5000/api/students';  // URL to web api
	private instructorsUrl = 'http://localhost:5000/api/instructors';  // URL to web api


	constructor(private http: Http) { }

	getNotCurrentStudents(): Promise<Student[]> {
		const url = `${this.studentsUrl}/notcurrent`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Student[])
			.catch(this.handleError);
	}

	getCurrentStudents(): Promise<Student[]> {
		const url = `${this.studentsUrl}/current`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Student[])
			.catch(this.handleError);
	}

	getNotCurrentInstructors(): Promise<Instructor[]> {
		const url = `${this.instructorsUrl}/notcurrent`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Instructor[])
			.catch(this.handleError);
	}

	getCurrentInstructors(): Promise<Instructor[]> {
		const url = `${this.instructorsUrl}/current`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Instructor[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}