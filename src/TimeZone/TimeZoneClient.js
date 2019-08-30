import BaseClient from '../Advanced/BaseClient';

class TimeZoneClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

    /**
     * 
     * @param {number} pointY 
     * @param {number} pointX 
     * @param {function(number, object) : undefined} callback 
     * @param {srid:number, proj4String:string} options 
     */
    getTimeZoneByCoordinate(pointY, pointX, callback, options) {
        let opts = options || {};

        // verify the required parameter 'pointY' is set
        if (pointY === undefined || pointY === null || pointY === '') {
            throw new Error('Missing the required parameter \'pointY\' when calling getTimeZoneByCoordinate');
        }

        // verify the required parameter 'pointX' is set
        if (pointX === undefined || pointX === null || pointX === '') {
            throw new Error('Missing the required parameter \'pointX\' when calling getTimeZoneByCoordinate');
        }
        let path = '/api/v1/timezones/{pointY},{pointX}';
        let httpMethod = 'GET';
        let pathParams = {
            'pointY': pointY,
            'pointX': pointX
        };
        let queryParams = {
            'Srid': opts['srid'],
            'Proj4String': opts['proj4String'],
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    /**
     * 
     * @param {function(number, object) : undefined} callback 
     */
    getAllTimeZoneNames(callback) {
        let path = '/api/v1/timezones';
        let httpMethod = 'GET';
        let pathParams = undefined;
        let queryParams = {};
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    /**
     * 
     * @param {function(number, object) : undefined} callback 
     */
    getAllTimeZones(callback) {
        let path = '/api/v1/timezones/geometry';
        let httpMethod = 'GET';
        let pathParams = undefined;
        let queryParams = {};
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
}

export default TimeZoneClient;