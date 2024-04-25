document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector("form");
	const num1Input = document.getElementById("num1");
	const num2Input = document.getElementById("num2");
	const operationSelect = document.getElementById("operation");
	const resultDiv = document.getElementById("result-div");
	const resultDisplay = document.getElementById("result");

	// Function to convert commas to dots
	function filterInput(num) {
		num.value = num.value.replace(/,/g, ".");
		return num.value;
	}

	// Function to validate the input
	function validateInput() {
		const num1 = filterInput(num1Input);
		const num2 = filterInput(num2Input);

		if (num1 === "" || num2 === "") {
			alert("Please enter both numbers");
			return false;
		}

		if (isNaN(num1) || isNaN(num2)) {
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
	function calculate() {
		if (!validateInput()) {
			resultDiv.style.display = "none";
			return;
		}

		const num1 = parseFloat(num1Input.value);
		const num2 = parseFloat(num2Input.value);
		const operation = operationSelect.value;

		let result;
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
		resultDisplay.textContent = result;
		resultDiv.style.display = "flex";
	}

	// Adding event listener to the form
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		calculate();
	});

	// Alert every 30 seconds
	setInterval(function () {
		alert("Use me Senpai! Onegaishimasu!");
	}, 30000);
});
