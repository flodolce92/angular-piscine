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
		setInterval(() => {
			alert("Use me Senpai! Onegaishimasu!");
		}, 30000);
	}

	calculate(form: any): void {
		const num1 = parseFloat(form.value.num1.replace(',', '.'));
		const num2 = parseFloat(form.value.num2.replace(',', '.'));
		const operation = form.value.operation;

		if (isNaN(num1) || isNaN(num2)) {
			alert('Please enter valid numbers.');
			this.result = null;
			return;
		}

		if (num1 < 0 || num2 < 0) {
			alert("Negative numbers are not real and can't hurt you!");
			this.result = null;
			return;
		}

		switch (operation) {
			case 'add':
				this.result = num1 + num2;
				break;
			case 'subtract':
				this.result = num1 - num2;
				break;
			case 'multiply':
				this.result = num1 * num2;
				break;
			case 'divide':
				if (num2 !== 0) {
					this.result = num1 / num2;
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
