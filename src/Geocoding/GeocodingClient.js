import BaseClient from "../Advanced/BaseClient";

class GeocodingClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getGeocodingResult(searchText, opt_options, callback) {
        const options = opt_options ? opt_options : ({});

        let baseUri = this.getNextCandidateBaseUri();
        let apiPath = `/api/v1/location/geocode/${searchText}`
        let queryParameters = GeocodingClient.getQueryParameters(
            options["locationType"],
            options["fuzzyMatch"],
            options["maxResults"],
            options["verboseResults"],
            options["projectionInSrid"],
            options["projectionInProj4String"],
            this.apiKey
        )

        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);
        this.sendWebRequest(xhr, callback);
    }

    static getQueryParameters(locationType, fuzzyMatch, maxResults, verboseResults, projectionInSrid, projectionInProj4String, apiKey) {
        var queryString = "?";

        if (locationType !== undefined) {
            queryString += "&LocationType=" + locationType;
        }

        if (fuzzyMatch !== undefined) {
            queryString += "&FuzzyMatch=" + fuzzyMatch;
        }

        if (maxResults !== undefined) {
            queryString += "&MaxResults=" + maxResults;
        }

        if (verboseResults !== undefined) {
            queryString += "&VerboseResults=" + verboseResults;
        }

        if (projectionInSrid !== undefined) {
            queryString += "&Srid=" + projectionInSrid;
        } else if (projectionInProj4String !== undefined) {
            queryString += "&Proj4String=" + projectionInProj4String;
        }

        if (apiKey !== undefined) {
            queryString += "&ApiKey=" + apiKey;
        }

        if (queryString.indexOf('?&') > -1) {
            queryString.replace('?&', '?');
        }

        return queryString;
    }
}

export default GeocodingClient;