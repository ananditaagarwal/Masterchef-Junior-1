var jug, coldrink;
var plate, spoon, knife;
var chowmein, soup, pizza;
var diningRoom, diningRoomImage;
var glass1, glass2, glass3, glass4, glass5, glass6;

function preload() {
    diningRoomImage = loadImage("images/dining room.png");
}

function setup() {
    createCanvas(400, 400);
    diningRoom = createSprite(200, 200, 400, 400);
}

function draw() {
    background("black");

    imageMode(CENTER);
    
    drawSprites();
}