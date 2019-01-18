import BaseGeometry from './BaseGeometry';
import GeometryType from './GeometryType';

class Line extends BaseGeometry {
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }

    getType() {
        return GeometryType.LINE_STRING;
    }

    encodeGeometry() {
        let array = [];
        for (let i = 0, ii = this.coordinates.length; i < ii; ++i) {
            array.push(this.coordinates[i].join(' '));
        }
        return array.join(', ');
    }
}

export default Line;