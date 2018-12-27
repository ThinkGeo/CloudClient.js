import BaseClient from '../Advanced/BaseClient';

class ElevationClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }
    // Get Elevation of Point
    // getElevationOfPointInDecimalDegree(latitude, longitude, elevationUnit, callback) {
    //     let options = {
    //         Srid: "4326",
    //         elevationUnit: elevationUnit
    //     };

    //     this.getElevationOfPoint(latitude, longitude, options, callback)
    // }
    getElevationOfPoint(pointY, pointX, callback, opts) {
        if (pointX === undefined || pointX === null || pointX === '' || pointY === undefined || pointY === null || pointY === '') {
            throw new Error("Missing the required parameter 'pointY or pointY' when calling getElevationOfPoint");
        }
        opts = opts || {};

        let path = '/api/v1/elevation/{pointY},{pointX}';
        let httpMethod = 'GET';
        let pathParams = {
            'pointY': pointY,
            'pointX': pointX
        };
        let queryParams = {
            'Srid': opts['Srid'],
            'Proj4String': opts['Proj4String'],
            'ElevationUnit': opts['ElevationUnit'],
        };
        let bodyParam = {};

        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getElevationOfLine(wkt, callback, opts) {
        opts = opts || {};

        // verify the required parameter 'wkt' is set
        if (wkt === undefined || wkt === null) {
            throw new Error("Missing the required parameter 'wkt' when calling getElevationOfLine");
        }

        let path = '/api/v1/elevation/line';
        let httpMethod = 'GET';

        let pathParams = {};
        let queryParams = {
            'wkt': wkt,
            'Srid': opts['Srid'],
            'Proj4String': opts['Proj4String'],
            'NumberOfSegments': opts['NumberOfSegments'],
            'ElevationUnit': opts['ElevationUnit'],
            'IntervalDistance': opts['IntervalDistance'],
            'IntervalDistanceUnit': opts['IntervalDistanceUnit'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getElevationOfArea(wkt, callback, opts) {
        opts = opts || {};

        // verify the required parameter 'wkt' is set
        if (wkt === undefined || wkt === null) {
            throw new Error("Missing the required parameter 'wkt' when calling getElevationOfArea");
        }

        let path = '/api/v1/elevation/area';
        let httpMethod = 'GET';
        let pathParams = {};
        let queryParams = {
            'wkt': wkt,
            'Srid': opts['Srid'],
            'Proj4String': opts['Proj4String'],
            'IntervalDistance': opts['IntervalDistance'],
            'IntervalDistanceUnit': opts['IntervalDistanceUnit'],
            'ElevationUnit': opts['ElevationUnit'],
        };

        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getGradeOfLine(wkt, callback, opts) {
        opts = opts || {};

        // verify the required parameter 'wkt' is set
        if (wkt === undefined || wkt === null) {
            throw new Error("Missing the required parameter 'wkt' when calling getGradeOfLine");
        }

        let path = '/api/v1/elevation/grade/line';
        let httpMethod = 'GET';

        let pathParams = {};
        let queryParams = {
            'wkt': wkt,
            'Srid': opts['Srid'],
            'Proj4String': opts['Proj4String'],
            'NumberOfSegments': opts['NumberOfSegments'],
            'ElevationUnit': opts['ElevationUnit'],
            'IntervalDistance': opts['IntervalDistance'],
            'IntervalDistanceUnit': opts['IntervalDistanceUnit'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getElevationOfPoints(opts, callback) {
        opts = opts || {};

        let path = '/api/v1/elevation/point/multi';
        let httpMethod = 'POST';
        let pathParams = {};
        let queryParams = {
            'Srid': opts['Srid'],
            'Proj4String': opts['Proj4String'],
            'ElevationUnit': opts['ElevationUnit'],
        };
        let bodyParam = JSON.stringify(opts['body']);
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }
}

export default ElevationClient;