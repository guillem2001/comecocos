class Game {

    constructor() {
        this.numberRows = 4;
        this.numberCol = 4;
        this.sizeImg = 32;
        this.map = [1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1];
    }

    constructor(rows,columns) {
        this.numberRows = rows;
        this.numberCol = columns;
        this.sizeImg = 32;
        this.map = [1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1];
    }

}