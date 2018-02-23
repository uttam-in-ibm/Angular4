class Point2{
    x:number;
    y:number;
    //Constructor
    // ? is for optional --  all should be optional
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }
    draw(){
        console.log('X '+ this.x + ' Y '+ this.x);
    }
    getDistance(another:Point2){

    }
}
// Objects
let points = new Point2(1,2);
//point.x=1;
//point.y=2;
points.draw();

