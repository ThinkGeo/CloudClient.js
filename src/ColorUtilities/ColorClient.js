import BaseClient from "../Advanced/BaseClient";
import ThinkGeoCloudApplicationException from "../Advanced/ThinkGeoCloudApplicationException";

class ColorClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

    getColorsInAnalogousFamily(options, callback) {
        let opts = options || {};
        let inputColor = opts["color"];
        let numberOfColors = opts["numberOfColors"];

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorsInAnalogousFamily");
        }
        let path = '/api/v1/color/scheme/analogous/random/{numberOfColors}';
        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };
        if (inputColor) {
            path = '/api/v1/color/scheme/analogous/{inputColor}/{numberOfColors}';
            pathParams.inputColor = inputColor;
            queryParams.inFormat = opts['inFormat']
        }

        let httpMethod = 'GET';
        let bodyParam = {};

        var contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getColorsInComplementaryFamily(options, callback) {
        let opts = options || {};
        let inputColor = opts["color"];
        let numberOfColors = opts["numberOfColors"];
        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeComplementaryRandomByNumberOfColorV1");
        }

        let path = '/api/v1/color/scheme/complementary/random/{numberOfColors}';
        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };

        if (inputColor) {
            path = '/api/v1/color/scheme/complementary/{inputColor}/{numberOfColors}';
            pathParams.inputColor = inputColor;
            queryParams.inFormat = opts['inFormat'];
        }

        let httpMethod = 'GET';
        let bodyParam = {};

        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getColorsInContrastingFamily(options, callback) {
        let opts = options || {};
        let inputColor = opts["color"];
        let numberOfColors = opts["numberOfColors"];

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorsInContrastingFamily");
        }

        let path = '/api/v1/color/scheme/contrasting/random/{numberOfColors}';
        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };

        if (inputColor) {
            path = '/api/v1/color/scheme/contrasting/{inputColor}/{numberOfColors}';
            pathParams.inputColor = inputColor;
            queryParams.inFormat = opts['inFormat']
        }

        let httpMethod = 'GET';
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getColorsInHueFamily(options, callback) {
        let opts = options || {};
        let inputColor = opts["color"];
        let numberOfColors = opts["numberOfColors"];

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorsInHueFamily");
        }

        let path = '/api/v1/color/scheme/sequential/random/{numberOfColors}';
        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };

        if (inputColor) {
            path = '/api/v1/color/scheme/sequential/{inputColor}/{numberOfColors}';
            pathParams.inputColor = inputColor;
            queryParams.inFormat = opts['inFormat'];
        }

        let httpMethod = 'GET';
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getColorsInQualityFamily(options, callback) {
        let opts = options || {};
        let inputColor = opts['color'];
        let numberOfColors = opts['numberOfColors'];

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorsInQualityFamily");
        }

        let path = '/api/v1/color/scheme/qualitative/random/{numberOfColors}';
        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };

        if (inputColor) {
            path = '/api/v1/color/scheme/qualitative/{inputColor}/{numberOfColors}';
            pathParams.inputColor = inputColor;
            queryParams.inFormat = opts['inFormat'];
        }

        let httpMethod = 'GET';
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getColorsInTetradFamily(options, callback) {
        let opts = options || {};
        let inputColor = opts['color'];
        let numberOfColors = opts['numberOfColors'];

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeTetradRandomByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/tetrad/random/{numberOfColors}';
        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };

        if (inputColor) {
            path = '/api/v1/color/scheme/tetrad/{inputColor}/{numberOfColors}';
            pathParams.inputColor = inputColor;
            queryParams.inFormat = opts['inFormat'];
        }

        let httpMethod = 'GET';
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getColorsInTriadFamily(options, callback) {
        let opts = options || {};
        let inputColor = opts['color'];
        let numberOfColors = opts['numberOfColors'];

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorsInTriadFamily");
        }

        let path = '/api/v1/color/scheme/triad/random/{numberOfColors}';
        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };

        if (inputColor) {
            path = '/api/v1/color/scheme/triad/{inputColor}/{numberOfColors}';
            pathParams.inputColor = inputColor;
            queryParams.inFormat = opts['inFormat'];
        }

        let httpMethod = 'GET';
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
}

export default ColorClient;