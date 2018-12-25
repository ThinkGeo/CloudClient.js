import BaseClient from "../Advanced/BaseClient";

class MapsClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getRasterTile(style, resolution, srid, tileSize, tileZ, tileX, tileY, fileExtension, callback) {
        if (srid !== "3857") {
            throw "Currently only 'srid = 3857' is supported.";
        }

        let baseUri = this.getNextCandidateBaseUri();
        let apiPath = `/api/v1/maps/raster/${style}/x${resolution}/${srid}/${tileSize}/${tileZ}/${tileX}/${tileY}.${fileExtension}`;
        let queryParameters = MapsClient.getQueryParameters(this.apiKey);

        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);
        xhr.responseType = "blob";
        let sendingWebRequestObj = {
            type: "sendingWebRequest",
            xhr: xhr,
            cancel: false
        };
        this.fire(sendingWebRequestObj);

        if (!sendingWebRequestObj.cancel) {
            if (callback) {
                sendingWebRequestObj.xhr.onload = function (event) {
                    if (callback) {
                        callback(xhr.status, xhr.response);
                    }
                }
                sendingWebRequestObj.xhr.onerror = function () {
                    if (callback) {
                        callback("error", "request error");
                    }
                }
            }
            sendingWebRequestObj.xhr.send();
        }
    }

    getVectorTile(srid, tileZ, tileX, tileY, callback) {
        if (srid !== "3857") {
            throw "Currently only 'srid = 3857' is supported.";
        }
        let baseUri = this.getNextCandidateBaseUri();
        let apiPath = `/api/v1/maps/vector/streets/${srid}/${tileZ}/${tileX}/${tileY}.pbf`;
        let queryParameters = MapsClient.getQueryParameters(this.apiKey);
        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);
        xhr.responseType = "arraybuffer";
        let sendingWebRequestObj = {
            type: "sendingWebRequest",
            xhr: xhr,
            cancel: false
        };
        this.fire(sendingWebRequestObj);

        if (!sendingWebRequestObj.cancel) {
            if (callback) {
                sendingWebRequestObj.xhr.onload = function (event) {
                    if (callback) {
                        callback(xhr.status, xhr.response);
                    }
                }
                sendingWebRequestObj.xhr.onerror = function () {
                    if (callback) {
                        callback("error", "request error");
                    }
                }
            }
            sendingWebRequestObj.xhr.send();
        }
    }

    static getQueryParameters(apiKey) {
        let queryString;

        if (apiKey !== undefined) {
            queryString = "?ApiKey=" + apiKey;
        }

        if (queryString.indexOf('?&') > -1) {
            queryString = queryString.replace('?&', '?');
        }

        return queryString;
    }

}

export default MapsClient;