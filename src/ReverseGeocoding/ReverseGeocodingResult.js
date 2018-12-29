class ReverseGeocodingResult {
    constructor(queryFeature, bestMatchLocation, exception) {
        this.queryFeature = queryFeature;
        this.bestMatchLocation = bestMatchLocation;
        this.exception = exception;
        this.nearbyLocations;
    }
}
export default ReverseGeocodingResult;