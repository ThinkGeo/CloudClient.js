
import BaseClientEventType from "./BaseClientEventType"

class SentRequestEventArgs {
    constructor(xhr) {
        this.xhr = xhr
        this.type = BaseClientEventType.SENTREQUEST;
    }
}

export default SentRequestEventArgs;