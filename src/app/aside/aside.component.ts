import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-aside',
	templateUrl: './aside.component.pug',
	styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

	options: any;

	constructor(private dataService: DataService) { }

	ngOnInit() {

		this.options = this.dataService.getMenuOptions();

	}

}
