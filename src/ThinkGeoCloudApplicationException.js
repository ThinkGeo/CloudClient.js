import ApplicationException from './ApplicationException.js';

class ThinkGeoCloudApplicationException extends ApplicationException {
    constructor() {
        super();
    }

    /**
     * @param {HttpStatusCode} statusCode
     * @param {string} message
     * @param {Exception} innerException
     * @public
     */
    ThinkGeoCloudApplicationException(statusCode, message, innerException) {

    }

    get StatusCode(){}
}

export default ThinkGeoCloudApplicationException;