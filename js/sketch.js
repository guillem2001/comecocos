let img;
let game = new Game();

function preload() {
    img = loadImage('img/roca.png');
}
function setup() {

    for(let i=0; i<game.numberRows; i++){
        if(game.map[i] == 1){
            image(img,0,0);
        }
    }

}