import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
	selector: 'app-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
	items: any[];

	constructor(private itemService: ItemService) {}

	ngOnInit(): void {
		this.itemService.getItems().subscribe((items) => {
			this.items = items;
		});
	}
}
