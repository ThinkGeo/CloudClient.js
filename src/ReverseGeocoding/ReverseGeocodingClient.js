import BaseClient from "../Advanced/BaseClient";

class ReverseGeocodingClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getReverseGeocodeOfPoint(y, x, opt_options, callback) {
        const options = opt_options ? opt_options : ({});
        let baseUri = this.getNextCandidateBaseUri();
        let apiPath = `/api/v1/location/reverse-geocode/${y},${x}`;
        let queryParameters = ReverseGeocodingClient.getQueryParameters(
            options['ProjectionInSrid'],
            options['ProjectionInProj4String'],
            options['Lang'],
            options['SearchRadius'],
            options['SearchRadiusUnit'],
            options['MaxResults'],
            options['LocationCategories'],
            options['LocationTypes'],
            options['VerboseResults'],
            options['DistanceFromQueryFeatureUnit'],
            this.apiKey
        );
        let xhr = this.createRequestXHR(baseUri, apiPath, 'GET', queryParameters);
        this.sendWebRequest(xhr, callback);
    }

    static getQueryParameters(ProjectionInSrid, ProjectionInProj4String, Lang, SearchRadius, SearchRadiusUnit, MaxResults, LocationCategories, LocationTypes, VerboseResults, DistanceFromQueryFeatureUnit, apiKey) {
        let queryString = '?';

        if (ProjectionInSrid) {
            if (ProjectionInProj4String) {
                throw "Only ProjectionInSrid or ProjectionInProj4String, not both.";
            }
            queryString += "&Srid=" + ProjectionInSrid;
        } else if (ProjectionInProj4String) {
            queryString += "&Proj4String=" + ProjectionInProj4String;
        }

        if (Lang) {
            queryString += "&Lang=" + Lang;
        }

        if (SearchRadius) {
            queryString += "&SearchRadius=" + SearchRadius;
        }

        if (SearchRadiusUnit) {
            queryString += "&SearchRadiusUnit=" + SearchRadiusUnit;
        }

        if (MaxResults) {
            queryString += "&MaxResults=" + MaxResults;
        }

        if (LocationCategories) {
            queryString += "&LocationCategories=" + LocationCategories;
        }

        if (LocationTypes) {
            queryString += "&LocationTypes=" + LocationTypes;
        }

        if (VerboseResults) {
            queryString += "&VerboseResults=" + VerboseResults;
        }

        if (DistanceFromQueryFeatureUnit) {
            queryString += "&DistanceFromQueryFeatureUnit=" + DistanceFromQueryFeatureUnit;
        }

        if (apiKey !== undefined) {
            queryString += "&apikey=" + apiKey;
        }

        if (queryString.indexOf('?&') > -1) {
            queryString = queryString.replace('?&', '?');
        }

        return queryString;
    }
}

export default ReverseGeocodingClient;