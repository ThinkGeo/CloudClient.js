/**
 * @module T/BaseClient
 */
import IDisposable from './IDisposable.js';

class BaseClient extends IDisposable {
    constructor({clientId = 'clientId', clientSecret = 'clientSecret'} = {}) {
        super();

        /**
         * @type {string}
         * @private
         */
        this.clientId_ = clientId;
        this.clientSecret_ = clientSecret;
    }

    GettingAccessToken(GettingAccessTokenEventArgs) {

    }

    SendingWebRequest(SendingWebRequestEventArgs) {

    }

    getClientId() {
        return this.clientId_;
    }

    setClientId(clientId) {
        this.clientId_ = clientId;
    }

    getClientSecret() {
        return this.clientSecret_;
    }

    setClientSecret(clientSecret) {
        this.clientSecret_ = clientSecret;
    }

    getBaseUris(Uri) {
        return Uri;
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