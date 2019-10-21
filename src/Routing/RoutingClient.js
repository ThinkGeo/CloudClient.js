import BaseClient from '../Advanced/BaseClient';
import RoutingGetRouteOptions from './RoutingGetRouteOptions';
import RoutingGetServiceAreaOptions from './RoutingGetServiceAreaOptions';
import RoutingGetCostMatrixOptions from './RoutingGetCostMatrixOptions';
import RoutingOptimizationOptions from './RoutingOptimizationOptions';

class RoutingClient extends BaseClient {
    constructor (apiKey){
        super(apiKey);
    }

    /**
     * 
     * @param {{x:number, y:number}[]} waypoints 
     * @param {function(number, object) : undefined} callback 
     * @param {RoutingGetRouteOptions | undefined} options 
     */
    getRoute(waypoints, callback, options){
        let opts = options || {};
        
        let coordinatesString = waypoints
            .map(item => item.y + ',' + item.x)
            .join(';');
        
        let path = '/api/v1/route/{coordinates}';
        let httpMethod = 'GET';
        let pathParams = {
            coordinates: coordinatesString,
        };
        let queryParams = {
            Srid: opts.srid,
            Proj4String: opts.proj4String,
            TurnByTurn: opts.turnByTurn,
            CoordinateSnapRadius: opts.coordinateSnapRadius,
            CoordinateSnapRadiusUnit: opts.coordinateSnapRadiusUnit,
            DistanceUnit: opts.distanceUnit,
            DurationUnit: opts.durationUnit,
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    /**
     * 
     * @param {number} pointY 
     * @param {number} pointX 
     * @param {number[]} serviceLimits 
     * @param {function(number, object) : undefined} callback 
     * @param {RoutingGetServiceAreaOptions | undefined} options 
     */
    getServiceArea(pointY, pointX, serviceLimits, callback, options){
        let opts = options || {};
        
        let path = '/api/v1/service-area/{pointY},{pointX}';
        let httpMethod = 'GET';
        let pathParams = {
            pointX: pointX,
            pointY: pointY,
        };
        let queryParams = {
            ServiceLimits: serviceLimits,
            Srid: opts.srid,
            Proj4String: opts.proj4String,
            ContourGranularity: opts.contourGranularity,
            CoordinateSnapRadius: opts.coordinateSnapRadius,
            CoordinateSnapRadiusUnit: opts.coordinateSnapRadiusUnit,
            DistanceUnit: opts.distanceUnit,
            DurationUnit: opts.durationUnit,
            GridSizeInMeters: opts.gridSizeInMeters,
            ServiceAreaSeparationType: opts.serviceAreaSeparationType,
            ServiceAreaType: opts.serviceAreaType,
            ServiceLimitsType: opts.serviceLimitsType,
            TravelDirection: opts.travelDirection,
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }

    /**
     * 
     * @param {{x:number, y:number}[]} origins
     * @param {{x:number, y:number}[]} destinations
     * @param {function(number, object) : undefined} callback 
     * @param {RoutingGetCostMatrixOptions | undefined} options 
     */
    getCostMatrix(origins, destinations, callback, options) {
        const innerOptions = options || {};

        let originsString = origins
            .map(item => item.y + ',' + item.x)
            .join(';');

        let destinationsString = destinations
            .map(item => item.y + ',' + item.x)
            .join(';');
        
        const queryParams = {
            origins: originsString,
            destinations: destinationsString,
            costMatrixType: innerOptions.costMatrixType,
            srid: innerOptions.srid,
            proj4String: innerOptions.proj4String,
            coordinateSnapRadius: innerOptions.coordinateSnapRadius,
            coordinateSnapRadiusUnit: innerOptions.coordinateSnapRadiusUnit,
            durationUnit: innerOptions.durationUnit,
            distanceUnit: innerOptions.distanceUnit
        };

        this.callApi('/api/v1/route/matrix', 'GET', {}, queryParams, null, undefined, [], 'json', callback);
    }

    /**
     * 
     * @param {{x:number, y:number}[]} coordinates 
     * @param {function(number, object) : undefined} callback 
     * @param {RoutingOptimizationOptions | undefined} options 
     */
    optimization(coordinates, callback, options) {
        let opts = options || {};
        
        let coordinatesString = coordinates
            .map(item => item.y + ',' + item.x)
            .join(';');
        
        let path = '/api/v1/route/optimization/{coordinates}';
        let httpMethod = 'GET';
        let pathParams = {
            coordinates: coordinatesString,
        };
        let queryParams = {
            CoordinateSnapRadius: opts.coordinateSnapRadius,
            CoordinateSnapRadiusUnit: opts.coordinateSnapRadiusUnit,
            Destination: opts.destination,
            DistanceUnit: opts.distanceUnit,
            DurationUnit: opts.durationUnit,
            Proj4String: opts.proj4String,
            Roundtrip: opts.roundtrip,
            Source: opts.source,
            Srid: opts.srid,
            TurnByTurn: opts.turnByTurn,
        };
        let bodyParam = null;
        let contentTypes = [];
        let returnType = 'json';

        this.callApi(path, httpMethod, pathParams, queryParams, bodyParam, undefined, contentTypes, returnType, callback);
    }
}

export default RoutingClient;