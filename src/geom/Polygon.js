import BaseGeometry from './BaseGeometry';
import GeometryType from './GeometryType';

class Polygon extends BaseGeometry {
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }

    getType() {
        return GeometryType.POLYGON;
    }

    encodeGeometry() {
        let array = [];
        for (let l = 0, ll = this.coordinates.length; l < ll; l++) {
            let linearCoordinates = this.coordinates[l];
            let linearArray = [];
            for (let i = 0, ii = linearCoordinates.length; i < ii; ++i) {
                linearArray.push(linearCoordinates[i].join(' '));
            }
            array.push('(' + linearArray.join(', ') + ')');
        }
        return array.join(', ');
    }
}

export default Polygon;