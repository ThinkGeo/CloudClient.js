import BaseClient from "../Advanced/BaseClient";

class ElevationClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    // Get Elevation of Point
    getElevationOfPointInDecimalDegree(latitude, longitude, elevationUnit, callback) {
        let options = {
            projectionInSrid: "4326",
            elevationUnit: elevationUnit
        };

        this.getElevationOfPoint(latitude, longitude, options, callback)
    }
    getElevationOfPoint(y, x, opt_options, callback) {
        const options = opt_options ? opt_options : ({});

        let baseUri = this.getNextCandidateBaseUri();
        let apiPath = "/api/v1/elevation/" + y + "," + x;
        let queryParameters = ElevationClient.getQueryParameters(
            undefined,
            options["projectionInSrid"],
            options["projectionInProj4String"],
            undefined,
            undefined,
            undefined,
            options["elevationUnit"],
            this.apiKey
        )

        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);
        this.sendWebRequest(xhr, callback);
    }
    getElevationOfPointInDecimalDegreePromise(latitude, longitude, elevationUnit) {
        let options = {
            projectionInSrid: "4326",
            elevationUnit: elevationUnit
        }

        return getElevationOfPointPromise(latitude, longitude, options)
    }
    getElevationOfPointPromise(y, x, opt_options) {
        const self = this;
        const options = opt_options ? opt_options : ({});

        const promise = new Promise(function (resolve, reject) {
            let baseUri = self.getNextCandidateBaseUri();
            let apiPath = "/api/v1/elevation/" + y + "," + x;
            let queryParameters = ElevationClient.getQueryParameters(
                undefined,
                options["projectionInSrid"],
                options["projectionInProj4String"],
                undefined,
                undefined,
                undefined,
                options["elevationUnit"],
                self.apiKey
            )

            let xhr = self.createRequestXHR(baseUri, apiPath, "GET", queryParameters);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    resolve(self.formatResponse(xhr.response));
                }
                else {
                    reject(self.formatResponse(xhr.response))
                }
            }
            xhr.onerror = function () {
                reject(self.formatResponse(xhr.response));
            }
            self.sendWebRequest(xhr, undefined);
        })
        return promise;
    }


    // Get Elevation of Line
    getElevationOfLineInDecimalDegree(lineWellKnownText, opt_options, callback) {
        const options = opt_options ? opt_options : ({});
        options["projectionInSrid"] = "4326";
        this.getElevationOfLine(lineWellKnownText, options, callback);
    }
    getElevationOfLine(lineWellKnownText, opt_options, callback) {
        const options = opt_options ? opt_options : ({});
        let baseUri = this.getNextCandidateBaseUri();
        const apiPath = "/api/v1/elevation/line";
        var queryParameters = ElevationClient.getQueryParameters(lineWellKnownText,
            options["projectionInSrid"],
            options["projectionInProj4String"],
            options["numberOfSegments"],
            options["intervalDistance"],
            options["intervalDistanceUnit"],
            options["elevationUnit"],
            this.apiKey
        )
        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);
        this.sendWebRequest(xhr, callback);
    }
    getElevationOfLineInDecimalDegreePromise(lineWellKnownText, opt_options) {
        const options = opt_options ? opt_options : ({});
        options["projectionInSrid"] = "4326";
        return this.getElevationOfLinePromise(lineWellKnownText, options);
    }
    getElevationOfLinePromise(lineWellKnownText, opt_options) {
        const self = this;
        const options = opt_options ? opt_options : ({});

        const promise = new Promise(function (resolve, reject) {
            let baseUri = self.getNextCandidateBaseUri();
            const apiPath = "/api/v1/elevation/line";
            var queryParameters = ElevationClient.getQueryParameters(lineWellKnownText,
                options["projectionInSrid"],
                options["projectionInProj4String"],
                options["numberOfSegments"],
                options["intervalDistance"],
                options["intervalDistanceUnit"],
                options["elevationUnit"],
                self.apiKey
            )
            let xhr = self.createRequestXHR(baseUri, apiPath, "GET", queryParameters);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    resolve(self.formatResponse(xhr.response));
                }
                else {
                    reject(self.formatResponse(xhr.response))
                }
            }
            xhr.onerror = function () {
                reject(self.formatResponse(xhr.response));
            }

            self.sendWebRequest(xhr, undefined);
        })
        return promise;
    }


    // Get Grade Of Line
    getGradeOfLineInDecimalDegree(lineWellKnownText, opt_options, callback) {
        const options = opt_options ? opt_options : ({});
        options["projectionInSrid"] = "4326";
        this.getGradeOfLine(lineWellKnownText, options, callback);
    }
    getGradeOfLine(lineWellKnownText, opt_options, callback) {
        const options = opt_options ? opt_options : ({});
        let baseUri = this.getNextCandidateBaseUri();
        const apiPath = "/api/v1/elevation/grade/line";
        var queryParameters = ElevationClient.getQueryParameters(lineWellKnownText,
            options["projectionInSrid"],
            options["projectionInProj4String"],
            options["numberOfSegments"],
            options["intervalDistance"],
            options["intervalDistanceUnit"],
            options["elevationUnit"],
            this.apiKey
        )
        let xhr = this.createRequestXHR(baseUri, apiPath, "GET", queryParameters);
        this.sendWebRequest(xhr, callback);
    }
    getGradeOfLineInDecimalDegreePromise(lineWellKnownText, opt_options) {
        const options = opt_options ? opt_options : ({});
        options["projectionInSrid"] = "4326";
        return this.getElevationOfLinePromise(lineWellKnownText, options);
    }
    getGradeOfLinePromise(lineWellKnownText, opt_options) {
        const self = this;
        const options = opt_options ? opt_options : ({});
        const promise = new Promise(function (resolve, reject) {
            let baseUri = self.getNextCandidateBaseUri();
            const apiPath = "/api/v1/elevation/grade/line";
            var queryParameters = ElevationClient.getQueryParameters(lineWellKnownText,
                options["projectionInSrid"],
                options["projectionInProj4String"],
                options["numberOfSegments"],
                options["intervalDistance"],
                options["intervalDistanceUnit"],
                options["elevationUnit"],
                self.apiKey
            )
            let xhr = self.createRequestXHR(baseUri, apiPath, "GET", queryParameters);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    resolve(self.formatResponse(xhr.response));
                }
                else {
                    reject(self.formatResponse(xhr.response))
                }
            }
            xhr.onerror = function () {
                reject(self.formatResponse(xhr.response));
            }

            self.sendWebRequest(xhr, undefined);

        })
        return promise;
    }



    formatResponseCore(response) {
        // TODO Format as ElevationResult
        return response
    }

    disposeCore() {
    }

    static getQueryParameters(wellKnownText, projectionInSrid, projectionInProj4String, numberOfSegments, intervalDistance, intervalDistanceUnit, elevationUnit = "Feet", apiKey) {
        var queryString = "?";
        queryString += "elevationUnit=" + elevationUnit;

        if (projectionInSrid) {
            queryString += "&srid=" + projectionInSrid;
        }
        else {
            if (projectionInProj4String) {
                queryString += "&srid=" + projectionInProj4String;
            }
        }

        if (wellKnownText) {
            queryString += "&wkt=" + wellKnownText;
        }

        if (numberOfSegments !== undefined) {
            queryString += "&numberOfSegments=" + numberOfSegments;
        }

        if (intervalDistance !== undefined) {
            queryString += "&intervalDistance=" + intervalDistance + "&intervalDistanceUnit=" + intervalDistanceUnit;
        }

        if (apiKey !== undefined) {
            queryString += "&apikey=" + apiKey;
        }

        return queryString;
    }
}

export default ElevationClient;