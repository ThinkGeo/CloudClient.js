/**
 * @module T/ElevationClient
 */

import BaseClient from './BaseClient.js';

class ElevationClient extends BaseClient {
    constructor(clientId = 'clientId', clientSecret = 'clientSecret') {
        super(clientId, clientSecret);
    }

    /**
     * @param {double} x
     * @param {double} y
     * @param {int or string} pointProjection
     * @param {DistanceUnit} elevationUnit
     * @returns {double}
     * @public
     */
    async GetElevationOfPointAsync(x, y, pointProjection, elevationUnit) {
        if (Number.isInteger(pointProjection)) { //int pointProjectionInSrid

        } else { //string pointProjectionInProj4String

        }
    }

    /**
     * @param {IEnumerable<PointShape>} points
     * @param {int or string} pointProjection
     * @param {DistanceUnit} elevationUnit
     * @public
     */
    async GetElevationOfPointsAsync(points, pointsProjection, elevationUnit) {
        if (Number.isInteger(pointProjection)) { //int pointProjectionInSrid

        } else { //string pointProjectionInProj4String

        }
    }

    /**
     * @param {LineBaseShape} line
     * @param {int or string} lineProjection
     * @param {int or double} numberOfSegments
     * @param {DistanceUnit} elevationUnit
     * @public
     */
    async GetElevationOfLineAsync(line, lineProjection, numberOfSegments, elevationUnit) {
        if (Number.isInteger(lineProjection)) { //lineProjection is int
            if () { //numberOfSegments is int

            } else { //numberOfSegments is double

            }
        } else { //lineProjection is string
            if () { //numberOfSegments is int

            } else { //numberOfSegments is double

            }
        }
    }

    /**
     * @param {LineShape} line
     * @param {int or string} lineProjection
     * @param {double or int} intervalDistance(numberOfSegments)
     * @param {DistanceUnit} intervalDistanceUnit(elevationUnit)
     * @param {DistanceUnit} elevationUnit
     * @public
     */
    async GetGradeOfLineAsync(line, lineProjection, intervalDistance, {
        intervalDistanceUnit = 'intervalDistanceUnit'
    } = {}, elevationUnit) {
        if (Number.isInteger(lineProjection)) { //lineProjection is int
            if () { //intervalDistance is int

            } else { //intervalDistance is double: only when intervalDistance is double to accept intervalDistanceUnit value.

            }
        } else { //lineProjection is string
            if () { //intervalDistance is int

            } else { //intervalDistance is double: only when intervalDistance is double to accept intervalDistanceUnit value.

            }
        }
    }

    /**
     * @param {AreaBaseShape} area
     * @param {int or string} projection
     * @param {double} intervalDistance
     * @param {DistanceUnit} intervalDistanceUnit
     * @param {DistanceUnit} elevationUnit
     * @public
     */
    async GetElevationOfAreaAsync(area, projection, intervalDistance, intervalDistanceUnit, elevationUnit) {
        if(Number.isInteger(projection)){//lineProjection is int

        }else{//lineProjection is string(projectionInProj4String)

        }
    }
}

export default ElevationClient;