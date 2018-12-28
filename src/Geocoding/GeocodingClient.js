import BaseClient from "../Advanced/BaseClient";

class GeocodingClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getGeocodingAdress(searchText, callback, options) {
        if (searchText === undefined || searchText === null || searchText === '') {
            throw new Error("Missing the required parameter 'searchText' when calling getGeocodingAdress");
        }
        let opts = options || {};

        let path = '/api/v1/location/geocode/{searchText}';
        let httpMethod = 'GET';
        let pathParams = {
            'searchText': searchText
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
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getGeocodingAdressBatch(options, callback) {
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
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }
}

export default GeocodingClient;