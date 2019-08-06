import BaseClient from '../Advanced/BaseClient';
import RoutingGetRouteOptions from './RoutingGetRouteOptions';
import RoutingGetServiceAreaOptions from './RoutingGetServiceAreaOptions';

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
        
        let coordinatesString;
        waypoints.forEach((waypoint, index) => {
            if (index === 0){
                coordinatesString = (waypoint.y + ',' + waypoint.x);
            }
            else{
                coordinatesString += (';' + waypoint.y + ',' + waypoint.x);
            }
        });
        
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

    getCostMatrix(options, callback) {
        const innerOptions = options || {};
        const queryParams = {
            origins: innerOptions.origins,
            destinations: innerOptions.destinations,
            costmatrixtype: innerOptions.costmatrixtype,
        };

        this.callApi('/api/v1/route/matrix', 'GET', {}, queryParams, null, undefined, [], 'json', callback);
    }
}

export default RoutingClient;