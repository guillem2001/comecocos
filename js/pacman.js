class Pacman extends Gameobject {

    MAX_LEFT = 0;
    MAX_RIGHT = game.sizeImg*game.gameCol;
    MAX_UP = 0;
    MAX_DOWN = game.sizeImg*game.gameRows;
    SPEED = game.sizeImg;


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
        if((this.coordY-this.SPEED)>=this.MAX_UP && this.testCollide(this.coordX, this.coordY-this.SPEED) === false){
            this.coordY = this.coordY - this.SPEED;
        }
        this.direction = 1;
    }

    moveDown(){
        if((this.coordY+this.SPEED)<this.MAX_DOWN && this.testCollide(this.coordX, this.coordY+this.SPEED) === false) {
            this.coordY = this.coordY + this.SPEED;
        }
        this.direction = 2;
    }

    moveLeft(){
        if((this.coordX-this.SPEED)>=this.MAX_LEFT && this.testCollide(this.coordX-this.SPEED, this.coordY) === false){
            this.coordX = this.coordX - this.SPEED;
        }else if(this.testCollide(this.coordX-this.SPEED, this.coordY) === false && (this.coordX-this.SPEED)<this.MAX_LEFT){
            this.coordX = this.MAX_RIGHT - this.SPEED;
            console.log("hola");
        }
        this.direction = 3;
    }

    moveRight(){
        if((this.coordX+this.SPEED)<this.MAX_RIGHT && this.testCollide(this.coordX+this.SPEED, this.coordY) === false){
            this.coordX = this.coordX + this.SPEED;
        }else if(this.testCollide(this.coordX+this.SPEED, this.coordY) === false && (this.coordX+this.SPEED)===this.MAX_RIGHT){
            this.coordX = 0;
        }
        this.direction = 4;
    }

    testCollide(x, y){
        let rock = false;
        let food = false;
        let i = 0;
        for(i; i < arrayRoca.length && rock === false;i++){
            let distanceRockPacman = dist( x, y, arrayRoca[i].coordX, arrayRoca[i].coordY);
            if(distanceRockPacman < 32){
                rock = true;
            }
        }
        for(i = 0; i < arrayFood.length && food === false && rock === false;i++){
            let distanceFoodPacman = dist( x, y, arrayFood[i].coordX, arrayFood[i].coordY);
            if(distanceFoodPacman < 32){
                food = true;
                arrayFood = arrayFood.filter(item => item !== arrayFood[i]);
            }
        }
        return rock;
    }
}