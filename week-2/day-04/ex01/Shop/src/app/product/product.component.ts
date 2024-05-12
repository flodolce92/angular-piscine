import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrl: './product.component.css',
})
export class ProductComponent {
	items: any[];
	selectedView: string = 'card';

	constructor(private itemService: ItemService) {}

	ngOnInit(): void {
		this.itemService.getItems().subscribe((items) => {
			this.items = items;
		});
	}
}
