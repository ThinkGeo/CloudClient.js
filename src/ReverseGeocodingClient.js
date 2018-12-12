import BaseClient from "./BaseClient.js";

class ReverseGeocodingClient extends BaseClient {
    constructor(clientId = 'clientId', clientSecret = 'clientSecret') {
        super(clientId, clientSecret);
    }

    /**
     * @param {double} x
     * @param {double} y
     * @param {int or string} pointProjection
     * @param {double} searchRadius
     * @param {DistanceUnit} unitOfsearchRadius
     * @param {ReverseGeocodingOptions} options
     * @public
     */
    async SearchAsync(...arg) {

    }
}

export default ReverseGeocodingClient;