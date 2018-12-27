import BaseClient from "../Advanced/BaseClient";

class ColorClient extends BaseClient {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        super(options);
    }

    getColorSchemeAnalogousByInputColorByNumberOfColor(inputColor, numberOfColors, callback, opts) {
        var opts = opts || {};
        // verify the required parameter 'inputColor' is set
        if (inputColor === undefined || inputColor === null) {
            throw new Error("Missing the required parameter 'inputColor' when calling getColorSchemeAnalogousByInputColorByNumberOfColor");
        }

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null) {
            throw new Error("Missing the required parameter 'numberOfColors' when calling getColorSchemeAnalogousByInputColorByNumberOfColor");
        }

        let path = '/api/v1/color/scheme/analogous/{inputColor}/{numberOfColors}';
        let httpMethod = 'POST';
        let pathParams = {
            'inputColor': inputColor,
            'numberOfColors': numberOfColors
        };
        let queryParams = {
            'inFormat': opts['inFormat'],
            'outFormat': opts['outFormat'],
        };
        let bodyParam = JSON.stringify(opts['body']);
        let authNames = ['API Key', 'Client Credentials', 'Resource Owner Password'];
        var contentTypes = [];
        let returnType = null;

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeAnalogousRandomByNumberOfColor(numberOfColors, callback, opts) {
        var opts = opts || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null) {
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
        let returnType = null;

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeComplementaryRandomByNumberOfColor(numberOfColors, callback, opts) {
        var opts = opts || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null) {
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
        let returnType = null;

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeContrastingRandomByNumberOfColor(numberOfColors, callback, opts) {
        var opts = opts || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null) {
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
        let returnType = null;

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeSequentialRandomByNumberOfColor(numberOfColors, callback, opts) {
        var opts = opts || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null) {
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
        let returnType = null;

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeQualitativeRandomByNumberOfColor(numberOfColors, callback, opts) {
        var opts = opts || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null) {
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
        let returnType = null;

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeTetradRandomByNumberOfColor(numberOfColors, callback, opts) {
        var opts = opts || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null) {
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
        let returnType = null;

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

    getColorSchemeTriadRandomByNumberOfColor(numberOfColors, callback, opts) {
        var opts = opts || {};

        // verify the required parameter 'numberOfColors' is set
        if (numberOfColors === undefined || numberOfColors === null) {
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
        let returnType = null;

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback);
    }

}

export default ColorClient;