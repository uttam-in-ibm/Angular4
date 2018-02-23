var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X ' + this.x + ' Y ' + this.x);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
// Objects
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
