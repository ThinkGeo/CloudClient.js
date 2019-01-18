import BaseGeometry from './BaseGeometry';
import GeometryType from './GeometryType';

class Point extends BaseGeometry {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    getType()
    {
        return GeometryType.POINT;
    }

    encodeGeometry(){
        return this.x+" "+ this.y;
    }
}

export default Point;