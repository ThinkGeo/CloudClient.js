import Eventable from './Eventable';
import Util from '../shared/Util';
import AccessToken from '../shared/AccessToken';
import BaseClientEventType from './BaseClientEventType.js';
import GettingAccessTokenEventArgs from './GettingAccessTokenEventArgs';
import SendingRequestEventArgs from './SendingRequestEventArgs';
import SentRequestEventArgs from './SentRequestEventArgs';

class BaseClient extends Eventable {
    constructor(apiKey) {
        super();

        this.baseUrls_ = [
            'https://cloud1.thinkgeo.com',
            'https://cloud2.thinkgeo.com',
            'https://cloud3.thinkgeo.com',
            'https://cloud4.thinkgeo.com',
            'https://cloud5.thinkgeo.com',
            'https://cloud6.thinkgeo.com'
        ];
        this.baseUrlIndex_ = -1;
        this.authNames_ = [];
        this.authentications_ = {
            'API Key': {
                type: 'apiKey',
                in: 'query',
                name: 'ApiKey'
            },
            'Client Credentials': {
                type: 'oauth2'
            }
        };
        if (apiKey) {
            this.authentications_["API Key"]["apiKey"] = apiKey;
            this.authNames_.push("API Key");
        }

        //// comments accessToken code
        // else {
        //     if (options["clientId"] && options["clientSecret"]) {
        //         this.authentications["Client Credentials"]["clientId"] = options["clientId"];
        //         this.authentications["Client Credentials"]["clientSecret"] = options["clientSecret"];
        //         this.authNames.push("Client Credentials");

        //         // TODO: make sure the token url 
        //         this.tokenUrl = 'https://cloud.thinkgeo.com/identity/connect/token';
        //         // TODO:REMOVE
        //         // this.authentications["Client Credentials"]["accessToken"] = {
        //         //     "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFiZTNiZDczLWViN2QtNDI4MC1hNzg4LTcxMjYyMjZkMGU3YyIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NDY1MTQ2OTcsImV4cCI6MTU0NjUxODI5NywiaXNzIjoiaHR0cHM6Ly9jbG91ZC50aGlua2dlby5jb20vaWRlbnRpdHkiLCJhdWQiOlsiaHR0cHM6Ly9jbG91ZC50aGlua2dlby5jb20vaWRlbnRpdHkvcmVzb3VyY2VzIiwiVGhpbmtHZW9DbG91ZEFQSXMiXSwiY2xpZW50X2lkIjoiSEcxdFlBc0FGY1JqSFV3MkI4cXJPdHg5ZTVlTFpWZU5jNko2cnhQVWpvNH4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuTkVUIElkZW50aXR5IiwiYXBpS2V5IjoiSEcxdFlBc0FGY1JqSFV3MkI4cXJPdHg5ZTVlTFpWZU5jNko2cnhQVWpvNH4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImVkMzM1NjUwLTlkYTQtNDNmNS04YWI5LTAyODE3NDFiMzMzNyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJQcm9mZXNzaW9uYWwgU3ViIFRlc3QgQWNjb3VudCIsIlNoYXJlZE1vZGUiOiJJcEFkZHJlc3MiLCJjbGllbnRJZCI6IjBlMzRlMTE5LTlhNDItNDI5Ny04ODMxLTI5YTllNTFiZjg1NSIsImNsaWVudE5hbWUiOiJTYW1wbGUgTmF0aXZlIENsaWVudCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjliZWI5MjQ1LTcwODAtNGRhMy1hZDM0LWIzZmYxNzk5YzFjYiIsIklwQWRkcmVzcyI6IiouKi4qLioiLCJzY29wZSI6WyJUaGlua0dlb0Nsb3VkQVBJcyJdfQ.hj5CYv6XfmlwFqjh623Bgp-2-mxWFSoJum6RyvfkZgsZLdgv39xv6Sl5LJj4rwX9IuGxMo1kzV_JJbLKOMQ9FRHUbUMmE38mCutYX_n2Q1EZrbYBINDpF8iowMvkCoAYO67bdM4sjfE7HbhhcwPOEzIkLWlhKz-SF0mExYbItK1TwvTKBJSJm8TLfxQhPpMS1NoVx0T4x32zPjHP5Lj0R7OAZfl6HLCemIvsp_drAki-BmTPIl0dTjpy1FUTCQWvafTyHU6fvRPF_4Gdc7wJj0BW0zA9Eg0crJQ-t3_F4U8insBZXzK1mtEnoNDr0vluYGSwWVHlZImihivGrQk9OA",
        //         //     "expires_in": 3600,
        //         //     "token_type": "Bearer"
        //         // }

        //         // TODO:REMOVE for testing we are hoad code the token.
        //         // let tokenInfo = {
        //         //     accessToken:"eyJhbGciOiJSUzI1NiIsImtpZCI6ImFiZTNiZDczLWViN2QtNDI4MC1hNzg4LTcxMjYyMjZkMGU3YyIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NDY4MzgyNjIsImV4cCI6MTU0Njg0MTg2MiwiaXNzIjoiaHR0cHM6Ly9jbG91ZC50aGlua2dlby5jb20vaWRlbnRpdHkiLCJhdWQiOlsiaHR0cHM6Ly9jbG91ZC50aGlua2dlby5jb20vaWRlbnRpdHkvcmVzb3VyY2VzIiwiVGhpbmtHZW9DbG91ZEFQSXMiXSwiY2xpZW50X2lkIjoiSEcxdFlBc0FGY1JqSFV3MkI4cXJPdHg5ZTVlTFpWZU5jNko2cnhQVWpvNH4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuTkVUIElkZW50aXR5IiwiYXBpS2V5IjoiSEcxdFlBc0FGY1JqSFV3MkI4cXJPdHg5ZTVlTFpWZU5jNko2cnhQVWpvNH4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImVkMzM1NjUwLTlkYTQtNDNmNS04YWI5LTAyODE3NDFiMzMzNyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJQcm9mZXNzaW9uYWwgU3ViIFRlc3QgQWNjb3VudCIsIlNoYXJlZE1vZGUiOiJJcEFkZHJlc3MiLCJjbGllbnRJZCI6IjBlMzRlMTE5LTlhNDItNDI5Ny04ODMxLTI5YTllNTFiZjg1NSIsImNsaWVudE5hbWUiOiJTYW1wbGUgTmF0aXZlIENsaWVudCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjliZWI5MjQ1LTcwODAtNGRhMy1hZDM0LWIzZmYxNzk5YzFjYiIsIklwQWRkcmVzcyI6IiouKi4qLioiLCJzY29wZSI6WyJUaGlua0dlb0Nsb3VkQVBJcyJdfQ.JkLiclD3vgMRj-eN7crBadwHPrU4j4xTrIMol6zFBfdEstkboZnC0dBjvYqS2Kj-aWx6fVnEDPz0IU6PUjEr94YhPfrzn6aTszXSaTavF1OzmEuO4zcyFArxud1CBGvD_gDEYw3PExIkzMKYqSnVLhpouyI936v9D8VO04TJDbbxyGkNqF3kxq4fYIbjGKByg3ipuZNymXVT8b8w9hRWiWS4LiP2vzJeDmhGGzbJMC6u7fiV3CMBR5fPoVVuWj7HWvWDxfWT_kqd_AuU0O4keknRoA_70gukFl1sOzSoY7pZIPZ91y_UmpqsNV9p2uMYJNl67aw2gU0DfaNq0AIWMg",
        //         //     tokenType: "Bearer",
        //         //     expiresTime: Date.now() + 3600000
        //         // }
        //         // let testAccessToken = new AccessToken(tokenInfo.accessToken, tokenInfo.tokenType, tokenInfo.expiresTime)
        //         // Util.setAccessTokenToLocalStorage(testAccessToken);
        //     }
        // }
    }

