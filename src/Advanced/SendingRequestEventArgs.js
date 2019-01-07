import BaseClientEventType from "./BaseClientEventType"

class SendingRequestEventArgs {
    constructor(xhr, cancel) {
        this.xhr = xhr;
        this.cancel = cancel;
        this.type = BaseClientEventType.SENDINGREQUEST;
    }
}
export default SendingRequestEventArgs