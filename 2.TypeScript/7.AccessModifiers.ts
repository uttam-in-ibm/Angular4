/*
Control Access for its members
default public - All
public
private 
protected
*/

class Point{
    private x:number;
    private y:number;
    //Constructor
    // ? is for optional all should be optional
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }
    draw(){
        console.log('X '+ this.x + ' Y '+ this.x);
    }
    getDistance(another:Point){

    }
}
// Objects
let point = new Point(1,2);

//point.x=1;
//point.y=2;
point.draw();