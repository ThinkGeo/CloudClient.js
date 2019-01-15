import BaseClient from "../Advanced/BaseClient";

class MapsClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

    getMapsRasterTileByXyz(style, resolution, srid, tileSize, tileZ, tileX, tileY, fileExtension, callback) {
        // verify the required parameter 'style' is set
        if (style === undefined || style === null || style === '') {
            throw new Error("Missing the required parameter 'style' when calling getMapsRasterTileByXyz");
        }

        // verify the required parameter 'resolution' is set
        if (resolution === undefined || resolution === null || resolution === '') {
            throw new Error("Missing the required parameter 'resolution' when calling getMapsRasterTileByXyz");
        }

        // verify the required parameter 'srid' is set
        if (srid === undefined || srid === null || srid === '') {
            throw new Error("Missing the required parameter 'srid' when calling getMapsRasterTileByXyz");
        }

        // verify the required parameter 'tileSize' is set
        if (tileSize === undefined || tileSize === null || tileSize === '') {
            throw new Error("Missing the required parameter 'tileSize' when calling getMapsRasterTileByXyz");
        }

        // verify the required parameter 'tileZ' is set
        if (tileZ === undefined || tileZ === null || tileZ === '') {
            throw new Error("Missing the required parameter 'tileZ' when calling getMapsRasterTileByXyz");
        }

        // verify the required parameter 'tileX' is set
        if (tileX === undefined || tileX === null || tileX === '') {
            throw new Error("Missing the required parameter 'tileX' when calling getMapsRasterTileByXyz");
        }

        // verify the required parameter 'tileY' is set
        if (tileY === undefined || tileY === null || tileY === '') {
            throw new Error("Missing the required parameter 'tileY' when calling getMapsRasterTileByXyz");
        }

        // verify the required parameter 'fileExtension' is set
        if (fileExtension === undefined || fileExtension === null || fileExtension === '') {
            throw new Error("Missing the required parameter 'fileExtension' when calling getMapsRasterTileByXyz");
        }

        let path = '/api/v1/maps/raster/{style}/x{resolution}/{srid}/{tileSize}/{tileZ}/{tileX}/{tileY}.{fileExtension}';
        let httpMethod = 'GET';
        let pathParams = {
            'style': style,
            'resolution': resolution,
            'srid': srid,
            'tileSize': tileSize,
            'tileZ': tileZ,
            'tileX': tileX,
            'tileY': tileY,
            'fileExtension': fileExtension
        };
        let queryParams = {};
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'Blob';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getMapsStreetsVectorTileByXyz(srid, tileZ, tileX, tileY, callback) {
        // verify the required parameter 'srid' is set
        if (srid === undefined || srid === null || srid === '') {
            throw new Error("Missing the required parameter 'srid' when calling getMapsStreetsVectorTileByXyz");
        }

        // verify the required parameter 'tileZ' is set
        if (tileZ === undefined || tileZ === null || tileZ === '') {
            throw new Error("Missing the required parameter 'tileZ' when calling getMapsStreetsVectorTileByXyz");
        }

        // verify the required parameter 'tileX' is set
        if (tileX === undefined || tileX === null || tileX === '') {
            throw new Error("Missing the required parameter 'tileX' when calling getMapsStreetsVectorTileByXyz");
        }

        // verify the required parameter 'tileY' is set
        if (tileY === undefined || tileY === null || tileY === '') {
            throw new Error("Missing the required parameter 'tileY' when calling getMapsStreetsVectorTileByXyz");
        }

        let path = '/api/v1/maps/vector/streets/{srid}/{tileZ}/{tileX}/{tileY}.pbf';
        let httpMethod = 'GET';
        let pathParams = {
            'srid': srid,
            'tileZ': tileZ,
            'tileX': tileX,
            'tileY': tileY
        };
        let queryParams = {};
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'arrayBuffer';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
}

export default MapsClient;