let plans = document.querySelectorAll(".plans .plan");
let toggleBtn = document.querySelector(".toggle-container .toggle-btn");
let prices = document.querySelectorAll(".plans .plan .plan-price");
let features = document.querySelectorAll(".feature");
const nextBtnHomePage = document.querySelector("#next-home");
const nextBtnPlanPage = document.querySelector("#next-plan");
const nextBtnAddOnsPage = document.querySelector("#add-ons-plan");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addOnsPage = document.getElementById("add-ons-page");
const forminputs = document.querySelectorAll("form input");
const storage = window.localStorage;

const activePlan = "plan-active";
plans.forEach((plan) => {
	plan.addEventListener("click", (e) => {
		nextBtnPlanPage.style =
			"background-color:var(--Marine-blue);cursor:pointer";
		nextBtnPlanPage.href = "./add-ons.html";
		plans.forEach((p) => {
			p.classList.remove(activePlan);
		});
		plan.classList.add(activePlan);
	});
});
if (nextBtnHomePage != null) {
	nextBtnHomePage.addEventListener("click", () => {
		window.history.pushState({ page: "plan.html" }, "plan.html", "/plan.html");
		console.log("sanbanass61@gmail.com");
	});
}
if (nextBtnAddOnsPage) {
	nextBtnAddOnsPage.style =
		"background-color: hsla(213, 96%, 18%, 0.6);cursor: not-allowed";
}
if (nextBtnPlanPage) {
	nextBtnPlanPage.style =
		"background-color: hsla(213, 96%, 18%, 0.6);cursor: not-allowed";
}
if (nextBtnHomePage != null) {
	nextBtnHomePage.style =
		"background-color: hsla(213, 96%, 18%, 0.6);cursor: not-allowed";
}

function checkIfNotEmpty() {
	const emptyForms =
		forminputs[0].value != "" &&
		forminputs[1].value != "" &&
		forminputs[2].value != "";

	const emptyFormStorageValues =
		storage.getItem("name")?.length > 0 &&
		storage.getItem("email")?.length > 0 &&
		storage.getItem("phone")?.length > 0;

	if (emptyForms || emptyFormStorageValues) {
		nextBtnHomePage.href = "./plan.html";
		nextBtnHomePage.style =
			"background-color:var(--Marine-blue);cursor:pointer";
	} else {
		nextBtnHomePage.style =
			"background-color: hsla(213, 96%, 18%, 0.6);cursor: not-allowed";
	}
}
if (forminputs[0] != null && forminputs[1] != null && forminputs[2] != null) {
	checkIfNotEmpty();
}

if (nameInput !== null && emailInput !== null && phoneInput !== null) {
	nameInput.oninput = function (e) {
		storage.setItem("name", nameInput.value);

		if (nameInput.value == "") {
			nameInput.style.outline = "2px solid var(--Strawberry)";
			nameInput.previousElementSibling.children[1].style.display = "block";
		} else {
			nameInput.style.outline = "2px solid var(--Purplish-blue)";
			nameInput.previousElementSibling.children[1].style.display = "none";
		}
		checkIfNotEmpty();
	};

	emailInput.oninput = function (e) {
		storage.setItem("email", emailInput.value);

		if (emailInput.value == "") {
			emailInput.style.outline = "2px solid var(--Strawberry)";
			emailInput.previousElementSibling.children[1].style.display = "block";
		} else {
			emailInput.style.outline = "2px solid var(--Purplish-blue)";
			emailInput.previousElementSibling.children[1].style.display = "none";
		}
		checkIfNotEmpty();
	};

	phoneInput.oninput = function (e) {
		storage.setItem("phone", phoneInput.value);
		if (phoneInput.value == "") {
			phoneInput.style.outline = "2px solid var(--Strawberry)";
			phoneInput.previousElementSibling.children[1].style.display = "block";
		} else {
			phoneInput.style.outline = "2px solid var(--Purplish-blue)";
			phoneInput.previousElementSibling.children[1].style.display = "none";
		}
		checkIfNotEmpty();
	};

	nameInput.value = storage.getItem("name");
	emailInput.value = storage.getItem("email");
	phoneInput.value = storage.getItem("phone");
}

toggleBtn?.addEventListener("click", () => {
	const thumb = toggleBtn.firstElementChild;
	if (thumb.classList.contains("animate-x")) {
		thumb.classList.remove("animate-x");
		prices[0].textContent = "$9/mo";
		prices[1].textContent = "$12/mo";
		prices[2].textContent = "$15/mo";

		console.log(storage.getItem("istoggled"));
	} else {
		thumb.classList.add("animate-x");
		prices[0].textContent = "$90/yr";
		prices[1].textContent = "$120/yr";
		prices[2].textContent = "$150/yr";
	}

	plans.forEach((plan) => {
		plan.children[3].classList.toggle("hide");
	});
});

function strTobool(str) {
	return str === "true" ? true : false;
}

features.forEach((feature) => {
	let checked = false;
	feature.addEventListener("click", (e) => {
		checked = !checked;

		feature.classList.toggle("feature-active", checked);

		feature.firstElementChild.checked = checked;
		if (
			Array.from(features).some((feature) => {
				return feature.classList.contains("feature-active");
			})
		) {
			nextBtnAddOnsPage.style =
				"background-color:var(--Marine-blue);cursor:pointer";
			nextBtnAddOnsPage.href = "./finishing-up.html";
		} else {
			nextBtnAddOnsPage.style =
				"background-color: hsla(213, 96%, 18%, 0.6);cursor: not-allowed";
			nextBtnAddOnsPage.href = "";
		}
	});
});
