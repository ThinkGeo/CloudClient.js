import Eventable from './Eventable';

class BaseClient extends Eventable {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        if (new.target === BaseClient) {
            throw TypeError("BaseClient is an abstract class, so cannot instantiated.");
        }
        super();

        this.basePath = "https://cloud.thinkgeo.com";
        this.authentications = {
            'API Key': {
                type: 'apiKey',
                'in': 'query',
                name: 'ApiKey',
                'apiKey': options["apiKey"]
            },
            'Client Credentials': {
                type: 'oauth2',
                // accessToken: 
            },
            'Resource Owner Password': {
                type: 'basic',
                username: options["username"],
                password: options["password"]
            }
        };
    }

    callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback) {
        let params = {
            queryObj: queryParams,
            setHeaderObj: {
                "Content-type": contentTypes
            }
        }

        let xhr = new XMLHttpRequest();

        params = this.applyAuthToRequest(authNames, params);

        let url = this.buildUrl(path, pathParams, params.queryObj);

        xhr.open(httpMethod, url, true);

        this.setHeader(xhr, params.setHeaderObj);

        if (returnType) {
            if (returnType.toLowerCase() === 'blob') {
                xhr.responseType = "blob";
            } else if (returnType.toLowerCase() === 'arrayBuffer') {
                xhr.responseType = "arrayBuffer";
            } else if (returnType.toLowerCase() === 'json') {
                xhr.responseType = "json";
            }
        }

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
                sendingWebRequestObj.xhr.onerror = function (error) {
                    if (callback) {
                        callback("error", error.type);
                    }
                }
            }

            if (bodyParam) {
                sendingWebRequestObj.xhr.send(bodyParam);
            } else {
                sendingWebRequestObj.xhr.send();
            }
        }
    }

    setHeader(xhr, setHeaderObj) {
        Object.keys(setHeaderObj).forEach(function (key) {
            xhr.setRequestHeader(key, setHeaderObj[key]);
        });
    }

    buildUrl(path, pathParams, queryParams) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }
        let url = this.basePath + path;
        url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
            let value;
            if (pathParams.hasOwnProperty(key)) {
                value = this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });

        let queryString = '';
        let keysArr = Object.keys(queryParams);
        keysArr.forEach((key) => {
            if (queryParams[key] !== undefined && queryParams[key] !== null && queryParams[key] !== '') {
                if (queryString === '') {
                    queryString += `?${key}=${queryParams[key]}`
                } else {
                    queryString += `&${key}=${queryParams[key]}`
                }
            }
        });
        url += queryString;
        return url;
    }

    paramToString(param) {
        if (param === undefined || param === null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        return param.toString();
    }

    // getToken() {
    //     let data = {
    //         "grant_type": "client_credentials",
    //         "client_id": "HG1tYAsAFcRjHUw2B8qrOtx9e5eLZVeNc6J6rxPUjo4~",
    //         "client_secret": "oeRQZNUiUIbDVU4iirL6Q1gUQpFTqo_-8OQjiunrQ9ArNbvSf9325w~~"
    //     }
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('POST', 'https://cloud.thinkgeo.com/identity/connect/token', true);
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.onreadystatechange = function (e) {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             console.log(xhr.responseText);
    //         }
    //     }
    //     xhr.send('client_id=HG1tYAsAFcRjHUw2B8qrOtx9e5eLZVeNc6J6rxPUjo4~&client_secret=oeRQZNUiUIbDVU4iirL6Q1gUQpFTqo_-8OQjiunrQ9ArNbvSf9325w~~&grant_type=client_credentials&redirect_uri=http://localhost:8080/samples/color.html');
    //     // xhr.send(JSON.stringify(data));
    // }

    applyAuthToRequest(authNames, params) {
        authNames.forEach((authName) => {
            let auth = this.authentications[authName];
            switch (auth.type) {
                case 'basic':
                    if (auth.username || auth.password) {
                        let username = auth.username || '';
                        let password = auth.password || '';
                        params.setHeaderObj['Authorization'] = "Basic " + btoa(`${username}:${password}`);
                    }
                    break;
                case 'apiKey':
                    if (auth.apiKey) {
                        let data = {};
                        if (auth.apiKeyPrefix) {
                            data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
                        } else {
                            data[auth.name] = auth.apiKey;
                        }
                        if (auth['in'] === 'header') {
                            params.setHeaderObj['X-API-Key'] = data[auth.name]; //data[auth.name] -> apiKey
                        } else { //apiKey in query
                            params.queryObj['apikey'] = data[auth.name];
                        }
                    }
                    break;
                case 'oauth2':
                    if (auth.accessToken) {
                        params.setHeaderObj['Authorization'] = 'Bearer ' + auth.accessToken; //data[auth.name] -> apiKey
                    }
                    break;
                default:
                    throw new Error('Unknown authentication type: ' + auth.type);
            }
        });

        return params
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