'use strict';
const { proto } = require('../../WAProto/index');
// export the WAMessage Prototypes
exports.WAProto = proto;
const WAMessageStubType = proto.WebMessageInfo.StubType;
exports.WAMessageStubType = WAMessageStubType;
const WAMessageStatus = proto.WebMessageInfo.Status;
exports.WAMessageStatus = WAMessageStatus;
var WAMessageAddressingMode;
exports.WAMessageAddressingMode = WAMessageAddressingMode;
(function (WAMessageAddressingMode) {
    WAMessageAddressingMode["PN"] = "pn";
    WAMessageAddressingMode["LID"] = "lid";
})(WAMessageAddressingMode || (WAMessageAddressingMode = {}));
//# sourceMappingURL=Message.js.map