import EventArgs from 'EventArgs.js';

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
        return 'getter';
    }

    get Cancel() {
        return 'getter';
    }

    set Cancel(value) {
        return ('setter: ' + value);
    }

}

export default GettingAccessTokenEventArgs;