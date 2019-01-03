import Eventable from './Eventable';

class BaseClient extends Eventable {
    constructor(opt_options) {
        const options = opt_options ? opt_options : ({});
        if (new.target === BaseClient) {
            throw new Error("BaseClient is an abstract class, so cannot instantiated.");
        }
        super();

        this.baseUrls = options["urls"];
        this.baseUrlIndex = -1;
        this.apiKey = options["apiKey"];

        this.clientId = options["clientId"];
        this.clientSecret = options["clientSecret"];

        this.tokenUrl = 'https://cloud.thinkgeo.com/identity/connect/token';
        this.accessToken = '';
        this.authentications = {
            'API Key': {
                type: 'apiKey',
                in: 'query',
                name: 'ApiKey',
                apiKey: this.apiKey
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

    GetNextCandidateBaseUri() {
        return this.GetNextCandidateBaseUriCore();
    }

    GetNextCandidateBaseUriCore() {
        this.baseUrlIndex++;
        let baseUrlsLength = this.baseUrls.length;
        if (this.baseUrlIndex > baseUrlsLength - 1) {
            this.baseUrlIndex = 0;
        }
        return this.baseUrls[this.baseUrlIndex];
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

        let GettingAccessTokenObj = {
            type: "GettingAccessTokenObj",
            xhr: xhr,
            cancel: false
        };

        this.fire(sendingWebRequestObj);
        this.fire(GettingAccessTokenObj);

        if (!sendingWebRequestObj.cancel) {
            if (callback) {
                sendingWebRequestObj.xhr.onload = (event) => {
                    if (callback) {
                        callback(xhr.status, xhr.response);
                    }
                }
                sendingWebRequestObj.xhr.onerror = (error) => {
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
        let url = this.GetNextCandidateBaseUri() + path;
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

    getToken() {
        let data = {
            "grant_type": "client_credentials",
            "client_id": this.clientId,
            "client_secret": this.clientSecret
        }
        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.tokenUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let accessToken = JSON.stringify(xhr.response.access_token);
                setCookie('accessToken', accessToken, 3600);
            }
        };
        xhr.send(`client_id=${this.clientId}&client_secret=${this.clientSecret}&grant_type=${data.grant_type}`);
    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 1000));
        // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

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
                    }else{
                        this.getToken();
                        params.setHeaderObj['Authorization'] = 'Bearer ' + auth.accessToken; 
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

    disposeCore() {

    }
}

export default BaseClient;