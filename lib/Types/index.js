'use strict';
const _star___Auth = require('./Auth');
Object.keys(_star___Auth).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Auth[k], enumerable: true }); });
const _star___GroupMetadata = require('./GroupMetadata');
Object.keys(_star___GroupMetadata).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___GroupMetadata[k], enumerable: true }); });
const _star___Chat = require('./Chat');
Object.keys(_star___Chat).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Chat[k], enumerable: true }); });
const _star___Contact = require('./Contact');
Object.keys(_star___Contact).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Contact[k], enumerable: true }); });
const _star___State = require('./State');
Object.keys(_star___State).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___State[k], enumerable: true }); });
const _star___Message = require('./Message');
Object.keys(_star___Message).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Message[k], enumerable: true }); });
const _star___Socket = require('./Socket');
Object.keys(_star___Socket).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Socket[k], enumerable: true }); });
const _star___Events = require('./Events');
Object.keys(_star___Events).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Events[k], enumerable: true }); });
const _star___Product = require('./Product');
Object.keys(_star___Product).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Product[k], enumerable: true }); });
const _star___Call = require('./Call');
Object.keys(_star___Call).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Call[k], enumerable: true }); });
const _star___Signal = require('./Signal');
Object.keys(_star___Signal).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Signal[k], enumerable: true }); });
const _star___Bussines = require('./Bussines');
Object.keys(_star___Bussines).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Bussines[k], enumerable: true }); });
const _star___Newsletter = require('./Newsletter');
Object.keys(_star___Newsletter).forEach(k => { if (k !== 'default') Object.defineProperty(exports, k, { get: () => _star___Newsletter[k], enumerable: true }); });
var DisconnectReason;
exports.DisconnectReason = DisconnectReason;
(function (DisconnectReason) {
  DisconnectReason[(DisconnectReason["connectionClosed"] = 428)] =
    "connectionClosed";
  DisconnectReason[(DisconnectReason["connectionLost"] = 408)] =
    "connectionLost";
  DisconnectReason[(DisconnectReason["connectionReplaced"] = 440)] =
    "connectionReplaced";
  DisconnectReason[(DisconnectReason["timedOut"] = 408)] = "timedOut";
  DisconnectReason[(DisconnectReason["loggedOut"] = 401)] = "loggedOut";
  DisconnectReason[(DisconnectReason["badSession"] = 500)] = "badSession";
  DisconnectReason[(DisconnectReason["restartRequired"] = 515)] =
    "restartRequired";
  DisconnectReason[(DisconnectReason["multideviceMismatch"] = 411)] =
    "multideviceMismatch";
  DisconnectReason[(DisconnectReason["forbidden"] = 403)] = "forbidden";
  DisconnectReason[(DisconnectReason["unavailableService"] = 503)] =
    "unavailableService";
})(DisconnectReason || (DisconnectReason = {}));
//# sourceMappingURL=index.js.map
