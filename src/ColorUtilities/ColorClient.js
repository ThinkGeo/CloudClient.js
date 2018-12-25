/**
 * @module T/ColorClient
 */

import BaseClient from './BaseClient.js';

class ColorClient extends BaseClient {
    constructor(clientId = 'clientId', clientSecret = 'clientSecret') {
        super(clientId, clientSecret);
    }

    GetColorsInAnalogousFamily(){

    }

    GetColorsInComplementaryFamily(){
        
    }
}

export default ColorClient;