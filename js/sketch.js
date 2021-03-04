let imgRoca;
let imgPacUp;
let imgPacLeft;
let imgPacRight;
let imgPacDown;
let imgFood;
let imgGhost;
let pacman;
let game = new Game();
let arrayRoca = [];
let arrayFood = [];
let timer = 0;
let win = false;
let mode = localStorage.getItem("mode");
if(mode === "3"){
    timer = 20;
}else if (mode === "2"){
    timer = 50;
}else if(mode === "1"){
    timer = 80;
}
let canvas;

function preload() {
    imgRoca = loadImage('img/roca.png');
    imgFood = loadImage('img/food.png');
    imgPacUp = loadImage('img/pacUp.png');
    imgPacLeft = loadImage('img/pacLeft.png');
    imgPacRight = loadImage('img/pacRight.png');
    imgPacDown = loadImage('img/pacDown.png');
    imgGhost = loadImage('img/ghost.png');
}

function setup() {
    canvas = createCanvas(game.gameRows * game.sizeImg, game.gameCol * game.sizeImg + game.sizeImg);
    canvas.parent('canvas');
    textSize(16);
    pacman = new Pacman(3*game.sizeImg, 11*game.sizeImg);
    let c;
    let r;
    for(c = 0; c < game.gameCol; c++) {
        for(r = 0; r < game.gameRows; r++) {
            if (game.map[c][r] == 1) {
                arrayRoca.push(new Rock(game.sizeImg*r,game.sizeImg*c+32));
            }
        }
    }
    for(c = 0; c < game.gameCol; c++) {
        for (r = 0; r < game.gameRows; r++) {
            if (game.map[c][r] == 2) {
                arrayFood.push(new Food(game.sizeImg * r, game.sizeImg * c + 32));
            }
        }
    }
    let button = createButton("reset Game");
    button.parent('canvas');
    button.mousePressed(resetGame);
}

function draw() {
    background(100);
    textAlign(CENTER, CENTER);
    textSize(23);

    if (frameCount % 60 == 0 && timer > 0) {
        timer --;
    }
    if(win === false) {
        if (timer != 0) {
            if (arrayFood.length != 0) {
                let i;
                text("Time: " + timer, 50, 20);
                text("Score: " + pacman.score, 200, 20);
                text("Lives: " + pacman.vides, 350, 20);
                text("User: " + localStorage.getItem("user"), 500, 20);
                for (i = 0; i < arrayRoca.length; i++) {
                    arrayRoca[i].show();
                }
                for (i = 0; i < arrayFood.length; i++) {
                    arrayFood[i].show();
                }
                let ghost = new Ghost(game.sizeImg * 11, game.sizeImg * 8 + 32);
                let ghost2 = new Ghost(game.sizeImg * 12, game.sizeImg * 8 + 32);
                let ghost3 = new Ghost(game.sizeImg * 10, game.sizeImg * 8 + 32);
                ghost.show();
                ghost2.show();
                ghost3.show();
                if (pacman.direction === 1) {
                    pacman.show(imgPacUp);
                } else if (pacman.direction === 2) {
                    pacman.show(imgPacDown);
                } else if (pacman.direction === 3) {
                    pacman.show(imgPacLeft);
                } else if (pacman.direction === 4) {
                    pacman.show(imgPacRight);
                }
            } else {
                win = true;
            }
        } else {
            text("GAME OVER", width / 2, height * 0.5);
            text("Has fet un Score de:" + pacman.score, width / 2, height * 0.6);
            arrayFood = [];
        }
    }else{
        text("WIN", width / 2, height * 0.5);
    }
}

function resetGame(){
    let c;
    let r;
    win = false;
    if(mode === "3"){
        timer = 20;
    }else if (mode === "2"){
        timer = 50;
    }else if(mode === "1"){
        timer = 80;
    }
    arrayFood = [];
    for(c = 0; c < game.gameCol; c++) {
        for(r = 0; r < game.gameRows; r++) {
            if (game.map[c][r] == 2) {
                arrayFood.push(new Food(game.sizeImg*r,game.sizeImg*c+32));
            }
        }
    }
    pacman.coordY = 11*game.sizeImg;
    pacman.coordX = 3*game.sizeImg;
    pacman.direction = 4;
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