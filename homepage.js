let emojiFont;
let pixelFont;
let emojiList = ["🫠","🎃","🔥","❤️‍🔥","👻","🍰","🌈","🍓","🥥","🫥","💩","❤️","☠️","😈","🤡","💥","🦠","🧠","🫧","💧","❄️","🍔","🥞","🎲","🎨","🎄","🏈","⚽","🏀","👺","🍄","🥑","🧀","🫖","🎄","📸","🎮","🎸","🎧","👑","💸","💽","💰","📈","💎","💡","⚖️","🎯","🪩","🧊","🥭","🐮","🌸","🪷","🏵️","👹","🌝","🌚","👾","🤑","💘"];
let emojiObjectList = [];
function preload() {
	emojiFont = loadFont('NotoEmoji-VariableFont_wght.ttf');
	pixelFont = loadFont('PixelifySans-VariableFont_wght.ttf');
}
function setup() {
	let homepageCanvas = createCanvas(windowWidth, windowHeight);
	homepageCanvas.parent("#p5-canvas-homepage-div");
	emojiList = shuffle(emojiList);
	for (let i = 0; i < 8; i++) {
		emojiObjectList.push(new Emoji(emojiList[i]));
	}
}
function draw() {
	background(0, 0, 0);
	emojiObjectList.forEach((emojiObject) => {
		emojiObject.move();
		emojiObject.show();
	});
}
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function shuffle(array) {
	let currentIndex = array.length;
	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random()*currentIndex);
		curentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
}
class Emoji {
	constructor(emojiSymbol){
		this.emojiText = emojiSymbol;
		this.size = randomInt(250,350);
		this.angle = radians(randomInt(0,360));
		this.rotationSpeed = randomInt(-50, 50)*0.001;
		this.x = randomInt(Math.ceil(0 + this.size/2), Math.floor(windowWidth-this.size/2));
		this.y = randomInt(Math.ceil(0 + this.size/2), Math.floor(windowHeight-this.size/2));
		this.speedX = randomInt(1, 4);
		this.speedY = randomInt(1, 4);
		this.dirX = randomInt(1, 2);
		if (this.dirX == 2) {
			this.dirX = -1;
		}
		this.dirY = randomInt(1, 2);
		if (this.dirY ==2) {
			this.dirY = -1;
		}
		this.color = color(randomInt(0, 255), randomInt(0,255), randomInt(0, 255));
	}
	show () {
		push();
		translate(this.x, this.y);
		rotate(this.angle);
		textFont(emojiFont);
		textSize(this.size);
		fill (this.color);
		textAlign(CENTER, CENTER);
		text(this.emojiText, 0, 0);
		pop();
	}
	move() {
		this.angle += this.rotationSpeed;
		if (this.x < (0 + this.size/2) || this.x > (windowWidth - this.size/2)) {
			this.dirX*=-1;
		}
		this.x += this.speedX*this.dirX;
		if (this.y < (0 + this.size/2) || this.y > (windowHeight - this.size/2)) {
			this.dirY*=-1;
		}
		this.y += this.speedY*this.dirY;
	}
}