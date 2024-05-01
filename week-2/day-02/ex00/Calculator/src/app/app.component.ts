import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'Calculator';
	result: number | null = null;

	ngOnInit() {
		// setInterval(() => {
		// 	alert("Use me Senpai! Onegaishimasu!");
		// }, 30000);
	}

	calculate(form: any): void {
		const num1Input = form.value.num1.replace(',', '.');
		const num1Float = parseFloat(num1Input);
		const num2Input = form.value.num2.replace(',', '.');
		const num2Float = parseFloat(num2Input);
		const operation = form.value.operation;
		const digitsOnlyRegex = /^\d+$/;

		if (num1Input === '' || num2Input === '') {
			alert('Please enter numbers.');
			this.result = null;
			return;
		}

		if (!digitsOnlyRegex.test(num1Input) || !digitsOnlyRegex.test(num2Input)) {
			alert('Please enter valid numbers.');
			this.result = null;
			return;
		}

		if (isNaN(num1Float) || isNaN(num2Float)) {
			alert('Please enter valid numbers.');
			this.result = null;
			return;
		}

		if (num1Float < 0 || num2Float < 0) {
			alert("Negative numbers are not real and can't hurt you!");
			this.result = null;
			return;
		}

		switch (operation) {
			case 'add':
				this.result = num1Float + num2Float;
				break;
			case 'subtract':
				this.result = num1Float - num2Float;
				break;
			case 'multiply':
				this.result = num1Float * num2Float;
				break;
			case 'divide':
				if (num2Float !== 0) {
					this.result = num1Float / num2Float;
				} else {
					alert('HA! you tried to create a black hole! NOICE!');
					this.result = null;
				}
				break;
			default:
				this.result = null;
				break;
		}
	}
}
