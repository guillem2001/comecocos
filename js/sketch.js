let imgRoca;
let game = new Game();
let arrayRoca = [];


function preload() {
    imgRoca = loadImage('img/roca.png');
}

function setup() {
    createCanvas(game.gameRows * game.sizeImg, game.gameCol * game.sizeImg);
    //createCanvas( 500,500);

    for(r=0; r < game.gameRows; r++) {
        for(c=0; c < game.gameRows; c++) {
            if (game.map[r][c] == 1) {
                arrayRoca.push(new Rock(game.sizeImg*r,game.sizeImg*c));
            }
        }
    }
    console.log(arrayRoca);
}

function draw() {
    background(100);
    for(i=0; i < arrayRoca.length;i++){
        arrayRoca[i].show();
    }
}