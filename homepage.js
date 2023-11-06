let emojiFont;
let pixelFont;
let emojiList = ["🫠","🎃","🔥","❤️‍🔥","👻","🍰","🌈","🍓","🥥","🫥","💩","❤️","☠️","😈","🤡","💥","🦠","🧠","🫧","💧","❄️","🍔","🥞","🎲","🎨","🎄","🏈","⚽","🏀","👺","🍄","🥑","🧀","🫖","🎄","📸","🎮","🎸","🎧","👑","💸","💽","💰","📈","💎","💡","⚖️","🎯","🪩","🧊","🥭","🐮","🌸","🪷","🏵️","👹","🌝","🌚","👾","🤑","💘"];
let emojiObject;
function preload() {
	emojiFont = loadFont('NotoEmoji-VariableFont_wght.ttf');
	pixelFont = loadFont('PixelifySans-VariableFont_wght.ttf');
}
function setup() {
	let homepageCanvas = createCanvas(windowWidth, windowHeight);
	homepageCanvas.parent("#p5-canvas-homepage-div");
	emojiObject = new Emoji("😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐");
}
function draw() {
	background(0, 0, 0);
	emojiObject.show();
}
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
class Emoji {
	constructor(emojiSymbol){
		this.emojiText = emojiSymbol;
		this.size = randomInt(50,400);
		this.angle = radians(randomInt(0,360));
		this.rotationSpeed = randomInt(2, 10)*0.01;
		this.x = randomInt(0, windowWidth);
		this.y = randomInt(0, windowHeight);
		this.speedX = randomInt(2, 10);
		this.speedY = randomInt(2, 10);
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
		text(this.emojiText, 0, 0);
		pop();
	}
}