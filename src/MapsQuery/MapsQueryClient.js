import BaseClient from '../Advanced/BaseClient';
import DistanceUnit from '../constants/DistanceUnit';

class MapsQueryClient extends BaseClient {
    constructor (apiKey){
        super(apiKey);
    }

    /**
     * 
     * @param {string} queryLayer 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
     *     srid:number,
     *     proj4String:string,
     *     maxResults:number,
     *     returnFeatureAttributes:boolean
     *     featureAttributesToReturn:string[]}} options 
     */
    getFeaturesWithin(layerName, wkt, callback, options) {
        this._spatialQuery(layerName, wkt, 'within', callback, options);
    }

    /**
     * 
     * @param {string} queryLayer 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
     *     srid:number,
     *     proj4String:string,
     *     maxResults:number,
     *     returnFeatureAttributes:boolean
     *     featureAttributesToReturn:string[]}} options 
     */
    getFeaturesContaining(layerName, wkt, callback, options) {
        this._spatialQuery(layerName, wkt, 'containing', callback, options);
    }

    /**
     * 
     * @param {string} queryLayer 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
     *     srid:number,
     *     proj4String:string,
     *     maxResults:number,
     *     returnFeatureAttributes:boolean
     *     featureAttributesToReturn:string[]}} options 
     */
    getFeaturesIntersecting(layerName, wkt, callback, options) {
        this._spatialQuery(layerName, wkt, 'intersecting', callback, options);
    }

    /**
     * 
     * @param {string} queryLayer 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
     *     srid:number,
     *     proj4String:string,
     *     maxResults:number,
     *     returnFeatureAttributes:boolean
     *     featureAttributesToReturn:string[]}} options 
     */
    getFeaturesOverlapping(layerName, wkt, callback, options) {
        this._spatialQuery(layerName, wkt, 'overlapping', callback, options);
    }
    
    /**
     * 
     * @param {string} queryLayer 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
     *     srid:number,
     *     proj4String:string,
     *     maxResults:number,
     *     returnFeatureAttributes:boolean
     *     featureAttributesToReturn:string[]}} options 
     */
    getFeaturesTouching(layerName, wkt, callback, options) {
        this._spatialQuery(layerName, wkt, 'touching', callback, options);
    }

