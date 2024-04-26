fetch("store.json")
	.then((response) => response.json())
	.then((data) => {
		const container = document.getElementsByClassName("container")[0];
		container.innerHTML = data
			.map((item) => {
				return `
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
				`;
			})
			.join("");
	})
	.catch((error) => console.error("Error fetching data:", error));
