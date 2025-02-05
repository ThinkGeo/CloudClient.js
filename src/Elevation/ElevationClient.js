import BaseClient from '../Advanced/BaseClient';

class ElevationClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

    getElevationOfPoint(options, callback) {
        let opts = options || {};
        let pointX = opts['pointX'];
        let pointY = opts['pointY'];

        let path = '/api/v1/elevation/{pointY},{pointX}';
        let httpMethod = 'GET';
        let pathParams = {
            'pointY': pointY,
            'pointX': pointX
        };
        let queryParams = {
            'Srid': opts['srid'],
            'Proj4String': opts['proj4String'],
            'ElevationUnit': opts['elevationUnit'],
        };

        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, undefined, undefined, contentTypes, returnType, callback);
    }

    getElevationOfPoints(options, callback) {
        let opts = options || {};
        let path = '/api/v1/elevation/point/multi';
        let httpMethod = 'POST';
        let queryParams = {
            'Srid': opts['srid'],
            'Proj4String': opts['proj4String'],
            'ElevationUnit': opts['elevationUnit'],
        };
        let bodyParam = JSON.stringify(opts['body']);
        let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
        let returnType = 'json';

        this.callApi(path, httpMethod, undefined, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getElevationOfLine(options, callback) {
        let opts = options || {};
        let wkt = opts['wkt'];
        let path = '/api/v1/elevation/line';
        let httpMethod = 'GET';

        let pathParams = {};
        let queryParams = {
            'wkt': wkt,
            'Srid': opts['srid'],
            'Proj4String': opts['proj4String'],
            'NumberOfSegments': opts['numberOfSegments'],
            'ElevationUnit': opts['elevationUnit'],
            'IntervalDistance': opts['intervalDistance'],
            'IntervalDistanceUnit': opts['intervalDistanceUnit'],
        };

        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, undefined, undefined, contentTypes, returnType, callback);
    }

    getGradeOfLine(options, callback) {
        let opts = options || {};
        let wkt = opts['wkt'];
        let path = '/api/v1/elevation/grade/line';
        let httpMethod = 'GET';

        let queryParams = {
            'wkt': wkt,
            'Srid': opts['srid'],
            'Proj4String': opts['proj4String'],
            'NumberOfSegments': opts['numberOfSegments'],
            'ElevationUnit': opts['elevationUnit'],
            'IntervalDistance': opts['intervalDistance'],
            'IntervalDistanceUnit': opts['intervalDistanceUnit'],
        };
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, undefined, queryParams, undefined, undefined, contentTypes, returnType, callback);
    }

    getElevationOfArea(options, callback) {
        let opts = options || {};
        let wkt = opts['wkt'];
        let path = '/api/v1/elevation/area';
        let httpMethod = 'GET';
        let pathParams = {};
        let queryParams = {
            'wkt': wkt,
            'Srid': opts['srid'],
            'Proj4String': opts['proj4String'],
            'IntervalDistance': opts['intervalDistance'],
            'IntervalDistanceUnit': opts['intervalDistanceUnit'],
            'ElevationUnit': opts['elevationUnit'],
        };

        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, undefined, undefined, contentTypes, returnType, callback);
    }
}

export default ElevationClient;