    /**
     * 
     * @param {string} queryLayer 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
    *     srid:number,
    *     proj4String:string,
    *     searchRadius:number,
    *     searchRadiusUnit:DistanceUnit,
    *     maxResults:number,
    *     returnFeatureAttributes:boolean
    *     featureAttributesToReturn:string[]}} options 
    */
    getFeaturesNearest(layerName, wkt, callback, options) {
        if (layerName === undefined || layerName === null || layerName === '') {
            throw new Error('Missing the required parameter \'layerName\' when calling getFeaturesNearest');
        }
        if (wkt === undefined || wkt === null || wkt === '') {
            throw new Error('Missing the required parameter \'wkt\' when calling getFeaturesNearest');
        }
        let opt = options || {};

        let path = '/api/v1/maps/query/{queryLayer}/nearest';
        let httpMethod = 'GET';
        let pathParams = {
            queryLayer: layerName,
        };
        let queryParams = {
            Wkt: wkt,
            Srid: opt['srid'],
            Proj4String: opt['proj4String'],
            SearchRadius: opt['searchRadius'],
            SearchRadiusUnit: opt['searchRadiusUnit'],
            MaxResults: opt['maxResults'],
            ReturnFeatureAttributes: opt['returnFeatureAttributes'],
            FeatureAttributesToReturn: opt['featureAttributesToReturn'],
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    /**
     * 
     * @param {string} queryLayer 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
    *     srid:number,
    *     proj4String:string,
    *     distance:number,
    *     distanceUnit:DistanceUnit,
    *     maxResults:number,
    *     returnFeatureAttributes:boolean
    *     featureAttributesToReturn:string[]}} options 
    */
    getFeaturesWithinDistance(layerName, wkt, callback, options) {
        if (layerName === undefined || layerName === null || layerName === '') {
            throw new Error('Missing the required parameter \'layerName\' when calling getFeaturesWithinDistance');
        }
        if (wkt === undefined || wkt === null || wkt === '') {
            throw new Error('Missing the required parameter \'wkt\' when calling getFeaturesWithinDistance');
        }
        let opt = options || {};

        let path = '/api/v1/maps/query/{queryLayer}/within-distance';
        let httpMethod = 'GET';
        let pathParams = {
            queryLayer: layerName,
        };
        let queryParams = {
            Wkt: wkt,
            Srid: opt['srid'],
            Proj4String: opt['proj4String'],
            Distance: opt['distance'],
            DistanceUnit: opt['distanceUnit'],
            MaxResults: opt['maxResults'],
            ReturnFeatureAttributes: opt['returnFeatureAttributes'],
            FeatureAttributesToReturn: opt['featureAttributesToReturn'],
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    /**
     * 
     * @param {string} layerName 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'|'nearest'|'within-distance'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
     *     srid:number,
     *     proj4String:string,
     *     distance:number,
     *     distanceUnit:DistanceUnit,
     *     searchRadius:number,
     *     searchRadiusUnit:DistanceUnit,
     *     maxResults:number,
     *     returnFeatureAttributes:boolean
     *     featureAttributesToReturn:string[]}} options 
     */
    getFeaturesCustom(layerName, wkt, queryType, callback, options){
        if (layerName === undefined || layerName === null || layerName === '') {
            throw new Error('Missing the required parameter \'layerName\' when calling getFeaturesCustom');
        }
        if (wkt === undefined || wkt === null || wkt === '') {
            throw new Error('Missing the required parameter \'wkt\' when calling getFeaturesCustom');
        }
        if (queryType === undefined || queryType === null || queryType === '') {
            throw new Error('Missing the required parameter \'queryType\' when calling getFeaturesCustom');
        }
        let opt = options || {};

        let path = '/api/v1/maps/query/custom';
        let httpMethod = 'POST';
        let pathParams = {};
        let queryParams = {};
        let bodyParam = JSON.stringify({
            QueryLayer: layerName,
            QueryType: queryType,
            Wkt: wkt,
            Srid: opt['srid'],
            Proj4String: opt['proj4String'],
            Distance: opt['distance'],
            DistanceUnit: opt['distanceUnit'],
            SearchRadius: opt['searchRadius'],
            SearchRadiusUnit: opt['searchRadiusUnit'],
            MaxResults: opt['maxResults'],
            ReturnFeatureAttributes: opt['returnFeatureAttributes'],
            FeatureAttributesToReturn: opt['featureAttributesToReturn'],
        });
        let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    /**
     * 
     * @param {function(number, object) : undefined} callback 
     */
    getLayers(callback) {
        let path = '/api/v1/maps/query/layers';
        let httpMethod = 'GET';
        let pathParams = undefined;
        let queryParams = {};
        let bodyParam = null;
        let contentTypes = '';
        let returnType = 'json';
        
        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
    
    /**
     * 
     * @param {string} queryLayer 
     * @param {function(number, object) : undefined} callback 
     */
    getAttributesOfLayer(queryLayer, callback) {
        if (queryLayer === undefined || queryLayer === null || queryLayer === '') {
            throw new Error('Missing the required parameter \'layerName\' when calling getAttributesOfLayer');
        }
        let path = '/api/v1/maps/query/{queryLayer}/attributes';
        let httpMethod = 'GET';
        let pathParams = {
            queryLayer: queryLayer,
        };
        let queryParams = undefined;
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';
        
        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    /**
     * 
     * @param {string} queryLayer 
     * @param {string} wkt 
     * @param {'within'|'containing'|'intersecting'|'overlapping'|'touching'} queryType 
     * @param {function(number, object) : undefined} callback 
     * @param {{
     *     srid:number,
     *     proj4String:string,
     *     maxResults:number,
     *     returnFeatureAttributes:boolean
     *     featureAttributesToReturn:string[]}} options 
     */
    _spatialQuery(queryLayer, wkt, queryType, callback, options){
        if (queryLayer === undefined || queryLayer === null || queryLayer === '') {
            throw new Error('Missing the required parameter \'layerName\' when calling _spatialQuery');
        }
        if (wkt === undefined || wkt === null || wkt === '') {
            throw new Error('Missing the required parameter \'wkt\' when calling _spatialQuery');
        }

        let opt = options || {};

        let path = '/api/v1/maps/query/{queryLayer}/{queryType}';
        let httpMethod = 'GET';
        let pathParams = {
            queryLayer: queryLayer,
            queryType: queryType,
        };
        let queryParams = {
            Wkt: wkt,
            Srid: opt['srid'],
            Proj4String: opt['proj4String'],
            MaxResults: opt['maxResults'],
            ReturnFeatureAttributes: opt['returnFeatureAttributes'],
            FeatureAttributesToReturn: opt['featureAttributesToReturn'],
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
}

export default MapsQueryClient;