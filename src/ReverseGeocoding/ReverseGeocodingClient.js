import BaseClient from "../Advanced/BaseClient";

class ReverseGeocodingClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

    searchPlaceByPoint(pointY, pointX, callback, options) {
        let opts = options || {};

        // verify the required parameter 'pointY' is set
        if (pointY === undefined || pointY === null || pointY === '') {
            throw new Error("Missing the required parameter 'pointY' when calling searchPlaceByPoint");
        }

        // verify the required parameter 'pointX' is set
        if (pointX === undefined || pointX === null || pointX === '') {
            throw new Error("Missing the required parameter 'pointX' when calling searchPlaceByPoint");
        }
        let path = '/api/v1/location/reverse-geocode/{pointY},{pointX}';
        let httpMethod = 'GET';
        let pathParams = {
            'pointY': pointY,
            'pointX': pointX
        };
        let queryParams = {
            'Srid': opts['Srid'],
            'Proj4String': opts['Sroj4String'],
            'Lang': opts['lang'],
            'SearchRadius': opts['SearchRadius'],
            'SearchRadiusUnit': opts['SearchRadiusUnit'],
            'MaxResults': opts['MaxResults'],
            'LocationCategories': opts['LocationCategories'],
            'LocationTypes': opts['LocationTypes'],
            'VerboseResults': opts['VerboseResults'],
            'DistanceFromQueryFeatureUnit': opts['DistanceFromQueryFeatureUnit'],
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    searchPlaceByLine(wkt, callback, options) {
        let opts = options || {};

        // verify the required parameter 'wkt' is set
        if (wkt === undefined || wkt === null || wkt === '') {
            throw new Error("Missing the required parameter 'wkt' when calling searchPlaceByLine");
        }
        let path = '/api/v1/location/reverse-geocode/line';
        let httpMethod = 'GET';
        let pathParams = {};
        let queryParams = {
            'wkt': wkt,
            'Srid': opts['Srid'],
            'Proj4String': opts['Sroj4String'],
            'Lang': opts['lang'],
            'SearchRadius': opts['SearchRadius'],
            'SearchRadiusUnit': opts['SearchRadiusUnit'],
            'MaxResults': opts['MaxResults'],
            'LocationCategories': opts['LocationCategories'],
            'LocationTypes': opts['LocationTypes'],
            'VerboseResults': opts['VerboseResults'],
            'DistanceFromQueryFeatureUnit': opts['DistanceFromQueryFeatureUnit'],
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    searchPlaceByArea(wkt, callback, options) {
        let opts = options || {};
        // verify the required parameter 'wkt' is set
        if (wkt === undefined || wkt === null || wkt === '') {
            throw new Error("Missing the required parameter 'wkt' when calling searchPlaceByArea");
        }
        let path = '/api/v1/location/reverse-geocode/area';
        let httpMethod = 'GET';
        let pathParams = {};
        let queryParams = {
            'wkt': wkt,
            'Srid': opts['Srid'],
            'Proj4String': opts['Sroj4String'],
            'Lang': opts['lang'],
            'SearchRadius': opts['SearchRadius'],
            'SearchRadiusUnit': opts['SearchRadiusUnit'],
            'MaxResults': opts['MaxResults'],
            'LocationCategories': opts['LocationCategories'],
            'LocationTypes': opts['LocationTypes'],
            'VerboseResults': opts['VerboseResults'],
            'DistanceFromQueryFeatureUnit': opts['DistanceFromQueryFeatureUnit'],
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    searchPlaceById(placeId, callback, options) {
        let opts = options || {};

        // verify the required parameter 'placeId' is set
        if (placeId === undefined || placeId === null || placeId === '') {
            throw new Error("Missing the required parameter 'placeId' when calling searchPlaceById");
        }

        let path = '/api/v1/location/place/{placeId}';
        let httpMethod = 'GET';
        let pathParams = {
            'placeId': placeId
        };
        let queryParams = {
            'Srid': opts['Srid'],
            'Proj4String': opts['Sroj4String'],
            'Lang': opts['lang'],
            'SearchRadius': opts['SearchRadius'],
            'SearchRadiusUnit': opts['SearchRadiusUnit'],
            'MaxResults': opts['MaxResults'],
            'LocationCategories': opts['LocationCategories'],
            'LocationTypes': opts['LocationTypes'],
            'VerboseResults': opts['VerboseResults'],
            'DistanceFromQueryFeatureUnit': opts['DistanceFromQueryFeatureUnit'],
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    searchPlaceByCatergories(callback) {
        let path = '/api/v1/location/reverse-geocode/location-categories';
        let httpMethod = 'GET';
        let pathParams = {};
        let queryParams = {};
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
    
    searchPlaceByCatergoriesOfCommon(callback) {
        let path = '/api/v1/location/reverse-geocode/location-categories/common';
        let httpMethod = 'GET';
        let pathParams = {};
        let queryParams = {};
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    searchPlaceByPoints(options, callback) {
        let opts = options || {};

        let path = '/api/v1/location/reverse-geocode/multi';
        let httpMethod = 'POST';
        let pathParams = {};
        let queryParams = {
            'Srid': opts['Srid'],
            'Proj4String': opts['Sroj4String'],
            'Lang': opts['Lang'],
            'SearchRadius': opts['SearchRadius'],
            'SearchRadiusUnit': opts['SearchRadiusUnit'],
            'MaxResults': opts['MaxResults'],
            'LocationCategories': opts['LocationCategories'],
            'LocationTypes': opts['LocationTypes'],
            'VerboseResults': opts['VerboseResults'],
            'DistanceFromQueryFeatureUnit': opts['DistanceFromQueryFeatureUnit'],
        };
        let bodyParam = JSON.stringify(opts['body']);
        var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
}

export default ReverseGeocodingClient;