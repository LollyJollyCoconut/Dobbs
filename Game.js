let easyButton = document.querySelector(".ez");
let mediumButton = document.querySelector(".mid");
let hardButton = document.querySelector(".sweat");
let orderOfPlane = 6;
let numOfSymbolsOnOneCard = orderOfPlane + 1;
let cardDeck = [];
let currentCard = [];
easyButton.addEventListener("click", function(event){
	localStorage.setItem("difficultyLevel","easy");
	showEasyLevel();
});
mediumButton.addEventListener("click", function(event){
	localStorage.setItem("difficultyLevel", "medium");
	showMediumLevel();
});
hardButton.addEventListener("click", function(event) {
	localStorage.setItem("difficultyLevel", "hard");
	showHardLevel();
})
function setup() {
	// let gameCanvas = createCanvas(windowWidth, windowHeight-105);
	// gameCanvas.parent("#p5-canvas-homepage-div");
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
function draw() {
	background(255);
}
function showEasyLevel() {
	orderOfPlane = 3;
	buildCardDeck(orderOfPlane);
	console.log(cardDeck);
	mediumButton.classList.remove("btn-warning");
	mediumButton.classList.add("btn-outline-warning");
	hardButton.classList.remove("btn-warning");
	hardButton.classList.add("btn-outline-warning");
	easyButton.classList.remove("btn-outline-warning");
	easyButton.classList.add("btn-warning");
}
function showMediumLevel() {
	orderOfPlane = 6;
	buildCardDeck(orderOfPlane);
	console.log(cardDeck);
	mediumButton.classList.remove("btn-outline-warning");
	mediumButton.classList.add("btn-warning");
	hardButton.classList.remove("btn-warning");
	hardButton.classList.add("btn-outline-warning");
	easyButton.classList.remove("btn-warning");
	easyButton.classList.add("btn-outline-warning");
}
function showHardLevel() {
	orderOfPlane = 11;
	buildCardDeck(orderOfPlane);
	console.log(cardDeck);
	mediumButton.classList.remove("btn-warning");
	mediumButton.classList.add("btn-outline-warning");
	hardButton.classList.remove("btn-outline-warning");
	hardButton.classList.add("btn-warning");
	easyButton.classList.remove("btn-warning");
	easyButton.classList.add("btn-outline-warning");
}
function buildCardDeck(planeOrder) {
	let numberOfSymbolsOnCard = planeOrder + 1;
	cardDeck = [];
	currentCard = [];
	for(let i = 1; i <= planeOrder + 1; i++) {
		currentCard.push(i);
	}
	cardDeck.push(currentCard);
	for (let j = 1; j <= planeOrder; j++) {
		currentCard = [];
		currentCard.push(1);
		for(let k = 1; k <= planeOrder; k++) {
			currentCard.push(planeOrder*j + (k+1));
		}
		cardDeck.push(currentCard);
	}
	for (let i = 1; i <= planeOrder; i++) {
		for (let j = 1; j <= planeOrder; j++) {
			currentCard = [];
			currentCard.push(i + 1);
			for (let k = 1; k <= planeOrder; k++) {
				currentCard.push(planeOrder+2+planeOrder*(k-1)+(((i-1)*(k-1)+j-1)%planeOrder));
			}
			cardDeck.push(currentCard);
		}
	}
}