import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let instructors = [
            {
                instructorId: 7,
                firstName: 'Michael',
                lastName: 'Geyer',
                middleName: 'Alexander',
                address: '25250 Not My Real Address ln.',
                email: 'notarealemail@notarealdomain.com',
                phoneNumber: '1234567890',
                mobilePhoneNumber: '1234567890',
                emergencyContactName: 'Faux Info',
                emergencyContactPhone: '1800-call-911',
                role: 0,
                status: 0,
                employmentStartDate: '2016-09-27T21:02:12.6230286',
                employmentTerminationDate: '2016-09-27T21:02:12.6230286',
            }
        ];
        return { instructors };
    }
}
