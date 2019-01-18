import BaseGeometry from './BaseGeometry';
import GeometryType from './GeometryType';


class MultiLine extends BaseGeometry {
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }

    getType() {
        return GeometryType.MULTI_LINE_STRING;
    }

    encodeGeometry() {
        let array = [];
        for (let l = 0, ll = this.coordinates.length; l < ll; l++) {
            let lineCoordinates = this.coordinates[l];
            let lineArray = [];
            for (let i = 0, ii = lineCoordinates.length; i < ii; i++) {
                let point = lineCoordinates[i];
                lineArray.push(point.join(' '));
            }
            array.push('(' + lineArray.join(", ") + ')');
        }
        return array.join(', ');
    }
}
export default MultiLine;