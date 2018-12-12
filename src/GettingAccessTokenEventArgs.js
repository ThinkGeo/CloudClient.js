import EventArgs from './EventArgs.js';

class GettingAccessTokenEventArgs extends EventArgs {
    constructor() {
        super();
    }

    /**
     * @param {WebRequest} webRequest
     * @param {bool} cancel
     * @public
     */
    GettingAccessTokenEventArgs({
        webRequest = 'webRequest',
        cancel = 'bool'
    } = {}) {

    }

    get WebRequest() {
        
    }

    get Cancel() {
        
    }

    set Cancel(value) {
        
    }

}

export default GettingAccessTokenEventArgs;