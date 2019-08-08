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
    }

    getNextCandidateBaseUri() {
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
            queryObj: queryParams
        }
        if (httpMethod.toLowerCase() === 'post') {
            params["setHeaderObj"] = {
                "Content-type": contentTypes
            }
        }

        let applyAuthNames = authNames === undefined ? this.authNames_ : authNames;

        let xhr = new XMLHttpRequest();

        params = Util.applyAuthToRequest(applyAuthNames, this.authentications_, params);
        let url = Util.buildUrl(this.getNextCandidateBaseUri(), path, pathParams, params.queryObj);

        xhr.open(httpMethod, url, true);

        if(params.setHeaderObj){
            Util.setRequestHeader(xhr, params.setHeaderObj);
        }        

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

    formatResponse(response) {
        return response;
    }

    disposeCore() {
    }
}

export default BaseClient;
