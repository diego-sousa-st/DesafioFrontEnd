import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.pug',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

	stockData: any[];
	returnedArray: any[];
	startItem: number = 1;
	endItem: number = 10;

	constructor(private dataService: DataService) { }

	ngOnInit() {

		this.stockData = this.dataService.getStockData();
		this.returnedArray = this.stockData.slice(0, 10);

	}

	pageChanged(event: PageChangedEvent): void {

		this.startItem = (event.page - 1) * event.itemsPerPage;
		this.endItem = event.page * event.itemsPerPage;

		if(this.stockData.length < this.endItem) {

			this.endItem = this.stockData.length;

		}

		this.returnedArray = this.stockData.slice(this.startItem, this.endItem);

	}

}
