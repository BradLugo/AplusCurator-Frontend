import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/primeng';

import { Student } from './student.model';
import { LearningPlan } from './learningplan.model';
import { Section } from './section.model';
import { Assessment } from './assessment.model';
import { StudentService } from './student.service';

@Component({
    moduleId: module.id,
    selector: 'student-detail',
    templateUrl: './student-detail.component.html',
    providers: [StudentService]
})

export class StudentDetailComponent implements OnInit {
    student: Student;
    attendances: any[] = [];
    disabled: boolean = true;
    gender: SelectItem[];
    selectedGender: string;
    status: SelectItem[];
    selectedStatus: string;
    learningplanId: number = 0;
    sections: Section[] = [];
    displayDialog: boolean;
    assessment: Assessment = new Assessment();
    problem1: string;
    problem2: string;
    problem3: string;
	selectedSection: Section;

    constructor(private studentService: StudentService, private route: ActivatedRoute, private location: Location) {
        this.gender = [];
        this.gender.push({ label: 'Select Gender', value: null });
        this.gender.push({ label: 'Male', value: 1 });
        this.gender.push({ label: 'Female', value: 0 });
        this.status = [];
        this.status.push({ label: 'Select Status', value: -1 });
        this.status.push({ label: 'Enrolled', value: 0 });
        this.status.push({ label: 'Pre-enrolled', value: 1 });
        this.status.push({ label: 'Expired', value: 2 });
        this.status.push({ label: 'Hold', value: 3 });
        this.status.push({ label: 'Inactive', value: 4 });
        this.status.push({ label: 'New', value: 5 });
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['studentId'];
            this.studentService
                .getStudent(id)
                .then(student => this.student = student);
            this.studentService
                .getLogs(id)
                .then(attendance => this.attendances = attendance);
            this.studentService
                .getLearningPlans(id)
                .then(m => this.studentService
                    .getSections(m as number)
                    .then(sections => this.sections = sections));
        });
    }
	
    toggleDisabled() {
        this.disabled = !this.disabled;
    }


    save(): void {
        this.studentService
            .update(this.student)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

    delete(): void {
        this.studentService
            .delete(this.student)
            .then(() => this.goBack());
    }

    showDialogToNewLearningPlan() {
        this.displayDialog = true;
    }

    addLP() {
        this.route.params.forEach((params: Params) => {
            let id = +params['studentId'];
            this.assessment.rawQuestionTopicList = "1;2;3";
            this.assessment.rawQuestionScoreList = this.problem1 + ";" + this.problem2 + ";" + this.problem3;
            this.assessment.pdfPath = "";
            this.assessment.completed = new Date();
            this.assessment.studentId = id;
            this.studentService.createLearningPlan(this.assessment);
            this.studentService
                .getLearningPlans(id)
                .then(m => this.studentService
                    .getSections(m as number)
                    .then(sections => this.sections = sections));
        });
        this.assessment = null;
        this.displayDialog = false;
    }

	onRowSelect(event: any) {
		console.log(event);
		console.log(event.data.sectionId);
		this.studentService.getPDF(event.data.sectionId);
	}

    cancel(student: Student): void {
        this.student = null;
        this.displayDialog = false;
    }
}