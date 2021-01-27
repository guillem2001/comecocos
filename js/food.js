class Food extends Gameobject {

    constructor(x,y) {
        super(x,y);
    }

    show(){
        image(imgFood, this.coordX,this.coordY);
    }

}