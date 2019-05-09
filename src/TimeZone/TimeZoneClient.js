import BaseClient from '../Advanced/BaseClient';

class TimeZoneClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

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
}

export default TimeZoneClient;