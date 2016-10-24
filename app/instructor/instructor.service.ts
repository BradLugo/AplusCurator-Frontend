import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Instructor } from './instructor.model';

@Injectable()
export class InstructorService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private instructorsUrl = 'app/instructors';  // URL to web api

  constructor(private http: Http) { }

  getInstructors(): Promise<Instructor[]> {
    return this.http.get(this.instructorsUrl)
      .toPromise()
      .then(response => response.json().data as Instructor[])
      .catch(this.handleError);
  }

  getInstructor(id: number): Promise<Instructor> {
    return this.getInstructors()
      .then(instructors => instructors.find(instructor => instructor.instructorId === id));
  }

  delete(id: number): Promise<void> {
    const url = `${this.instructorsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(firstname: string): Promise<Instructor> {
    return this.http
      .post(this.instructorsUrl, JSON.stringify(
        {
          firstName: firstname,
          lastName: "",
          middleName: "",
          address: "",
          email: "",
          phoneNumber: "",
          mobilePhoneNumber: "",
          emergencyContactName: "",
          emergencyContactPhone: "",
          role: 0,
          status: 0,
          employmentStartDate: "",
          employmentTerminationDate: "",
        }
      ), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(instructor: Instructor): Promise<Instructor> {
    const url = `${this.instructorsUrl}/${instructor.instructorId}`;
    return this.http
      .put(url, JSON.stringify(instructor), { headers: this.headers })
      .toPromise()
      .then(() => instructor)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}