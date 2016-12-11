import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Guardian } from './guardian.model';
import { Student } from '../student/student.model';

@Injectable()
export class GuardianService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private guardiansUrl = 'http://localhost:5000/api/guardians';  // URL to web api

	constructor(private http: Http) { }

	getGuardians(): Promise<Guardian[]> {
		return this.http.get(this.guardiansUrl)
			.toPromise()
			.then(response => response.json() as Guardian[])
			.catch(this.handleError);
	}

	getGuardian(id: number): Promise<Guardian> {
		return this.getGuardians()
			.then(guardians => guardians.find(guardian => guardian.guardianId === id));
	}

	getStudents(id: number): Promise<Student[]> {
		const url = `${this.guardiansUrl}/id/${id}/students`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Student[])
			.catch(this.handleError);
	}

	delete(guardian: Guardian): Promise<void> {
		const url = `${this.guardiansUrl}/body/delete`;
		return this.http
			.post(url, JSON.stringify(guardian), { headers: this.headers })
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	create(guardian: Guardian): Promise<Guardian> {
		const url = `${this.guardiansUrl}/body/create`
		return this.http
			.post(url, JSON.stringify(
				{
					guardianId: guardian.guardianId,
					mostRecentPayement: guardian.mostRecentPayement,
					firstName: guardian.firstName,
					lastName: guardian.lastName,
					address: guardian.address,
					email: guardian.email,
					phoneNumber: guardian.phoneNumber,
					mobileNumber: guardian.mobileNumber,
					role: guardian.role,
					contactName: guardian.contactName,
					contactNumber: guardian.contactNumber,
					status: guardian.status,
					description: guardian.description,
					systemInfo: guardian.systemInfo,
				}
			), { headers: this.headers })
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError);
	}

	update(guardian: Guardian): Promise<Guardian> {
		const url = `${this.guardiansUrl}/body/update`;
		return this.http
			.post(url, JSON.stringify(guardian), { headers: this.headers })
			.toPromise()
			.then(() => guardian)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}