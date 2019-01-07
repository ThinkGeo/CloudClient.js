class Util {
    static applyAuthToRequest(authNames, authentications, params) {
        authNames.forEach((authName) => {
            let auth = authentications[authName];
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
                    // // comments accessToken code
                    // let accessToken = this.getToken();
                    // if (accessToken) {
                    //     params.setHeaderObj['Authorization'] = accessToken["tokenType"] + ' ' + accessToken["accessToken"];
                    // } else {
                    //     params.setHeaderObj['Authorization'] = accessToken["tokenType"] + ' ' + accessToken["accessToken"];
                    // }
                    break;
                default:
                    throw new Error('Unknown authentication type: ' + auth.type);
            }
        });
        return params
    }
    static paramToString(param) {
        if (param === undefined || param === null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        return param.toString();
    }

    static buildUrl(baseUri, path, pathParams, queryParams) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }
        let url = baseUri + path;
        url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
            let value;
            if (pathParams.hasOwnProperty(key)) {
                value = Util.paramToString(pathParams[key]);
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

    static setRequestHeader(xhr, setHeaderObj) {
        Object.keys(setHeaderObj).forEach(function (key) {
            xhr.setRequestHeader(key, setHeaderObj[key]);
        });
    }

    static getAccessTokenFromLocalStorage(accessToken) {
        for (let key in accessToken) {
            let itemValue = localStorage.getItem(key);
            if (itemValue === undefined) {
                throw "Token Item Missing";
            }
            else {
                accessToken[key] = itemValue;
            }
        }
    }
    static setAccessTokenToLocalStorage(accessToken) {
        for (let key in accessToken) {
            localStorage.setItem(key, accessToken[key])
        }
    }
    static removeAccessTokenFromLocalStorage(accessToken) {
        for (let key in accessToken) {
            localStorage.removeItem(key)
        }
    }

    static getLocalStorage(name) {
        return localStorage.getItem(name);
    }
    static setLocalStorage(name, value) {
        localStorage.setItem(name, value)
    }

    static setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 1000));
        // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    static getCookie(cname) {
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
}

export default Util