    GetNextCandidateBaseUri() {
        this.baseUrlIndex_++;
        if (this.baseUrls_) {
            let baseUrlsLength = this.baseUrls_.length;
            if (this.baseUrlIndex_ > baseUrlsLength - 1) {
                this.baseUrlIndex_ = 0;
            }
            return this.baseUrls_[this.baseUrlIndex_];
        }
        else {
            throw new ThinkGeoCloudApplicationException("the urls is empty, please set it in option of client");
        }
    }

    callApi(path, httpMethod, pathParams, queryParams, bodyParam, authNames, contentTypes, returnType, callback) {
        let params = {
            queryObj: queryParams,
            setHeaderObj: {
                "Content-type": contentTypes
            }
        }
        let applyAuthNames = authNames === undefined ? this.authNames_ : authNames;

        let xhr = new XMLHttpRequest();

        params = Util.applyAuthToRequest(applyAuthNames, this.authentications_, params);
        let url = Util.buildUrl(this.GetNextCandidateBaseUri(), path, pathParams, params.queryObj);

        xhr.open(httpMethod, url, true);

        Util.setRequestHeader(xhr, params.setHeaderObj);

        if (returnType) {
            if (returnType.toLowerCase() === 'blob') {
                xhr.responseType = "blob";
            } else if (returnType.toLowerCase() === 'arrayBuffer') {
                xhr.responseType = "arrayBuffer";
            } else if (returnType.toLowerCase() === 'json') {
                xhr.responseType = "json";
            }
        }

        let sendingRequestEventArgs = new SendingRequestEventArgs(xhr);
        this.fire(sendingRequestEventArgs);

        if (!sendingRequestEventArgs.cancel) {
            if (callback) {
                sendingRequestEventArgs.xhr.onload = (event) => {
                    let sentRequestEventArgs = new SentRequestEventArgs(sendingRequestEventArgs.xhr);
                    this.fire(sentRequestEventArgs);

                    if (callback) {
                        callback(sentRequestEventArgs.xhr.status, sentRequestEventArgs.xhr.response);
                    }
                }
                sendingRequestEventArgs.xhr.onerror = (error) => {
                    if (callback) {
                        callback("error", error.type);
                    }
                }
            }

            if (bodyParam) {
                sendingRequestEventArgs.xhr.send(bodyParam);
            } else {
                sendingRequestEventArgs.xhr.send();
            }
        }
    }

