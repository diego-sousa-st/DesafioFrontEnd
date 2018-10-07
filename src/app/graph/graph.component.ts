import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../canvasjs.min.js';
import * as _ from 'lodash';
import { DataService } from '../data.service';

@Component({
	selector: 'app-graph',
	templateUrl: './graph.component.pug',
	styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

	stockData: any[];
	graphData: any[];

	constructor(private dataService: DataService) { }

	ngOnInit() {

		this.stockData = this.dataService.getStockData();
		this.graphData = this.calculateGraphData();
		this.drawGraph();
	}

	private calculateGraphData(): any[] {

		const graphData = [];

		let dataGraph = {

			date: undefined,
			capacity: 0,
			performedAttendance: 0

		};

		let lastTime;

		this.stockData.forEach(data => {

			if(lastTime !== data.dateTime && lastTime !== undefined) {

				graphData.push(_.cloneDeep(dataGraph));
				dataGraph = {

					date: undefined,
					capacity: 0,
					performedAttendance: 0

				};
			}

			dataGraph.date = data.date.getDate() + '/' + (data.date.getMonth() + 1) + '/' + data.date.getFullYear();
			dataGraph.capacity += data.capacity;
			dataGraph.performedAttendance += data.performedAttendance

			lastTime = data.dateTime;

		});

		return _.cloneDeep(graphData);

	}

	calculateDataPoints(): any[] {

		const dataPoints: any[]= [];

		this.graphData.forEach(data => {

			dataPoints.push({
				y: data.capacity - data.performedAttendance,
				label: data.date
			});

		});

		return dataPoints;

	}

	drawGraph() {

		let dataPoints: any[] = this.calculateDataPoints();

		let chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Diferença entre capacidade e atendimento realizado por data"
			},
			data: [{
				type: "column",
				dataPoints: dataPoints
			}]
		});

		chart.render();

	}

}
