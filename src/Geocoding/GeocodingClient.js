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
        this.sendWebRequest(xhr, callback)
    }

    static getQueryParameters(locationType, fuzzyMatch, maxResults, verboseResults, projectionInSrid, projectionInProj4String, apiKey) {
        var queryString = "?";

        if (locationType !== '' && locationType !== undefined) {
            queryString += "&LocationType=" + locationType;
        }

        if (fuzzyMatch !== '' && fuzzyMatch !== undefined) {
            queryString += "&FuzzyMatch=" + fuzzyMatch;
        }

        if (maxResults !== '' && maxResults !== undefined) {
            queryString += "&MaxResults=" + maxResults;
        }

        if (verboseResults !== '' && verboseResults !== undefined) {
            queryString += "&VerboseResults=" + verboseResults;
        }

        if (projectionInSrid !== '' && projectionInSrid !== undefined) {
            if (projectionInProj4String !== '' && projectionInProj4String !== undefined) {
                throw 'You must specify either Srid or Proj4String, but not both.'
            }
            queryString += "&Srid=" + projectionInSrid;
        }else if (projectionInProj4String !== '' && projectionInProj4String !== undefined) {
            queryString += "&Proj4String=" + projectionInProj4String;
        }

        if (apiKey !== '' && apiKey !== undefined) {
            queryString += "&ApiKey=" + apiKey;
        }

        if (queryString.indexOf('?&') > -1) {
            queryString = queryString.replace('?&', '?');
        }

        return queryString;
    }
}

export default GeocodingClient;