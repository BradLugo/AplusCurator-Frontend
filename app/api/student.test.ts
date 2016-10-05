import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryStudentDataService implements InMemoryDbService {
    createDb() {
        let students = [
            {
                firstName: 'testing',
                lastName: 'testing',
                studentId: 1,
                dateOfBirth: 'testing',
                gender: 0,
                curGrade: 0,
                status: 0,
                guardianAccount: 'testing',
                lastDateAttend: 'testing',
                learningPlan: 'testing',
                enrollmentPlan: 'testing',
                descriptionInfo: 'testing',
                systemInfo: 'testing',
                attachment: 'testing',
            },
            {
                firstName: 'testing1',
                lastName: 'testing',
                studentId: 4,
                dateOfBirth: 'testing',
                gender: 0,
                curGrade: 0,
                status: 0,
                guardianAccount: 'testing',
                lastDateAttend: 'testing',
                learningPlan: 'testing',
                enrollmentPlan: 'testing',
                descriptionInfo: 'testing',
                systemInfo: 'testing',
                attachment: 'testing',
            },
            {
                firstName: 'testing9',
                lastName: 'testing',
                studentId: 123,
                dateOfBirth: 'testing',
                gender: 0,
                curGrade: 0,
                status: 0,
                guardianAccount: 'testing',
                lastDateAttend: 'testing',
                learningPlan: 'testing',
                enrollmentPlan: 'testing',
                descriptionInfo: 'testing',
                systemInfo: 'testing',
                attachment: 'testing',
            },
        ];
        return { students };
    }
}
