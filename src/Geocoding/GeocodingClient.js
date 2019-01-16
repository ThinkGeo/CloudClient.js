import BaseClient from "../Advanced/BaseClient";

class GeocodingClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

    search(options, callback) {
        let opts = options || {};
        let location = opts['location'];
        let body = opts['body'];
        if (location != undefined) {
            this.search(location, callback, opts);
        }
        else if (body != undefined) {
            this.searchBatch(opts, callback);
        }
    }
    
    searchByPoint(location, callback, options) {
        if (location === undefined || location === null || location === '') {
            throw new Error("Missing the required parameter 'searchText' when calling getGeocodingAdress");
        }
        let opts = options || {};

        let path = '/api/v1/location/geocode/{searchText}';
        let httpMethod = 'GET';
        let pathParams = {
            'searchText': location
        };
        let queryParams = {
            'LocationType': opts['LocationType'],
            'FuzzyMatch': opts['FuzzyMatch'],
            'MaxResults': opts['MaxResults'],
            'VerboseResults': opts['VerboseResults'],
            'Srid': opts['Srid'],
            'Proj4String': opts['Proj4String'],
        };
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    searchBatch(options, callback) {
        let opts = options || {};

        let path = '/api/v1/location/geocode/multi';
        let httpMethod = 'POST';
        let pathParams = {
        };
        let queryParams = {
            'LocationType': opts['LocationType'],
            'FuzzyMatch': opts['FuzzyMatch'],
            'MaxResults': opts['MaxResults'],
            'VerboseResults': opts['VerboseResults'],
            'Srid': opts['Srid'],
            'Proj4String': opts['Proj4String'],
        };
        let bodyParam = opts['body'];
        let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
}

export default GeocodingClient;