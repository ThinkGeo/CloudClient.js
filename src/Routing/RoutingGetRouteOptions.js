import DistanceUnit from '../constants/DistanceUnit';

export default class RoutingGetRouteOptions{
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
         * @type {boolean | undefined}
         */
        this.turnByTurn = undefined;
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
    }
}