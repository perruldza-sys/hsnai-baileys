'use strict';
const nodeCrypto = require('crypto');
const { generateKeyPair } = require('libsignal/src/curve');
function generateSenderKey() {
exports.generateSenderKey = generateSenderKey;
    return nodeCrypto.randomBytes(32);
}
function generateSenderKeyId() {
exports.generateSenderKeyId = generateSenderKeyId;
    return nodeCrypto.randomInt(2147483647);
}
function generateSenderSigningKey(key) {
exports.generateSenderSigningKey = generateSenderSigningKey;
    if (!key) {
        key = generateKeyPair();
    }
    return {
        public: Buffer.from(key.pubKey),
        private: Buffer.from(key.privKey)
    };
}
//# sourceMappingURL=keyhelper.js.map