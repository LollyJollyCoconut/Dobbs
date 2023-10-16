let emojiFont;
let pixelFont;
let emojiList = ["🫠","🎃","🔥","❤️‍🔥","👻","⚡","🌈","🍓","🥥","🫥","💩","❤️","☠️","😈","🤡","💥","🦠","🧠","🫧","💧","❄️","🍔","🥞","🎲","🎨","🎄","🏈","⚽","🏀"];
function preload() {
	emojiFont = loadFont('NotoColorEmoji-Regular.ttf');
	pixelFont = loadFont('PixelifySans-VariableFont_wght.ttf');
}
function setup() {
	let homepageCanvas = createCanvas(windowWidth, windowHeight);
	homepageCanvas.parent("#p5-canvas-homepage-div");
}
function draw() {
	background(0, 0, 0);
}