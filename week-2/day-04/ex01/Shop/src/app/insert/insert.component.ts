import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
	selector: 'app-insert',
	templateUrl: './insert.component.html',
	styleUrl: './insert.component.css',
})
export class InsertComponent {
	items: any[];

	constructor(private itemService: ItemService) {}

	ngOnInit(): void {
		this.itemService.getItems().subscribe((items) => {
			this.items = items;
		});
	}

	addItem(form: any) {
		if (form.invalid) {
			return;
		}

		const newItem = {
			title: form.value.title,
			price: form.value.price,
			description: form.value.description,
			image: form.value.image,
			category: form.value.category,
		};

		this.itemService.addItem(newItem).subscribe((item) => {
			this.items.push(item);
			console.log('Item added successfully');
			console.log(item);
			form.resetForm();
		});
	}
}
