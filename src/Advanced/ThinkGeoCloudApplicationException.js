class ThinkGeoCloudApplicationException extends Error{
    constructor(message, code){
        super(message);

        this.code = code;
        this.message = message;
        // this.name = 'ThinkGeoCloudApplicationException';
    }
}

export default ThinkGeoCloudApplicationException;