class ReverseGeocodingResult {
    constructor() {

    }

    /**
     * @param {Feature} queryFeature
     * @param {ReverseGeocodingLocation} bestMatchLocation
     * @param {ThinkGeoCloudApplicationException} exception
     * @public
     */
    ReverseGeocodingResult(queryFeature, bestMatchLocation, exception) {

    }

    get QueryFeature() {}

    get BestMatchLocation() {}

    get NearbyLocations() {}

    get Exception() {}
}

export default ReverseGeocodingResult;