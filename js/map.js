const maze = [1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1];
const row = 4;
const columns = 4;
const size_image = 32;
class Map {
    constructor() {

    }
    get maze(){
        return maze;
    }
    get row(){
        return row;
    }
    get columns(){
        return columns;
    }
    get size_image(){
        return size_image;
    }
}