    // // comments accessToken Code
    // getToken() {
    //     return this.getTokenCore();
    // }
    // getTokenCore() {
    //     let accessToken = new AccessToken();
    //     Util.getAccessTokenFromLocalStorage(accessToken);

    //     var now = Date.now();
    //     var expiresTime = accessToken.expiresTime;

    //     // expiresTime buffer is 3000 millis
    //     if (now > expiresTime - 3000) {
    //         Util.removeAccessTokenFromLocalStorage(accessToken);
    //         accessToken = undefined;
    //     }

    //     if (!accessToken) {
    //         accessToken = this.requestAccessToken();
    //         if (accessToken) {
    //             Util.setAccessTokenToLocalStorage(accessToken);
    //         }
    //     }
    //     return accessToken;
    // }

    // // comments accessToken code
    // requestAccessToken() {
    //     let requestTokenTime = Date.now();
    //     let accessTokenObject = undefined;
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('POST', this.tokenUrl, false);
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.onreadystatechange = function (e) {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             let accessToken = JSON.stringify(xhr.response.access_token);
    //             accessTokenObject = new AccessToken(accessToken.accessToken, accessToken.tokenType, requestTokenTime + (accessToken.expires_in * 1000));
    //         }
    //     };
    //     let body = 'client_id=' + this.authentications["Client Credentials"].clientId + '&client_secret=' + this.authentications["Client Credentials"].clientSecret + '&grant_type=client_credentials';

    //     let gettingAccessTokenObj = new GettingAccessTokenEventArgs(xhr);

    //     this.fire(gettingAccessTokenObj);

    //     xhr.send(body);

    //     return accessTokenObject;
    // }

    formatResponse(response) {
        return response;
    }

    disposeCore() {
    }
}

export default BaseClient;
