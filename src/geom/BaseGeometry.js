class BaseGeometry {
    constructor() {
    }

    toWKT() {
        let type = this.getType().toUpperCase();
        let encoded = this.encodeGeometry();
        return type + '(' + encoded + ')';
    }

    getType() {
        return "";
    }

    encodeGeometry() {
        return "";
    }
}

export default BaseGeometry;
