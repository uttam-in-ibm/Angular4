class Point{
    constructor(private _x?:number,private _y?:number){
    }
    draw(){
        console.log('X '+ this._x + ' Y '+ this._x);
    }
    getX(){
        return this._x;
    }
    set x(value){
        if(value<0)
            throw new Error('Value cannot be negative');
        this._x=value;    
    }
    get x(){  // Property
        return this._x;
    }
}

let point = new Point(1,2);
let x = point.x;  // Property
point.x = 10;     // looks like field but internally it's a function
point.draw();