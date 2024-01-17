let easyButton = document.querySelector(".ez");
let mediumButton = document.querySelector(".mid");
let hardButton = document.querySelector(".sweat");
function setup() {
	if (localStorage.getItem("difficultyLevel") == "easy") {
		showEasyLevel();
	}
	else if(localStorage.getItem("difficultyLevel") == "medium") {
		showMediumLevel();
	}
	else if(localStorage.getItem("difficultyLevel") == "hard") {
		showHardLevel();
	}
	else {
		localStorage.setItem("difficultyLevel", "medium");
		showMediumLevel();
	}
}
function showEasyLevel() {
	mediumButton.classList.remove("btn-warning");
	mediumButton.classList.add("btn-outline-warning");
	hardButton.classList.remove("btn-warning");
	hardButton.classList.add("btn-outline-warning");
	easyButton.classList.remove("btn-outline-warning");
	easyButton.classList.add("btn-warning");
}
function showMediumLevel() {
	mediumButton.classList.remove("btn-outline-warning");
	mediumButton.classList.add("btn-warning");
	hardButton.classList.remove("btn-warning");
	hardButton.classList.add("btn-outline-warning");
	easyButton.classList.remove("btn-warning");
	easyButton.classList.add("btn-outline-warning");
}
function showHardLevel() {
	mediumButton.classList.remove("btn-warning");
	mediumButton.classList.add("btn-outline-warning");
	hardButton.classList.remove("btn-outline-warning");
	hardButton.classList.add("btn-warning");
	easyButton.classList.remove("btn-warning");
	easyButton.classList.add("btn-outline-warning");
}