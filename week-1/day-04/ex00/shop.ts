let isCardView: boolean = true;
let cartCount: number = 0;

// Function to increment cart count and update counter
function incrementCartCount() {
	cartCount++;
	const cartCounter = document.getElementById("cartCounter");
	if (!cartCounter) return;
	cartCounter.textContent = cartCount.toString();
	cartCounter.style.display = "block";
}

const renderProducts = (data: any[]) => {
	const container = document.querySelector(".container");
	if (!container) return;
	container.innerHTML = isCardView
		? data.map(renderCard).join("")
		: renderList(data);
};

// Render one item in card view
const renderCard = (item: any) => {
	return `
				<div class="card" onclick="showModal('${item.image}', '${item.title}')">
					<img src="${item.image}" alt="${item.title}"/>
					<h1>${item.title}</h1>
					${item.description}
					<h4>${item.category}</h4>
					<h1>$ ${item.price}</h1>
				</div>
		`;
};

// Render the list view as a table
const renderList = (data: any[]) => {
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
						${data.map(renderListItem).join("")}
					</tbody>
				</table>
		`;
};

// Render one item in list view as a table row
const renderListItem = (item: any) => {
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
};

// Function to fetch products
function fetchProducts() {
	fetch("https://fakestoreapi.com/products")
		.then((response) => response.json())
		.then((data) => {
			renderProducts(data);
		})
		.catch((error) => console.error("Error fetching data:", error));
}

// Event Listener to change view
document.getElementById("changeView")?.addEventListener("click", () => {
	isCardView = !isCardView;
	const gridIcon = document.querySelector(".grid-icon");
	if (!gridIcon) return;
	gridIcon.innerHTML = isCardView ? "&#8801;" : "&#9638;";
	fetchProducts();
});

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
							<button onclick="incrementCartCount(); closeModal();">Add to Cart</button>
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

// Init
fetchProducts();
