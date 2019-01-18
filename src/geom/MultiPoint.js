import BaseGeometry from './BaseGeometry';
import GeometryType from './GeometryType';

class MultiPoint extends BaseGeometry {
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }

    getType() {
        return GeometryType.MULTI_POINT;
    }

    encodeGeometry() {
        let array = [];
        for (let i = 0, ii = this.coordinates.length; i < ii; i++) {
            let point = this.coordinates[i];
            array.push(point.join(' '));
        }
        return array.join(", ");
    }
}

export default MultiPoint;