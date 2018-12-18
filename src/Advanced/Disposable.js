class Disposable {
    constructor() {
        this.disposed_ = false;
    }

    dispose() {
        if (!this.disposed_) {
            this.disposed_ = true;
            this.disposeCore();
        }
    }

    disposeCore() {
    }
}

export default Disposable;