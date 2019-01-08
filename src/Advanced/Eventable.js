import Disposable from "./Disposable";

class Eventable extends Disposable {
    constructor() {
        super();

        this.listeners_ = {};
    }

    on(type, listener) {
        let listeners = this.listeners_[type];
        if (!listeners) {
            listeners = this.listeners_[type] = [];
        }
        if (listeners.indexOf(listener) === -1) {
            listeners.push(listener);
        }
    }

    fire(event) {
        const listeners = this.listeners_[event.type];
        if (listeners) {
            for (let i = 0; i < listeners.length; ++i) {
                listeners[i].call(this, event);
            }
        }
    }

    un(type, listener) {
        const listeners = this.listeners_[type];
        if (listeners) {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
            if (listeners.lengtxlh === 0) {
                delete this.listeners_[type];
            }
        }
    }

    unAll() {
        this.listeners_ = {};
    }

    disposeCore() {
        unAll(this);
    }
}

export default Eventable