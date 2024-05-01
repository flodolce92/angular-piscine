import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	num1: number;
	num2: number;
	operation: string;
	result: number | null;

	constructor() {
		this.num1 = 0;
		this.num2 = 0;
		this.operation = 'add';
		this.result = null;
	}

	calculate(): void {
		// Parsing
		const parsedNum1 = parseFloat(this.num1.toString().replace(/,/g, ''));
		const parsedNum2 = parseFloat(this.num2.toString().replace(/,/g, ''));

		// Validation
		if (
			isNaN(parsedNum1) ||
			isNaN(parsedNum2) ||
			(parsedNum2 === 0 && this.operation === 'divide')
		) {
			alert('Invalid input');
			return;
		}

		// Calculation
		switch (this.operation) {
			case 'add':
				this.result = parsedNum1 + parsedNum2;
				break;
			case 'subtract':
				this.result = parsedNum1 - parsedNum2;
				break;
			case 'multiply':
				this.result = parsedNum1 * parsedNum2;
				break;
			case 'divide':
				this.result = parsedNum1 / parsedNum2;
				break;
			default:
				this.result = null;
		}
	}
}
