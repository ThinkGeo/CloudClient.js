import BaseClient from "../Advanced/BaseClient";

class ProjectionClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    static getQueryParameters(wkt, fromProjectionInSrid, fromProjectionInProj4String, toProjectionInSrid, toProjectionInProj4String, apiKey) {
        let queryString = '?';
        if (wkt !== undefined) {
            queryString += 'wkt=' + wkt + '&';
        }

        if (fromProjectionInSrid) {
            queryString += "fromProj=" + fromProjectionInSrid;
        } else {
            if (fromProjectionInProj4String) {
                queryString += "fromProj=" + fromProjectionInProj4String;
            }
        }

        if (toProjectionInSrid) {
            queryString += "&toProj=" + toProjectionInSrid;
        } else {
            if (toProjectionInProj4String) {
                queryString += "&toProj=" + toProjectionInProj4String;
            }
        }

        if (apiKey !== undefined) {
            if (queryString.split('?')[1] !== "") {
                queryString += "&apikey=" + apiKey;
            } else {
                queryString += "apikey=" + apiKey;
            }
        }

        return queryString;

    }

    static getPostBodyParameters(wkt, fromProjectionInSrid, fromProjectionInProj4String, toProjectionInSrid, toProjectionInProj4String) {
        let fromProj, toProj;
        if (fromProjectionInSrid) {
            fromProj = fromProjectionInSrid;
        } else {
            if (fromProjectionInProj4String) {
                fromProj = fromProjectionInProj4String;
            }
        }

        if (toProjectionInSrid) {
            toProj = toProjectionInSrid;
        } else {
            if (toProjectionInProj4String) {
                toProj = toProjectionInProj4String;
            }
        }

        let body = {
            "wkt": [
                wkt
            ],
            "fromProj": fromProj,
            "toProj": toProj
        }

        return body;
    }

    getProjectOfPointPromise(y, x, opt_options) {
        const self = this;
        const options = opt_options ? opt_options : ({});
        const promise = new Promise(function (resolve, reject) {
            let baseUri = self.getNextCandidateBaseUri();
            let apiPath = "/api/v1/projection/" + y + ',' + x;
            let queryParameters = ProjectionClient.getQueryParameters(
                undefined,
                options['fromProjectionInSrid'],
                options['fromProjectionInProj4String'],
                options['toProjectionInSrid'],
                options['toProjectionInProj4String'],
                self.apiKey
            );
            let xhr = self.createRequestXHR(baseUri, apiPath, 'GET', queryParameters);
            const handler = function () {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            xhr.onreadystatechange = handler;
            self.sendWebRequest(xhr, undefined);
        });
        return promise;
    }

    getProjectOfWktPromise(wkt, opt_options) {
        const self = this;
        const options = opt_options ? opt_options : ({});
        const promise = new Promise(function (resolve, reject) {
            let baseUri = self.getNextCandidateBaseUri();
            let apiPath = "/api/v1/projection/";
            let queryParameters = ProjectionClient.getQueryParameters(
                wkt,
                options['fromProjectionInSrid'],
                options['fromProjectionInProj4String'],
                options['toProjectionInSrid'],
                options['toProjectionInProj4String'],
                self.apiKey
            );
            let xhr = self.createRequestXHR(baseUri, apiPath, 'GET', queryParameters);
            const handler = function () {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            xhr.onreadystatechange = handler;
            self.sendWebRequest(xhr, undefined);
        });
        return promise;
    }

    getProjectOfMultiPromise(wkt, opt_options) {
        const self = this;
        const options = opt_options ? opt_options : ({});
        const promise = new Promise(function (resolve, reject) {
            let baseUri = self.getNextCandidateBaseUri();
            let apiPath = "/api/v1/projection/multi";
            let queryParameters = ProjectionClient.getQueryParameters(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                self.apiKey
            );
            let postBodyParameters = ProjectionClient.getPostBodyParameters(
                wkt,
                options['fromProjectionInSrid'],
                options['fromProjectionInProj4String'],
                options['toProjectionInSrid'],
                options['toProjectionInProj4String'],
                self.apiKey
            );

            let xhr = self.createRequestXHR(baseUri, apiPath, 'POST', queryParameters, postBodyParameters);
            const handler = function () {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            xhr.onreadystatechange = handler;
            self.sendWebRequest(xhr, undefined);
        });
        return promise;
    }
}

export default ProjectionClient;