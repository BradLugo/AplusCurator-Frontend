import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Student } from './student.model';

@Injectable()
export class StudentService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private studentsUrl = 'http://localhost:5000/api/students';  // URL to web api

  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentsUrl)
      .toPromise()
      .then(response => response.json() as Student[])
      .catch(this.handleError);
  }

  getStudent(id: number): Promise<Student> {
    return this.getStudents()
      .then(students => students.find(student => student.studentId === id));
  }

  delete(student: Student): Promise<void> {
    const url = `${this.studentsUrl}/body/delete`;
    return this.http.post(url, JSON.stringify(student), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(student: Student): Promise<Student> {
    const url = `${this.studentsUrl}/body/create`
    return this.http
      .post(url, JSON.stringify(
        {
          firstName: student.firstName,
          lastName: student.lastName,
          dateOfBirth: student.dateOfBirth,
          gender: student.gender,
          currentGrade: student.currentGrade,
          status: student.status,
          description: student.description,
          systemInfo: student.systemInfo,
        }
      ), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(student: Student): Promise<Student> {
    const url = `${this.studentsUrl}/body/update`;
    return this.http
      .post(url, JSON.stringify(student), { headers: this.headers })
      .toPromise()
      .then(() => student)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}