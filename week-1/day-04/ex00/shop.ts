class Product {
	constructor(public title: string, public image: string) {}
}

class Category extends Product {
	constructor(
		title: string,
		image: string,
		public id: number,
		public description: string,
		public category: string,
		public price: number
	) {
		super(title, image);
	}
}

class Shop {
	private cartCount: number = 0;

	constructor(private isCardView: boolean = true) {}

	incrementCartCount() {
		this.cartCount++;
		const cartCounter = document.getElementById("cartCounter");
		if (!cartCounter) return;
		cartCounter.textContent = this.cartCount.toString();
		cartCounter.style.display = "block";
	}

	renderProducts(data: Category[]) {
		const container = document.querySelector(".container");
		if (!container) return;
		container.innerHTML = this.isCardView
			? data.map(this.renderCard).join("")
			: this.renderList(data);
	}

	renderCard(item: Category) {
		return `
					<div class="card" onclick="showModal('${item.image}', '${item.title}')">
							<img src="${item.image}" alt="${item.title}"/>
							<h1>${item.title}</h1>
							${item.description}
							<h4>${item.category}</h4>
							<h1>$ ${item.price}</h1>
					</div>
			`;
	}

	renderList(data: Category[]) {
		return `
					<table>
							<thead>
									<tr>
											<th>ID</th>
											<th>Image</th>
											<th>Title</th>
											<th>Description</th>
											<th>Category</th>
											<th>Price</th>
									</tr>
							</thead>
							<tbody>
									${data.map(this.renderListItem).join("")}
							</tbody>
					</table>
			`;
	}

	renderListItem(item: Category) {
		return `
					<tr onclick="showModal('${item.image}', '${item.title}')">
							<td>${item.id}</td>
							<td><img src="${item.image}" alt="${item.title}" class="list-icon"/></td>
							<td>${item.title}</td>
							<td>${item.description}</td>
							<td>${item.category}</td>
							<td>$${item.price}</td>
					</tr>
			`;
	}

	changeView() {
		this.isCardView = !this.isCardView;
		const gridIcon = document.querySelector(".grid-icon");
		if (!gridIcon) return;
		gridIcon.innerHTML = this.isCardView ? "&#8801;" : "&#9638;";
		this.fetchProducts();
	}

	fetchProducts() {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data: Category[]) => {
				const sortedData = data.sort((a, b) => a.id - b.id);
				this.renderProducts(sortedData);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}
}

// Function to show modal
function showModal(imageUrl: string, productName: string) {
	var modal = document.getElementById("myModal");
	if (!modal) return;

	const modalContent = modal.querySelector(".modal-content");
	if (modalContent) {
		modalContent.innerHTML = `
					<span class="close" onclick="closeModal()">&times;</span>
					<img src="${imageUrl}" alt="${productName}" />
					<h2>${productName}</h2>
					<div class="banner">
									<button onclick="shop.incrementCartCount(); closeModal();">Add to Cart</button>
					</div>
			`;
	}
	modal.style.display = "block";
}

// Function to close modal
function closeModal() {
	var modal = document.getElementById("myModal");
	if (!modal) return;
	modal.style.display = "none";
}

const shop = new Shop();
document.getElementById("changeView")?.addEventListener("click", () => {
	shop.changeView();
});

// Init
shop.fetchProducts();
