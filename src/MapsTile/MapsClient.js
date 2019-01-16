import BaseClient from "../Advanced/BaseClient";
import RasterMapType from "./RasterMapType";
class MapsClient extends BaseClient {
    constructor(apiKey) {
        super(apiKey);
    }

    getRasterTile(z, x, y, srid, style, tileSize, tileResolution, callback) {
        // verify the required parameter 'style' is set
        if (style === undefined || style === null || style === '') {
            throw new Error("Missing the required parameter 'style' when calling getRasterTile");
        }
        else {
            switch (style) {
                case RasterMapType.Default:
                    style = "Light";
                    break;
                case RasterMapType.Light:
                case RasterMapType.Dark:
                case RasterMapType.Hybrid:
                case RasterMapType.Aerial:
                    break;
                case RasterMapType.TransparentBackground:
                    style = "transparent-background";
                    break;
                default:
                    throw new Error("The 'style' didn't match any RasterMapType");
            }
        }

        // verify the required parameter 'resolution' is set
        if (tileResolution === undefined || tileResolution === null || tileResolution === '') {
            throw new Error("Missing the required parameter 'resolution' when calling getRasterTile");
        }

        // verify the required parameter 'srid' is set
        if (srid === undefined || srid === null || srid === '') {
            throw new Error("Missing the required parameter 'srid' when calling getRasterTile");
        }

        // verify the required parameter 'tileSize' is set
        if (tileSize === undefined || tileSize === null || tileSize === '') {
            throw new Error("Missing the required parameter 'tileSize' when calling getRasterTile");
        }

        // verify the required parameter 'tileZ' is set
        if (z === undefined || z === null || z === '') {
            throw new Error("Missing the required parameter 'tileZ' when calling getRasterTile");
        }

        // verify the required parameter 'tileX' is set
        if (x === undefined || x === null || x === '') {
            throw new Error("Missing the required parameter 'tileX' when calling getRasterTile");
        }

        // verify the required parameter 'tileY' is set
        if (y === undefined || y === null || y === '') {
            throw new Error("Missing the required parameter 'tileY' when calling getRasterTile");
        }

        var fileExtension = this.getImageSuffix(style);

        let path = '/api/v1/maps/raster/{style}/x{resolution}/{srid}/{tileSize}/{tileZ}/{tileX}/{tileY}.{fileExtension}';
        let httpMethod = 'GET';
        let pathParams = {
            'style': style,
            'resolution': tileResolution,
            'srid': srid,
            'tileSize': tileSize,
            'tileZ': z,
            'tileX': x,
            'tileY': y,
            'fileExtension': fileExtension
        };
        let queryParams = {};
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'Blob';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getVectorTile(z, x, y, srid, callback) {
        // verify the required parameter 'srid' is set
        if (srid === undefined || srid === null || srid === '') {
            throw new Error("Missing the required parameter 'srid' when calling getVectorTile");
        }

        // verify the required parameter 'tileZ' is set
        if (z === undefined || z === null || z === '') {
            throw new Error("Missing the required parameter 'tileZ' when calling getVectorTile");
        }

        // verify the required parameter 'tileX' is set
        if (x === undefined || x === null || x === '') {
            throw new Error("Missing the required parameter 'tileX' when calling getVectorTile");
        }

        // verify the required parameter 'tileY' is set
        if (y === undefined || y === null || y === '') {
            throw new Error("Missing the required parameter 'tileY' when calling getVectorTile");
        }

        let path = '/api/v1/maps/vector/streets/{srid}/{tileZ}/{tileX}/{tileY}.pbf';
        let httpMethod = 'GET';
        let pathParams = {
            'srid': srid,
            'tileZ': z,
            'tileX': x,
            'tileY': y
        };
        let queryParams = {};
        let bodyParam = {};
        let contentTypes = [];
        let returnType = 'arrayBuffer';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    getImageSuffix(style) {
        switch (style) {
            case RasterMapType.Aerial:
            case RasterMapType.Hybrid:
                return "jpeg";
            case RasterMapType.Light:
            case RasterMapType.Dark:
            case RasterMapType.TransparentBackground:
            default:
                return "png";
        }
    }
}

export default MapsClient;