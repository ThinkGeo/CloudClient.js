import BaseClient from "../Advanced/BaseClient";

class ProjectionClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getProjectionOfPoint(pointY, pointX, fromProj, toProj, callback) {
        // verify the required parameter 'pointY' is set
        if (pointY === undefined || pointY === null || pointY === '') {
            throw new Error("Missing the required parameter 'pointY' when calling getProjectionOfPoint");
        }

        // verify the required parameter 'pointX' is set
        if (pointX === undefined || pointX === null || pointX === '') {
            throw new Error("Missing the required parameter 'pointX' when calling getProjectionOfPoint");
        }

        // verify the required parameter 'fromProj' is set
        if (fromProj === undefined || fromProj === null || fromProj === '') {
            throw new Error("Missing the required parameter 'fromProj' when calling getProjectionOfPoint");
        }

        // verify the required parameter 'toProj' is set
        if (toProj === undefined || toProj === null || toProj === '') {
            throw new Error("Missing the required parameter 'toProj' when calling getProjectionOfPoint");
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
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getProjectionOfGeometry(wkt, fromProj, toProj, callback) {
        // verify the required parameter 'wkt' is set
        if (wkt === undefined || wkt === null) {
            throw new Error("Missing the required parameter 'wkt' when calling projectGeometry");
        }

        // verify the required parameter 'fromProj' is set
        if (fromProj === undefined || fromProj === null) {
            throw new Error("Missing the required parameter 'fromProj' when calling projectGeometry");
        }

        // verify the required parameter 'toProj' is set
        if (toProj === undefined || toProj === null) {
            throw new Error("Missing the required parameter 'toProj' when calling projectGeometry");
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
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getProjectionOfGeometries(opts, callback) {
        opts = opts || {};

        let path = '/api/v1/projection/multi';
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

export default ProjectionClient;