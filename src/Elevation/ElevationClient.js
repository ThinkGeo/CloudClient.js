import BaseClient from "../Advanced/BaseClient";

class ElevationClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getElevationOfPoint(y, x, projectionInSrid, projectionInProj4String, elevationUnit, callback) {
        let xhr = createGetElevationOfPointRequest(y, x, projectionInSrid, projectionInProj4String, elevationUnit);
        this.sendWebRequest(xhr, callback);
    }

    getElevationOfPointPromise(y, x, projectionInSrid, projectionInProj4String, elevationUnit) {
        const self = this;
        const promise = new Promise(function (resolve, reject) {
            let xhr = self.createGetElevationOfPointRequest(y, x, projectionInSrid, projectionInProj4String, elevationUnit);
            const handler = function () {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(self.formatResponse(this.response));
                }
                else {
                    reject(new Error(this.statusText));
                }
            };
            xhr.onreadystatechange = handler;

            self.sendWebRequest(xhr, undefined);
        })
        return promise;
    }

    createGetElevationOfPointRequest(y, x, projectionInSrid, projectionInProj4String, elevationUnit) {
        let apiPath = "/api/v1/elevation/" + y + "," + x;
        let queryParameters = "";
        if (projectionInSrid || projectionInProj4String) {
            if (projectionInSrid) {
                queryParameters = "?srid=" + projectionInSrid;
            }
            else {
                if (projectionInProj4String) {
                    queryParameters = "?Proj4String=" + projectionInSrid;
                }
            }
        }
        else {
            queryParameters = "?srid=4326";
        }

        if (elevationUnit) {
            queryParameters += "&elevationUnit=" + elevationUnit;
        }
        else {
            queryParameters += "&elevationUnit=Feet";
        }

        if (this.apiKey) {
            queryParameters += "&apiKey=" + this.apiKey;
        }

        let baseUri = this.getNextCandidateBaseUri();
        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);

        return xhr;
    }

    formatResponseCore(response) {
        // TODO Format as ElevationResult
        return response
    }

    disposeCore() {
    }
}

export default ElevationClient;