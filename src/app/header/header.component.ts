import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.pug',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	user: any;

	constructor(private userService: UserService) { }

	ngOnInit() {

		this.user = this.userService.getLoggedUser();

	}

	logout() {

		window.location.href = 'https://www.accenture.com/br-pt/new-applied-now';

	}

}
