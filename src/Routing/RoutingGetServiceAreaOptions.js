import DistanceUnit from '../constants/DistanceUnit';

export default class GetServiceAreaOptions{
    /**
     * 
     */
    constructor(){
        /**
         * @type {number | undefined}
         */
        this.srid = undefined;
        /**
         * @type {string | undefined}
         */
        this.proj4String = undefined;
        /**
         * @type {number | undefined}
         */
        this.contourGranularity = undefined;
        /**
         * @type {number | undefined}
         */
        this.coordinateSnapRadius = undefined;
        /**
         * @type {DistanceUnit | undefined}
         */
        this.coordinateSnapRadiusUnit = undefined;
        /**
         * @type {DistanceUnit | undefined}
         */
        this.distanceUnit = undefined;
        /**
         * @type {'Hour' | 'Minute' | 'Second' | undefined}
         */
        this.durationUnit = undefined;
        /**
         * @type {number | undefined}
         */
        this.gridSizeInMeters = undefined;
        /**
         * @type {'Separated' | 'Merged' | undefined}
         */
        this.serviceAreaSeparationType = undefined;
        /**
         * @type {'Polygon' | 'LineString' | undefined}
         */
        this.serviceAreaType = undefined;
        /**
         * @type {'Time' | 'Distance' | undefined}
         */
        this.serviceLimitsType = undefined;
        /**
         * @type {'From' | 'To' | undefined}
         */
        this.travelDirection = undefined;
    }
}