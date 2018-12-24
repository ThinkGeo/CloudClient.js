import BaseClient from "../Advanced/BaseClient";

class MapsRasterClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    GetRasterTile(style, resolution, srid, tileSize, tileZ, tileX, tileY, fileExtension, callback) {
        let baseUri = this.getNextCandidateBaseUri();
        let apiPath = `/api/v1/maps/raster/${style}/x${resolution}/${srid}/${tileSize}/${tileZ}/${tileX}/${tileY}.${fileExtension}`;
        let queryParameters = MapsRasterClient.getQueryParameters(this.apiKey);

        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);
        this.sendWebRequest(xhr, callback);
    }

    static getQueryParameters(apiKey) {
        let queryString;

        if (apiKey !== undefined) {
            queryString = "?ApiKey=" + apiKey;
        }

        return queryString;
    }

}

export default MapsRasterClient;