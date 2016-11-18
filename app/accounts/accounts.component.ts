import { Component, OnInit } from '@angular/core';

import { Accounts } from './accounts.model';
import { AccountsService } from './accounts.service';

@Component({
	moduleId: module.id,
	selector: 'accounts',
	templateUrl: 'accounts.component.html',
	providers: [AccountsService]
})

export class AccountsComponent implements OnInit {
	accounts: Accounts[] = [];
	pie: any;
	line: any;
	bar: any;

	constructor(private accountsService: AccountsService) {

		this.line = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40, 90, 80, 65, 20, 46],
					fill: false,
					borderColor: '#4bc0c0'
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90, 80, 20, 35, 80, 54],
					fill: false,
					borderColor: '#565656'
				}
			]
		};

		this.bar = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: '#42A5F5',
					borderColor: '#1E88E5',
					data: [65, 59, 80, 81, 56, 55, 40, 90, 80, 65, 20, 46]
				},
				{
					label: 'My Second dataset',
					backgroundColor: '#9CCC65',
					borderColor: '#7CB342',
					data: [28, 48, 40, 19, 86, 27, 90, 80, 20, 35, 80, 54]
				}
			]
		};

		this.pie = {
			labels: ['A', 'B', 'C'],
			datasets: [
				{
					data: [300, 50, 100],
					backgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56"
					],
					hoverBackgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56"
					]
				}]
		};
	}

	ngOnInit() {
		this.accountsService.getList().subscribe((res) => {
			this.accounts = res;
		});
	}
}