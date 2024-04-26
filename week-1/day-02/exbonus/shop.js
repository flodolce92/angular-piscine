let isCardView = true;

const renderProducts = (data) => {
	const container = document.querySelector(".container");
	container.innerHTML = data
		.map((item) => {
			return isCardView ? renderCard(item) : renderListItem(item);
		})
		.join("");
};

// Render one item in card view
const renderCard = (item) => {
	return `
				<div class="card">
						<table>
								<tr>
										<td><img src="${item.image}" alt="${item.title}"/></td>
								</tr>
								<tr>
										<td><h1>${item.title}</h1></td>
								</tr>
								<tr>
										<td>${item.description}</td>
								</tr>
								<tr>
										<td><h4>${item.category}</h4></td>
								</tr>
								<tr>
										<td><h1>$ ${item.price}</h1></td>
								</tr>
						</table>
				</div>
		`;
};

// Render one item in list view
const renderListItem = (item) => {
	return `
				<div class="list-item">
						<table>
								<tr>
										<td><div class="list-id">${item.id}</div></td>
										<td><img src="${item.image}" alt="${item.title}" class="list-icon"/></td>
										<td><h2>${item.title}</h2></td>
										<td><p>${item.description}</p></td>
										<td><h4>${item.category}</h4></td>
										<td><h1>$ ${item.price}</h1></td>
								</tr>
						</table>
				</div>
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
