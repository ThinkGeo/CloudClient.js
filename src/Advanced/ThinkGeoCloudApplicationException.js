class ThinkGeoCloudApplicationException extends Error {
    constructor(message, code, e) {
        super(message);

        this.code = code;
        this.message = message;
        this.e = e;
    }
}

export default ThinkGeoCloudApplicationException;