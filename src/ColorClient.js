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
    // GetColorsInAnalogousFamily(color = 'GeoColor', numberOfColors){

    // }

    async GetColorsInAnalogousFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    // GetColorsInComplementaryFamily(color, numberOfColors){

    // }

    async GetColorsInComplementaryFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    // GetColorsInContrastingFamily(color, numberOfColors){

    // }

    async GetColorsInContrastingFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    // GetColorsInHueFamily(color, numberOfColors){

    // }

    async GetColorsInHueFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    // GetColorsInQualityFamily(color, numberOfColors){

    // }

    async GetColorsInQualityFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    // GetColorsInTetradFamily(color, numberOfColors){

    // }

    async GetColorsInTetradFamilyAsync(color = 'GeoColor', numberOfColors) {

    }

    /**
     * @param {GeoColor} color
     * @param {int} numberOfColors
     * @public
     */
    // GetColorsInTriadFamily(color, numberOfColors){

    // }

    async GetColorsInTriadFamilyAsync(color = 'GeoColor', numberOfColors) {

    }
}

export default ColorClient;