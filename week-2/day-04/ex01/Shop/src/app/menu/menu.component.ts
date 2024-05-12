import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.css',
})
export class MenuComponent {
	constructor(private router: Router) {}

	isActive(route: string): boolean {
		return this.router.url === route;
	}
}
