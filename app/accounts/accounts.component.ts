import { Component, OnInit } from '@angular/core';

import { Accounts } from './shared/accounts.model';
import { AccountsService } from './shared/accounts.service';

@Component({
	moduleId: module.id,
	selector: 'accounts',
	templateUrl: 'accounts.component.html',
	providers: [AccountsService]
})

export class AccountsComponent implements OnInit {
	accounts: Accounts[] = [];

	constructor(private accountsService: AccountsService) { }

	ngOnInit() {
		this.accountsService.getList().subscribe((res) => {
			this.accounts = res;
		});
	}
}