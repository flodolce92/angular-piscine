document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	const num1Input = document.getElementById("num1") as HTMLInputElement;
	const num2Input = document.getElementById("num2") as HTMLInputElement;
	const operationSelect = document.getElementById(
		"operation"
	) as HTMLSelectElement;
	const resultDiv = document.getElementById("result-div") as HTMLDivElement;
	const resultDisplay = document.getElementById("result") as HTMLSpanElement;

	if (!form) {
		console.error("Form not found!");
		return;
	}

	// Function to convert commas to dots
	function filterInput(num: HTMLInputElement): string {
		num.value = num.value.replace(/,/g, ".");
		return num.value;
	}

	// Function to validate the input
	function validateInput(): boolean {
		const num1 = filterInput(num1Input);
		const num2 = filterInput(num2Input);

		if (num1 === "" || num2 === "") {
			alert("Please enter both numbers");
			return false;
		}

		if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
			alert("Please enter valid numbers");
			return false;
		}

		if (parseFloat(num2) === 0 && operationSelect.value === "divide") {
			alert("HA! you tried to create a black hole! NOICE!");
			return false;
		}

		// Check if num1 or num2 is negative
		if (parseFloat(num1) < 0 || parseFloat(num2) < 0) {
			alert("Negative numbers are not real and can't hurt you!");
			return false;
		}

		return true;
	}

	// Function to calculate the result
	function calculate(): void {
		if (!validateInput()) {
			resultDiv.style.display = "none";
			return;
		}

		const num1 = parseFloat(num1Input.value);
		const num2 = parseFloat(num2Input.value);
		const operation = operationSelect.value;

		let result: number | string;
		switch (operation) {
			case "add":
				result = num1 + num2;
				break;
			case "subtract":
				result = num1 - num2;
				break;
			case "multiply":
				result = num1 * num2;
				break;
			case "divide":
				result = num1 / num2;
				break;
			default:
				result = "Invalid operation";
		}

		console.log(result);
		resultDisplay.textContent = result.toString();
		resultDiv.style.display = "flex";
	}

	// Adding event listener to the form
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		calculate();
	});

	// Alert every 30 seconds
	setInterval(() => {
		alert("Use me Senpai! Onegaishimasu!");
	}, 30000);
});
