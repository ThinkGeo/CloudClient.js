import Eventable from './Eventable';

class BaseClient extends Eventable {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        if (new.target === BaseClient) {
            throw TypeError("BaseClient is an abstract class, so cannot instantiated.");
        }
        super();

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

    createRequestXHR(baseUri, apiPath, method, parameters) {
        if (baseUri.endsWith("/") && apiPath.endsWith("/")) {
            apiPath = apiPath.trim('/');
        }
        var url = baseUri + apiPath + parameters;

        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (method.toUpperCase() === 'POST') {
            xhr.setRequestHeader("Content-type", "application/json");
        }
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

    sendWebRequest(xhr, body, callback) {
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
                        callback(xhr.status, xhr.responseText);
                    }
                }
                sendingWebRequestObj.xhr.onerror = function () {
                    if (callback) {
                        callback("error", "request error");
                    }
                }
            }
            if (body !== undefined) {
                sendingWebRequestObj.xhr.send(body);
            } else {
                sendingWebRequestObj.xhr.send();
            }
        }
    }

    getNextCandidateBaseUri() {
        return this.getNextCandidateBaseUriCore()
    }

    getNextCandidateBaseUriCore() {
        return "https://cloud.thinkgeo.com";
    }

    formatResponse(response) {
        return this.formatResponseCore(response);
    }

    formatResponseCore(response) {
        return response;
    }

    disposeCore() {}
}

export default BaseClient;