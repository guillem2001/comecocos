class Pacman extends Gameobject {

    MAX_LEFT = 0;
    MAX_RIGHT = game.sizeImg*game.gameCol;
    MAX_UP = 0;
    MAX_DOWN = game.sizeImg*game.gameRows;


    constructor(x,y) {
        super(x,y);
        this.vides = 3;
        this.direction = 1;
        this.speed = 0;
    }

    /*
    * 1 - up
    * 2 - down
    * 3 - left
    * 4 - right
    * */

    show(img){
        image(img, this.coordX,this.coordY);
    }

    showInstanceMode(p, image){
        p.image(image, this.coordX,this.coordY);
    }
    moveUpper(){
        let size = game.sizeImg;
        if((this.coordY-size)>=this.MAX_UP){
            this.coordY = this.coordY - game.sizeImg;
        }
        this.direction = 1;
    }

    moveDown(){
        let size = game.sizeImg;
        if((this.coordY+size)<this.MAX_DOWN) {
            this.coordY = this.coordY + game.sizeImg;
        }
        this.direction = 2;
    }

    moveLeft(){
        let size = game.sizeImg;
        if((this.coordX-size)>=this.MAX_LEFT){
            this.coordX = this.coordX - game.sizeImg;
        }
        this.direction = 3;
    }

    moveRight(){
        let size = game.sizeImg;
        if((this.coordX+size)<this.MAX_RIGHT){
            this.coordX = this.coordX + game.sizeImg;
        }
        this.direction = 4;
    }
}