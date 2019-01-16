import BaseClient from "../Advanced/BaseClient";

class ProjectionClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

    project(options, callback) {
        let opts = options || {};

        let pointX = opts['pointX'];
        let pointY = opts['pointY'];

        let wkt = opts['wkt'];

        let body = opts['body'];

        let fromProj = opts['fromProj'];
        let toProj = opts['toProj'];

        if (pointX != undefined && pointY != undefined) {
            this.projectionOfPoint(pointY, pointX, fromProj, toProj, callback);
        }
        else if (wkt != undefined) {
            this.projectionOfGeometry(wkt, fromProj, toProj, callback)
        }
        else {
            this.projectionOfGeometries(opts, callback);
        }
    }

    projectForPoint(pointY, pointX, fromProj, toProj, callback) {
        // verify the required parameter 'pointY' is set
        if (pointY === undefined || pointY === null || pointY === '') {
            throw new Error("Missing the required parameter 'pointY' when calling projectionForPoint");
        }

        // verify the required parameter 'pointX' is set
        if (pointX === undefined || pointX === null || pointX === '') {
            throw new Error("Missing the required parameter 'pointX' when calling projectionForPoint");
        }

        // verify the required parameter 'fromProj' is set
        if (fromProj === undefined || fromProj === null || fromProj === '') {
            throw new Error("Missing the required parameter 'fromProj' when calling projectionForPoint");
        }

        // verify the required parameter 'toProj' is set
        if (toProj === undefined || toProj === null || toProj === '') {
            throw new Error("Missing the required parameter 'toProj' when calling projectionForPoint");
        }
        let path = '/api/v1/projection/{pointY},{pointX}';
        let httpMethod = 'GET';
        let pathParams = {
            'pointY': pointY,
            'pointX': pointX
        };
        let queryParams = {
            'fromProj': fromProj,
            'toProj': toProj,
        };
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    projectForGeometry(wkt, fromProj, toProj, callback) {
        // verify the required parameter 'wkt' is set
        if (wkt === undefined || wkt === null || wkt === '') {
            throw new Error("Missing the required parameter 'wkt' when calling projectionForGeometry");
        }

        // verify the required parameter 'fromProj' is set
        if (fromProj === undefined || fromProj === null || fromProj === '') {
            throw new Error("Missing the required parameter 'fromProj' when calling projectionForGeometry");
        }

        // verify the required parameter 'toProj' is set
        if (toProj === undefined || toProj === null || toProj === '') {
            throw new Error("Missing the required parameter 'toProj' when calling projectionForGeometry");
        }

        let path = '/api/v1/projection';
        let httpMethod = 'GET';
        let pathParams = {};
        let queryParams = {
            'wkt': wkt,
            'fromProj': fromProj,
            'toProj': toProj,
        };
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    projecForGeometries(options, callback) {
        let opts = options || {};

        let path = '/api/v1/projection/multi';
        let httpMethod = 'POST';
        let pathParams = {};
        let queryParams = {};
        let bodyParam = JSON.stringify(opts['body']);
        var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
}

export default ProjectionClient;