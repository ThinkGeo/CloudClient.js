class ElevationPointResult {
    constructor() {

    }

    /**
     * @param {double} elevation
     * @param {PointShape} point
     * @param {ThinkGeoCloudApplicationException} exception
     * @public
     */
    ElevationPointResult(elevation, point, exception) {

    }

    get Elevation(){
        return Elevation;
    }

    get Point(){
        return Point;
    }

    get Exception(){
        return Exception;
    }
}

export default ElevationPointResult;