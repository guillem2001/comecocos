class Rock extends Gameobject {

    constructor() {
        super();
    }

    show (){
        img = loadImage('assets/laDefense.jpg');
        image(img, 0, 0);
    }

}