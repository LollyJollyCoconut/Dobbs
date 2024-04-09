let emojiList = ["🫠","🎃","🔥","❤️‍🔥","👻","🍰","🌈","🍓","🥥","🫥","💩","❤️","☠️","😈","🤡","💥","🦠","🧠","🫧","❄️","🍔","🥞","🎲","🎨","🏈","⚽","🏀","👺","🥑","🧀","🫖","🎄","📸","🎮","🎸","🎧","👑","💸","💽","💰","📈","💎","💡","⚖️","🎯","🪩","🧊","🥭","🐮","🪷","👹","🌝","🌚","👾","🤑","💘", "🍉", "🫐", "🍕", "🥮", "🧋", "🩼", "🚲", "🗿", "🗽", "🎪", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🟤", "⚫", "⚪", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫", "⬛", "⬜", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "⛎", "♀️", "♂️", "🍆", "🐖", "🐑", "🐐", "💧", "🌺", "🏵️", "🌸", "🌻", "🌼", "🍄", "💀", "💪", "🦿", "🦾", "🦥", "🐆", "🦧", "🦍", "🐔", "🦅", "🏉", "🥎", "⚾", "🎾", "🥅", "🛹", "🥋", "🥇", "🥈", "🥉", "🏅", "🎖️", "🏆", "🎙️", "📻", "📺", "📼", "📹", "📽️", "🎥", "🎞️", "🎬", "🃏", "🀄", "🎰"];
let easyButtonList = document.querySelectorAll(".ez");
let mediumButtonList = document.querySelectorAll(".mid");
let hardButtonList = document.querySelectorAll(".sweat");
let orderOfPlane = 6;
let numOfSymbolsOnOneCard = orderOfPlane + 1;
let cardDeck = [];
let currentCard = [];
let gameTimer = 0;
let card1List = [];
let card2List = [];
let currentCardIndex = 0;
let maxGameTimer = 0;
let matchingEmojiText = "";
let card1Div = document.querySelector("#card1");
let card2Div = document.querySelector("#card2");
let emojiCardDeck = [];
let timerSpan = document.querySelector("#timer");
let gameTimerIntervalID;
let isGameOver;
let numOfCardsRemaining;
let difficultyModal = document.querySelector("#difficultyModal");
let difficultyModalObject = new bootstrap.Modal(difficultyModal);
let playButtonList = document.querySelectorAll("#play-button");
let scoreSpan = document.querySelector("#score");
let score = 0;
let gameOverModal = document.querySelector("#endModal");
let gameOverModalObject = new bootstrap.Modal(gameOverModal);
let gameOverModalTitle = document.querySelector("#endModalLabel");
let gameOverModalMessage = document.querySelector("#game-over-modal-message");

easyButtonList.forEach(function(easyButton) {
	easyButton.addEventListener("click", function(event){
		localStorage.setItem("difficultyLevel","easy");
		showEasyLevel();
	});
});
mediumButtonList.forEach(function(mediumButton) {
	mediumButton.addEventListener("click", function(event){
		localStorage.setItem("difficultyLevel", "medium");
		showMediumLevel();
	});
});
hardButtonList.forEach(function(hardButton) {
	hardButton.addEventListener("click", function(event) {
		localStorage.setItem("difficultyLevel", "hard");
		showHardLevel();
	});
});
playButtonList.forEach(function(playButton) {
	playButton.addEventListener("click", function(event) {
		difficultyModalObject.hide();
		gameOverModalObject.hide();
		startNewGame();
	});
});
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
	difficultyModalObject.show();
}
function draw() {
	if (isGameOver == false) {
		if (gameTimer <= 0) {
			isGameOver == true;
			stopDecrementingGameTimer();
			loseGame();
		}
		if (numOfCardsRemaining <= 0) {
			isGameOver = true;
			stopDecrementingGameTimer();
			winGame();
		}
	}
}
function shuffle(array) {
	let currentIndex = array.length;
	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random()*currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
}
function showEasyLevel() {
	orderOfPlane = 3;
	mediumButtonList.forEach(function(mediumButton) {
		mediumButton.classList.remove("btn-warning");
		mediumButton.classList.add("btn-outline-warning");
	});
	hardButtonList.forEach(function(hardButton) {
		hardButton.classList.remove("btn-warning");
		hardButton.classList.add("btn-outline-warning");
	});
	easyButtonList.forEach(function(easyButton) {
		easyButton.classList.remove("btn-outline-warning");
		easyButton.classList.add("btn-warning");
	});
	updateMaxGameTime();
}
function showMediumLevel() {
	orderOfPlane = 6;
	mediumButtonList.forEach(function(mediumButton) {
		mediumButton.classList.remove("btn-outline-warning");
		mediumButton.classList.add("btn-warning");
	});
	hardButtonList.forEach(function(hardButton) {
		hardButton.classList.remove("btn-warning");
		hardButton.classList.add("btn-outline-warning");
	});
	easyButtonList.forEach(function(easyButton) {
		easyButton.classList.remove("btn-warning");
		easyButton.classList.add("btn-outline-warning");
	});
	updateMaxGameTime();
}	
function showHardLevel() {
	orderOfPlane = 11;
	mediumButtonList.forEach(function(mediumButton) {
		mediumButton.classList.remove("btn-warning");
		mediumButton.classList.add("btn-outline-warning");
	});
	hardButtonList.forEach(function(hardButton) {
		hardButton.classList.remove("btn-outline-warning");
		hardButton.classList.add("btn-warning");
	});
	easyButtonList.forEach(function(easyButton) {
		easyButton.classList.remove("btn-warning");
		easyButton.classList.add("btn-outline-warning");
	});
	updateMaxGameTime();
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
	let shuffledEmojiList = shuffle(emojiList);
	cardDeck.forEach(function(card) {
		let currentEmojiCard = [];
		card.forEach(function(item) {
			let emojiButton = new EmojiButton(shuffledEmojiList[item-1]);
			currentEmojiCard.push(emojiButton);
		});
		emojiCardDeck.push(currentEmojiCard);
	});
	console.log(emojiCardDeck);
}

