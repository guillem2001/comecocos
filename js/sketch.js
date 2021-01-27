let imgRoca;
let imgPacUp;
let imgPacLeft;
let imgPacRight;
let imgPacDown;
let imgFood;
let pacman;
let game = new Game();
let arrayRoca = [];
let arrayFood = [];


function preload() {
    imgRoca = loadImage('img/roca.png');
    imgFood = loadImage('img/food.png');
    imgPacUp = loadImage('img/pacUp.png');
    imgPacLeft = loadImage('img/pacLeft.png');
    imgPacRight = loadImage('img/pacRight.png');
    imgPacDown = loadImage('img/pacDown.png');
}

function setup() {
    createCanvas(game.gameRows * game.sizeImg, game.gameCol * game.sizeImg);
    pacman = new Pacman(7*game.sizeImg, 7*game.sizeImg);
    for(c=0; c < game.gameCol; c++) {
        for(r=0; r < game.gameRows; r++) {
            if (game.map[c][r] == 1) {
                arrayRoca.push(new Rock(game.sizeImg*r,game.sizeImg*c));
            }
        }
    }
    for(c=0; c < game.gameCol; c++) {
        for(r=0; r < game.gameRows; r++) {
            if (game.map[c][r] == 2) {
                arrayFood.push(new Food(game.sizeImg*r,game.sizeImg*c));
            }
        }
    }
}

function draw() {
    background(100);
    for(i=0; i < arrayRoca.length;i++){
        arrayRoca[i].show();
    }
    for(i=0; i < arrayFood.length;i++){
        arrayFood[i].show();
    }
    if(pacman.direction === 1){
        pacman.show(imgPacUp);
    }else if(pacman.direction === 2){
        pacman.show(imgPacDown);
    }else if(pacman.direction === 3){
        pacman.show(imgPacLeft);
    }else if(pacman.direction === 4){
        pacman.show(imgPacRight);
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        pacman.moveUpper();
    } else if (keyCode === DOWN_ARROW) {
        pacman.moveDown();
    }
    if (keyCode === LEFT_ARROW) {
        pacman.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        pacman.moveRight();
    }

}