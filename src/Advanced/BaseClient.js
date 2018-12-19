/**
 * @module T/BaseClient
 */
import Disposable from './Disposable.js';

class BaseClient extends Disposable {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        if (new.target === BaseClient) {
            throw TypeError("BaseClient is an abstract class, so cannot instantiated.");
        }
        super();

        /**
         * @type {string}
         * @private
         */
        this.clientId_ = options["clientId"];
        this.clientSecret_ = options["clientSecret"];
        this.apiKey = options["apiKey"];
        this.BaseUris_ = new Set();
    }

    get ClientId() {
        return this.clientId_;
    }

    set ClientId(value) {
        this.clientId_ = value;
    }

    get ClientSecret() {
        return this.clientSecret_;
    }

    set ClientSecret(value) {
        this.clientSecret_ = value;
    }

    get BaseUris() {
        return this.BaseUris_;
    }

    createRequestXHR(baseUri, apiPath, method, parameters, body) {
        if (baseUri.endsWith("/") && apiPath.endsWith("/")) {
            apiPath = apiPath.trim('/');
        }
        var url = baseUri + apiPath + parameters;

        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        return xhr;
    }

    authenticateWebRequest(xhr) {
        if (string.IsNullOrWhiteSpace(ClientId) && string.IsNullOrWhiteSpace(ClientSecret)) {
            return;
        }
        if (token == null) {
            ///
        }
        if (token) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + requestToken);
        }
    }

    sendWebRequest(xhr, callback) {

        xhr.onload = function (event) {
            if (callback) {
                callback(xhr.status, xhr.responseText);
            }
        }
        xhr.onerror = function () {
            if (callback) {
                callback("error", "request error");
            }
        }
        xhr.send();
    }

    getNextCandidateBaseUri() {
        return "https://cloud.thinkgeo.com";
    }

    GetNextCandidateBaseUriCore() {
    }

    formatResponse(response) {
        return this.formatResponseCore(response);
    }

    formatResponseCore(response) {
        return response;
    }

    disposeCore() {
    }
}

export default BaseClient;