export class Point2{
    x:number;
    y:number;
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