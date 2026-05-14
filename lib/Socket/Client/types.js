'use strict';
const { EventEmitter } = require('events');
const { URL } = require('url');
class AbstractSocketClient extends EventEmitter {
exports.AbstractSocketClient = AbstractSocketClient;
    constructor(url, config) {
        super();
        this.url = url;
        this.config = config;
        this.setMaxListeners(0);
    }
}
//# sourceMappingURL=types.js.map