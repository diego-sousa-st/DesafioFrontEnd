import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-aside',
	templateUrl: './aside.component.pug',
	styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

	asideOpened: boolean = false;
	opened2: boolean = true;

	@ViewChild('sidenav') sidenav;

	constructor() { }

	ngOnInit() {

	}

	toggle() {

		this.sidenav.toggle();
		this.asideOpened = !this.asideOpened;

	}

}
