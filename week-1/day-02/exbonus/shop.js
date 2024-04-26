let isCardView = true;

const renderProducts = (data) => {
	const container = document.querySelector(".container");
	container.innerHTML = isCardView
		? data.map(renderCard).join("")
		: renderList(data);
};

// Render one item in card view
const renderCard = (item) => {
	return `
				<div class="card">
					<img src="${item.image}" alt="${item.title}"/>
					<h1>${item.title}</h1>
					${item.description}
					<h4>${item.category}</h4>
					<h1>$ ${item.price}</h1>
				</div>
		`;
};

// Render the list view as a table
const renderList = (data) => {
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
const renderListItem = (item) => {
	return `
			<tr>
					<td>${item.id}</td>
					<td><img src="${item.image}" alt="${item.title}" class="list-icon"/></td>
					<td>${item.title}</td>
					<td>${item.description}</td>
					<td>${item.category}</td>
					<td>$ ${item.price}</td>
			</tr>
	`;
};

// Event Listener to change view
document.getElementById("changeView").addEventListener("click", () => {
	isCardView = !isCardView;
	fetch("store.json")
		.then((response) => response.json())
		.then((data) => {
			renderProducts(data);
		})
		.catch((error) => console.error("Error fetching data:", error));
});

// Init
fetch("store.json")
	.then((response) => response.json())
	.then((data) => {
		renderProducts(data);
	})
	.catch((error) => console.error("Error fetching data:", error));
