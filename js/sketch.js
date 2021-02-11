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
let timer = 10;


function preload() {
    imgRoca = loadImage('img/roca.png');
    imgFood = loadImage('img/food.png');
    imgPacUp = loadImage('img/pacUp.png');
    imgPacLeft = loadImage('img/pacLeft.png');
    imgPacRight = loadImage('img/pacRight.png');
    imgPacDown = loadImage('img/pacDown.png');
}

function setup() {
    createCanvas(game.gameRows * game.sizeImg, game.gameCol * game.sizeImg + game.sizeImg);
    textSize(16);
    pacman = new Pacman(3*game.sizeImg, 11*game.sizeImg);
    for(c=0; c < game.gameCol; c++) {
        for(r=0; r < game.gameRows; r++) {
            if (game.map[c][r] == 1) {
                arrayRoca.push(new Rock(game.sizeImg*r,game.sizeImg*c+32));
            }
        }
    }
    for(c=0; c < game.gameCol; c++) {
        for(r=0; r < game.gameRows; r++) {
            if (game.map[c][r] == 2) {
                arrayFood.push(new Food(game.sizeImg*r,game.sizeImg*c+32));
            }
        }
    }
}

function draw() {
    background(100);
    textAlign(CENTER, CENTER);
    textSize(23);

    if (frameCount % 60 == 0 && timer > 0) {
        timer --;
    }
    if(timer != 0){
        text("Time:"+timer, 50, 20);
        text("Score:"+pacman.score, 150, 20);
        text("Lives:"+pacman.vides, 250, 20);
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
    }else{
        text("GAME OVER", width/2, height*0.7);
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