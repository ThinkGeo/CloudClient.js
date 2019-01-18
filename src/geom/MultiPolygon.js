import BaseGeometry from './BaseGeometry';
import GeometryType from './GeometryType';

class MultiPolygon extends BaseGeometry {
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }

    getType() {
        return GeometryType.MULTI_POLYGON;
    }

    encodeGeometry() {

        let array = [];
        for (let m = 0, mm = this.coordinates.length; m < mm; m++) {
            let polygonCoordinates = this.coordinates[m];
            let polygonArray = [];
            for (let l = 0, ll = polygonCoordinates.length; l < ll; l++) {
                let linearCoordinates = polygonCoordinates[l];
                let linearArray = [];
                for (let i = 0, ii = linearCoordinates.length; i < ii; ++i) {
                    linearArray.push(linearCoordinates[i].join(' '));
                }
                polygonArray.push('(' + linearArray.join(', ') + ')');
            }
            array.push('(' + polygonArray.join(', ') + ')');
        }

        return array.join(', ');
    }
}

export default MultiPolygon;