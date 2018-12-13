/**
 * @module T/BaseClient
 */
import IDisposable from './IDisposable.js';

class BaseClient extends IDisposable {
    constructor(clientId = 'clientId', clientSecret = 'clientSecret') {
        if(new.target === BaseClient){
            throw TypeError("BaseClient is an abstract class, so cannot instantiated.");
        }
        super();

        /**
         * @type {string}
         * @private
         */
        this.clientId_ = clientId;
        this.clientSecret_ = clientSecret;
        this.BaseUris_ = new Set();
    }

    GettingAccessToken(GettingAccessTokenEventArgs) {

    }

    SendingWebRequest(SendingWebRequestEventArgs) {

    }

    get ClientId() {
        return this.clientId_;
    }

    set ClientId(value) {
        this.clientId_ = value;
    }

    get ClientSecret() {
        return this.clientSecret_;
    }

    set ClientSecret(value) {
        this.clientSecret_ = value;
    }

    get BaseUris() {
        return this.BaseUris_;
    }

    async SendWebRequestAsync(webRequest){
        return WebResponse;
    }

    GetNextCandidateBaseUri(){

    }

    GetNextCandidateBaseUriCore(){

    }

    OnGettingAccessToken(e){

    }

    OnSendingWebRequest(){

    }

    Dispose(){
        
    }
}

export default BaseClient;