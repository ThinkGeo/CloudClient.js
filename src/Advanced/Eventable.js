import Disposable from "./Disposable";

class Eventable extends Disposable {
    constructor() {
        super();

        this.listeners = {};
    }

    addEventListener(type, listener) {
        let listeners = this.listeners[type];
        if (!listeners) {
            listeners = this.listeners[type] = [];
        }
        if (listeners.indexOf(listener) === -1) {
            listeners.push(listener);
        }
    }

    dispatchEvent(event) {
        const listeners = this.listeners[event.type];
        if (listeners) {
            for (let i = 0; i < listeners.length; ++i) {
                listeners[i].call(this, event);
            }
        }
    }

    removeEventListener(type, listener) {
        const listeners = this.listeners[type];
        if (listeners) {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
            if (listeners.lengtxlh === 0) {
                delete this.listeners[type];
            }
        }
    }

    disposeCore() {
        unlistenAll(this);
    }
}

export default Eventable