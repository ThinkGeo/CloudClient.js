import BaseClient from "../Advanced/BaseClient";
import ThinkGeoCloudApplicationException from "../Advanced/ThinkGeoCloudApplicationException";

class ColorClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getColorSchemeAnalogousByInputColorByNumberOfColor(inputColor, numberOfColors, callback, options) {
        let opts = options || {};
        // verify the required parameter 'inputColor' is set
        if (inputColor === undefined || inputColor === null || inputColor === '') {
            throw new ThinkGeoCloudApplicationException("Missing the required parameter 'inputColor' when calling getColorSchemeAnalogousByInputColorByNumberOfColor");
            // throw new Error("Missing the required parameter 'inputColor' when calling getColorSchemeAnalogousByInputColorByNumberOfColor");
        }

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeAnalogousByInputColorByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/analogous/{inputColor}/{numberOfColors}';
        let httpMethod = 'GET';
        let pathParams = {
            'inputColor': inputColor,
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'inFormat': opts['inFormat'],
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeComplementaryByInputColorByNumberOfColor(inputColor, numberOfColors, callback, options) {
        let opts = options || {};
        // verify the required parameter 'inputColor' is set
        if (inputColor === undefined || inputColor === null || inputColor === '') {
            throw new Error("Missing the required parameter 'inputColor' when calling getColorSchemeComplementaryByInputColorByNumberOfColor");
        }

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeComplementaryByInputColorByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/complementary/{inputColor}/{numberOfColors}';
        let httpMethod = 'GET';
        let pathParams = {
            'inputColor': inputColor,
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'inFormat': opts['inFormat'],
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeContrastingByInputColorByNumberOfColor(inputColor, numberOfColors, callback, options) {
        let opts = options || {};
        // verify the required parameter 'inputColor' is set
        if (inputColor === undefined || inputColor === null || inputColor === '') {
            throw new Error("Missing the required parameter 'inputColor' when calling getColorSchemeContrastingByInputColorByNumberOfColor");
        }

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeContrastingByInputColorByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/contrasting/{inputColor}/{numberOfColors}';
        let httpMethod = 'GET';
        let pathParams = {
            'inputColor': inputColor,
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'inFormat': opts['inFormat'],
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeSequentialByInputColorByNumberOfColor(inputColor, numberOfColors, callback, options) {
        let opts = options || {};
        // verify the required parameter 'inputColor' is set
        if (inputColor === undefined || inputColor === null || inputColor === '') {
            throw new Error("Missing the required parameter 'inputColor' when calling getColorSchemeSequentialByInputColorByNumberOfColor");
        }

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeSequentialByInputColorByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/sequential/{inputColor}/{numberOfColors}';
        let httpMethod = 'GET';
        let pathParams = {
            'inputColor': inputColor,
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'inFormat': opts['inFormat'],
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeQualitativeByInputColorByNumberOfColor(inputColor, numberOfColors, callback, options) {
        let opts = options || {};
        // verify the required parameter 'inputColor' is set
        if (inputColor === undefined || inputColor === null || inputColor === '') {
            throw new Error("Missing the required parameter 'inputColor' when calling getColorSchemeQualitativeByInputColorByNumberOfColor");
        }

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeQualitativeByInputColorByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/qualitative/{inputColor}/{numberOfColors}';
        let httpMethod = 'GET';
        let pathParams = {
            'inputColor': inputColor,
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'inFormat': opts['inFormat'],
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeTetradByInputColorByNumberOfColor(inputColor, numberOfColors, callback, options) {
        let opts = options || {};
        // verify the required parameter 'inputColor' is set
        if (inputColor === undefined || inputColor === null || inputColor === '') {
            throw new Error("Missing the required parameter 'inputColor' when calling getColorSchemeTetradByInputColorByNumberOfColor");
        }

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeTetradByInputColorByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/tetrad/{inputColor}/{numberOfColors}';
        let httpMethod = 'GET';
        let pathParams = {
            'inputColor': inputColor,
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'inFormat': opts['inFormat'],
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeTriadByInputColorByNumberOfColor(inputColor, numberOfColors, callback, options) {
        let opts = options || {};
        // verify the required parameter 'inputColor' is set
        if (inputColor === undefined || inputColor === null || inputColor === '') {
            throw new Error("Missing the required parameter 'inputColor' when calling getColorSchemeTriadByInputColorByNumberOfColor");
        }

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeTriadByInputColorByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/triad/{inputColor}/{numberOfColors}';
        let httpMethod = 'GET';
        let pathParams = {
            'inputColor': inputColor,
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'inFormat': opts['inFormat'],
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeAnalogousRandomByNumberOfColor(numberOfColors, callback, options) {
        let opts = options || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeAnalogousRandomByNumberOfColor");
        }


        let path = '/api/v1/color/scheme/analogous/random/{numberOfColors}';
        let httpMethod = 'GET';

        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeComplementaryRandomByNumberOfColor(numberOfColors, callback, options) {
        let opts = options || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeComplementaryRandomByNumberOfColorV1");
        }

        let path = '/api/v1/color/scheme/complementary/random/{numberOfColors}';
        let httpMethod = 'GET';

        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeContrastingRandomByNumberOfColor(numberOfColors, callback, options) {
        let opts = options || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeContrastingRandomByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/contrasting/random/{numberOfColors}';
        let httpMethod = 'GET';

        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeSequentialRandomByNumberOfColor(numberOfColors, callback, options) {
        let opts = options || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeSequentialRandomByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/sequential/random/{numberOfColors}';
        let httpMethod = 'GET';

        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeQualitativeRandomByNumberOfColor(numberOfColors, callback, options) {
        let opts = options || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeQualitativeRandomByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/qualitative/random/{numberOfColors}';
        let httpMethod = 'GET';

        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeTetradRandomByNumberOfColor(numberOfColors, callback, options) {
        let opts = options || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeTetradRandomByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/tetrad/random/{numberOfColors}';
        let httpMethod = 'GET';

        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeTriadRandomByNumberOfColor(numberOfColors, callback, options) {
        let opts = options || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null || numberOfColors === '') {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeTriadRandomByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/triad/random/{numberOfColors}';
        let httpMethod = 'GET';

        let pathParams = {
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'outFormat': opts['outFormat'],
        };
        let bodyParam = {};
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

}

export default ColorClient;