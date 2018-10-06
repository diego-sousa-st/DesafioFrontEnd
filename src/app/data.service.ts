export class DataService {

	SIZE_DATA: number = 2604;

	lastData: any;

	constructor() { }

	getStockData() {

		let stockData: any[] = [];

		for(let i = 0; i < this.SIZE_DATA; i++) {

			stockData.push({
				date: this.generateDate(),
				demand: this.generateDemand(),
				capacity: this.generateCapacity(),
				plannedAttendance: this.generatePlannedAttendance(),
				performedAttendance: this.generatePerformedAttendance(),
				deviation: this.generateDeviation()
			});

		}

		return stockData;

	}

	private generateDate(): Date {

		let startDate: any = new Date(2018,1,1).getTime();
		let endDate: any = new Date(2018,12,30).getTime();

		var date = new Date(startDate + Math.random() * (endDate - startDate));

		return date;

	}

	private generateDemand(): number {

		return this.generateRandom(400,1);

	}

	private generateCapacity() {

		return this.generateRandom(300,1);

	}

	private generatePlannedAttendance(): number {

		return this.generateRandom(100,1);

	}

	private generatePerformedAttendance() {

		return this.generateRandom(100,1);

	}

	private generateDeviation(): number {

		return this.generateRandom(7,1);

	}

	private generateRandom(max: number, min: number) {

		return Math.floor((Math.random() * max) + min);

	}

}