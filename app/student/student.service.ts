import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { Student } from './student';

@Injectable()
export class StudentService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private studentsUrl = 'app/students';  // URL to web api

  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentsUrl)
      .toPromise()
      // .then(response => response.json() as Student[])
      .then(response => response.json().data as Student[])
      .catch(this.handleError);
  }

  // getStudents(): Observable<Student[]> {
  //   // TODO: console.log _studentUrl to have a better understanding of what is passing. 
  //   return this.http.get(this.studentsUrl)
  //     .map((response: Response) => <Student[]>response.json())
  //     .do(data => console.log("All: " + JSON.stringify(data)))
  //     .catch(this.handleError);
  // }

  getStudent(id: number): Promise<Student> {
    return this.getStudents()
      .then(students => students.find(student => student.studentId === id));
  }

  delete(id: number): Promise<void> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Student> {
    return this.http
      .post(this.studentsUrl, JSON.stringify({ firstName: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(student: Student): Promise<Student> {
    const url = `${this.studentsUrl}/${student.studentId}`;
    return this.http
      .put(url, JSON.stringify(student), { headers: this.headers })
      .toPromise()
      .then(() => student)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
