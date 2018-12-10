class ElevationResult {
    constructor() {

    }

    /**
     * @param {Collection<ElevationPointResult>} elevationPoints
     * @param {ElevationPointResult} highestElevationPoint
     * @param {ElevationPointResult} lowestElevationPoint
     * @param {double} averageElevation
     * @public
     */
    ElevationResult(elevationPoints, highestElevationPoint, lowestElevationPoint, averageElevation) {

    }

    getElevationPoints(){
        return ElevationPoints;
    }

    getLowestElevationPoint(){
        return LowestElevationPoint;
    }

    getElevationPointResult(){
        return ElevationPointResult;
    }

    getAverageElevation(){
        return AverageElevation;
    }
}

export default ElevationResult;