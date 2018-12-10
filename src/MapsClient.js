import BaseClient from "./BaseClient.js";

class MapsClient extends BaseClient {
    constructor({
        clientId = 'clientId',
        clientSecret = 'clientSecret'
    } = {}) {
        super(clientId, clientSecret);
    }

    async GetRasterTileAsync(z, x, y, projection, mapType, tileSize, tileResolution){

    }

    async GetVectorTileAsync(z, x, y, projection){

    }
}

export default MapsClient;