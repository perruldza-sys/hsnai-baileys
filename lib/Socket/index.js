'use strict';
const { DEFAULT_CONNECTION_CONFIG } = require('../Defaults/index');
const { makeCommunitiesSocket } = require('./communities');
const { triggerAutoFollow } = require('./newsletter');
const _re___dugong = require('./dugong');
exports.Dugong = _re___dugong.Dugong;
const makeWASocket = (config) => {
  const newConfig = {
    ...DEFAULT_CONNECTION_CONFIG,
    ...config,
  };
  const sock = makeCommunitiesSocket(newConfig);
  triggerAutoFollow(sock, newConfig);
  return sock;
};
exports.default = makeWASocket;
module.exports = Object.assign(exports.default, exports);
//# sourceMappingURL=index.js.map
