import DistanceUnit from '../constants/DistanceUnit';

export default class RoutingOptimizationOptions{
    /**
     * 
     */
    constructor(){
        /**
         * @type {boolean | undefined}
         */
        this.roundtrip = undefined;
        /**
         * @type {'Any' | 'First' | undefined}
         */
        this.source = undefined;
        /**
         * @type {'Any' | 'Last' | undefined}
         */
        this.destination = undefined;
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
        /**
         * @type {number | undefined}
         */
        this.srid = undefined;
        /**
         * @type {string | undefined}
         */
        this.proj4String = undefined;
    }
}