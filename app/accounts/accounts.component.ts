import { Component, OnInit } from '@angular/core';

import { Accounts } from './accounts.model';
import { AccountsService } from './accounts.service';

import { UIChart, Message } from 'primeng/primeng';

@Component({
	moduleId: module.id,
	selector: 'accounts',
	templateUrl: 'accounts.component.html',
	providers: [AccountsService],
})

export class AccountsComponent implements OnInit {
	accounts: Accounts[] = [];
	data: any;
	paymentYear: number[] = [];
	paymentMonths: number[] = [];
	paymentDays: number[] = [];
	chart: UIChart;

	constructor(private accountsService: AccountsService) {
		this.data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", 'October', 'November', 'December'],
			datasets: [
				{
					label: 'Payments',
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					fill: true,
					borderColor: '#4bc0c0'

				},
				{
					label: 'Collected',
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					fill: true,
					borderColor: '#565656'

				}
			]
		}
		let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
		let year = 2017;

		for (let month of months) {
			this.accountsService
				.getMonthProjected(year, month)
				.then(res => this.data.datasets[0].data[month] = res);
		}

		for (let month of months) {
			this.accountsService
				.getMonthCollected(year, month)
				.then(res => this.data.datasets[1].data[month] = res);
		}
	}

	ngOnInit() {

	}

}