function randomInt(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
}

class EmojiButton {
	constructor(emojiSymbol) {
		this.text = emojiSymbol;
		this.fontSize = randomInt(50, 150);
		this.topPos = randomInt(20, 70);
		this.leftPos = randomInt(20 ,70);
		this.rotationAngle = randomInt(0, 360);
		this.parentElement = null;
		this.button = "";
		this.createButton();
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
		this.button.style.borderColor = "transparent";
		this.button.classList.add = "btn";
		this.button.classList.add = "btn-warning-outline";
		this.button.type = "button";
		this.button.addEventListener("click", function(event) {
			doButtonsMatch(event.target.innerText, event.target.parentNode.id);

		});
	}
	changeText(newText) {
		this.button.textContent = newText;
	}
	showButton(newParent) {
		this.parentElement = newParent;
		this.parentElement.appendChild(this.button);
	}
	deleteButton() {
		this.button.remove();
	}
}
function showEmojiCard(cardList, cardParentDiv) {
	cardList.forEach(function(button){
		button.showButton(cardParentDiv);
	});
}
function calculateMaxGameTime(planeOrder) {
	numOfCards = planeOrder*planeOrder + planeOrder + 1;
	if(localStorage.getItem("difficultyLevel") == "easy") {
		maxGameTimer = numOfCards * 3;
	}
	else if (localStorage.getItem("difficultyLevel") == "medium") {
		maxGameTimer = numOfCards * 3;
	}
	else if (localStorage.getItem("difficultyLevel") == "hard") {
		maxGameTimer = numOfCards * 3;
	}
}
function updateMaxGameTime() {
	calculateMaxGameTime(orderOfPlane);
	gameTimer = maxGameTimer;
	timerSpan.innerText = gameTimer;
}
function findMatchingEmojiButton(card1, card2) {
	matchingEmojiText = "";
	card1.forEach(function(item1) {
		card2.forEach(function(item2) {
			if (item1.text == item2.text) {
				matchingEmojiText = item1.text;
				console.log(matchingEmojiText);
			}
		});
	});
	if (matchingEmojiText == "") {
		matchingEmojiText = "impossible";
		console.log("No match found");
	}
}
function updateScore(newScore) {
	scoreSpan.innerText = newScore;
}
function startNewGame() {
	card1List.forEach(function(button) {
		button.deleteButton();
	});
	card2List.forEach(function(button) {
		button.deleteButton();
	});
	buildCardDeck(orderOfPlane);
	emojiCardDeck = shuffle(emojiCardDeck);
	numOfCardsRemaining = emojiCardDeck.length - 1;
	console.log(numOfCardsRemaining);
	currentCardIndex = 0;
	card1List = emojiCardDeck[currentCardIndex];
	showEmojiCard(card1List, card1Div);
	currentCardIndex += 1;
	card2List = emojiCardDeck[currentCardIndex];
	showEmojiCard(card2List, card2Div);
	updateMaxGameTime();
	findMatchingEmojiButton(card1List, card2List);
	createGameTimerInterval();
	isGameOver = false;
	score = 0;
	updateScore(score);
}
function changeColorTwice(element, color) {
	element.classList.add(color);
	setTimeout(function() {
		element.classList.remove(color);
	}, 1000);
}
function showNewCard(cardListToChange, cardParentToChange) {
	cardListToChange.forEach(function(emojiButton) {
		emojiButton.deleteButton();
	});
	cardListToChange = emojiCardDeck[currentCardIndex];
	showEmojiCard(cardListToChange, cardParentToChange);
	return cardListToChange;

}
function doButtonsMatch(buttonText, parentID) {
	if (buttonText == matchingEmojiText) {
		console.log("correct match");
		score += 5;
		updateScore(score);
		changeColorTwice(card1Div, "correct-match");
		changeColorTwice(card2Div, "correct-match");
		numOfCardsRemaining -= 1;
		currentCardIndex += 1;
		if (numOfCardsRemaining > 0) {
			if (parentID == "card1") {
				card2List = showNewCard(card2List, card2Div);
			} else {
				card1List = showNewCard(card1List, card1Div);
			}
			findMatchingEmojiButton(card1List, card2List);
		}
	} else {
		console.log("wrong match");
		score -= 2;
		updateScore(score);
		changeColorTwice(card1Div, "wrong-match");
		changeColorTwice(card2Div, "wrong-match");
	}
}
function createGameTimerInterval() {
	if(!gameTimerIntervalID) {
		gameTimerIntervalID = setInterval(decrementGameTimer, 1000);
	}
}
function decrementGameTimer() {
	gameTimer -= 1;
	timerSpan.innerText = gameTimer;
}
function stopDecrementingGameTimer() {
	clearInterval(gameTimerIntervalID);
	gameTimerIntervalID = null;
}
function winGame() {
	gameOverModalTitle.innerText = "Yay! You Won!";
	gameOverModalMessage.ineerText = "Would you like to play again? If so, consider trying a harder difficulty level: ";
	gameOverModalObject.show();
}
function loseGame() {
	gameOverModalTitle.innerText = "Oh no! The time ran out and you suck at this game! Better luck next time... My grandma can beat your score dawg. Womp womp.";
	gameOverModalMessage.innerText = "Would you like to play again? If so, consider trying an easier difficulty level because clearly you absolute trash: ";
	gameOverModalObject.show();
}