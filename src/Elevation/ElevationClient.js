import BaseClient from "../Advanced/BaseClient";

class ElevationClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getElevationOfPoint(y, x, projectionInSrid, projectionInProj4String, elevationUnit, callback) {
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

        //AuthenticateAPIKEy
        if (this.apiKey) {
            queryParameters += "&apiKey=" + this.apiKey;
        }

        let baseUri = this.getNextCandidateBaseUri();
        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);
        // AuthenticateWebRequest(xhr);
        this.sendWebRequest(xhr, callback);
    }

    createRequestXHR(baseUri, apiPath, method, parameters, body) {
        var xhr = super.createRequestXHR(baseUri, apiPath, method, parameters, body);
        // TODO xhr setting
        return xhr;
    }

    disposeCore(){}
}

export default ElevationClient;