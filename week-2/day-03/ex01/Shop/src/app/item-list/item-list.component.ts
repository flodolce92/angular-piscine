import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
	selector: 'app-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
	items: any[];
	selectedView: string = 'card';
	showForm: boolean = false;

	constructor(private itemService: ItemService) {}

	ngOnInit(): void {
		this.itemService.getItems().subscribe((items) => {
			this.items = items;
		});
	}

	toggleForm() {
		this.showForm = !this.showForm;
	}

	addItem(form: any) {
		const newItem = {
			title: form.value.title,
			price: form.value.price,
			description: form.value.description,
			image: form.value.image,
			category: form.value.category,
		};

		this.itemService.addItem(newItem).subscribe((item) => {
			this.items.push(item);
			form.resetForm();
		});

		this.toggleForm();
	}
}
