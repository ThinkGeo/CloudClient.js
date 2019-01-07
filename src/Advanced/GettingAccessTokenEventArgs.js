
import BaseClientEventType from "./BaseClientEventType"
class GettingAccessTokenEventArgs {
    constructor(xhr, cancel) {
        this.xhr = xhr;
        this.cancel = cancel;
        this.type = BaseClientEventType.GETTINGACCESSTOKEN
    }
}
export default GettingAccessTokenEventArgs;