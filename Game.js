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
	noCanvas();
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
class emojiButton() {
	constructor(emojiSymbol, parent) {
		this.text = emojiSymbol;
		this.fontSize = randomInt(50, 150);
		this.topPos = randomInt(7, 80);
		this.leftPos = randomInt(7 ,80);
		this.rotationAngle = randomInt(0, 360);
		this.parentElement = parent;
		this.button = "";
	}
	createButton() {
		this.button = document.createElement("button");
		this.button.textContent = this.text;
		this.button.style.fontSize = `${this.fontSize}px`;
		this.button.style.position = "absolute";
		this.button.style.left = `${this.leftPos}%`;
		this.button.style.top = `${this.topPos}%`;
		this.button.style.transform = `rotate(${this.rotationAngle}deg)`;
		this.button.style.backgroundColor = "transparent";
		this.button.style.borderRadius = "100%";
		this.button.style.padding = "0";
		this.button.classList.add = "btn";
		this.button.classList.add = "btn-warning-outline";
		this.button.type = "button";
		this.parentElement.appendChild(this.button);
		this.button.addEventListener("click", function(event) {
			console.log(this.text);
		});
	}
	changeText(newText) {
		this.button.textContent = newText;
	}
}