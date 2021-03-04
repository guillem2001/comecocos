class Ghost extends Gameobject {

    constructor(x,y) {
        super(x,y);
    }

    show(){
        image(imgGhost, this.coordX,this.coordY);
    }

}