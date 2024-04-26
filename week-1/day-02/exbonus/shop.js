let isCardView = true;

const renderProducts = (data) => {
	const container = document.querySelector(".container");
	container.innerHTML = data
		.map((item) => {
			return isCardView
				? `
				<div class="card">
					<table>
						<tr>
							<td>
								<img
									src="${item.image}"
									alt="${item.title}"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<h1>${item.title}</h1>
							</td>
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
				`
				: `
				<div class="list-item">
					<div class="list-id">${item.id}</div>
					<div class="list-content">
						<img src="${item.image}" alt="${item.title}" class="list-icon"/>
						<div class="list-details">
							<h2>${item.title}</h2>
							<p>${item.description}</p>
							<h4>${item.category}</h4>
							<h1>$ ${item.price}</h1>
						</div>
					</div>
				</div>
				`;
		})
		.join("");
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
