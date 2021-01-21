class Pacman extends Gameobject {

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
        this.coordY = this.coordY - game.sizeImg;
        this.direction = 1;
        this.show(imgPacUp);
    }

    moveDown(){
        this.coordY = this.coordY + game.sizeImg;
        this.direction = 2;
        this.show(imgPacDown);
    }

    moveLeft(){
        this.coordX = this.coordX - game.sizeImg;
        this.direction = 3;
        this.show(imgPacLeft);
    }

    moveRight(){
        this.coordX = this.coordX + game.sizeImg;
        this.direction = 4;
        image(imgPacRight, this.coordX,this.coordY);
        this.show(imgPacRight);
    }
}