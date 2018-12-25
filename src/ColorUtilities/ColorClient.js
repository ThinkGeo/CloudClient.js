/**
 * @module T/ColorClient
 */

import BaseClient from './BaseClient.js';

class ColorClient extends BaseClient {
    constructor(clientId = 'clientId', clientSecret = 'clientSecret') {
        super(clientId, clientSecret);
    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    GetColorsInAnalogousFamily(color = 'GeoColor', numberOfColors){

    }

    async GetColorsInAnalogousFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    async GetColorsInComplementaryFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    async GetColorsInContrastingFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    async GetColorsInHueFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    async GetColorsInQualityFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    async GetColorsInTetradFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    async GetColorsInTriadFamilyAsync(color = 'GeoColor', numberOfColors) {

    }
}

export default ColorClient;