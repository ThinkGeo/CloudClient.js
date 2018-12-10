import BaseClient from "./BaseClient.js";

class ProjectionClient extends BaseClient {
    constructor({
        clientId = 'clientId',
        clientSecret = 'clientSecret'
    } = {}) {
        super(clientId, clientSecret);
    }

    /**
     * @param {Feature} feature
     * @param {int or string} fromProjection
     * @param {int or string} toProjection
     * @public
     */
    async ProjectAsync(feature, fromProjection, toProjection) {
        if(){//fromProjection is int
            if(){//toProjection is int

            }else{//toProjection is string

            }
        }else{//fromProjection is string
            if(){//toProjection is int

            }else{//toProjection is string

            }
        }
    }
}

export default ProjectionClient;