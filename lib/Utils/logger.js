'use strict';
const _mod_pino = require('pino');
const P = _mod_pino.default !== undefined ? _mod_pino.default : _mod_pino;
exports.default = P({ timestamp: () => `,"time":"${new Date().toJSON()}"` });
module.exports = Object.assign(exports.default, exports);
//# sourceMappingURL=logger.js.map