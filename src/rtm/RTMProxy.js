'use strict'

const RTMConfig = require('./RTMConfig');

class RTMProxy {

    constructor(endpoint) {

        this._endpoint = endpoint;
        this._targetEndpoint = null;
    }

    get endpoint() {

        return this._endpoint;
    }

    get targetEndpoint() {

        return this._targetEndpoint;
    }

    set targetEndpoint(value) {

        this._targetEndpoint = value;
    }

    buildProxyData(data) {

        return RTMConfig.MsgPack.encode({ endpoint: this._targetEndpoint, data: data });
    }
}

module.exports = RTMProxy;