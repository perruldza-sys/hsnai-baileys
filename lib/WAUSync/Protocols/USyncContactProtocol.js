'use strict';
const { assertNodeErrorFree } = require('../../WABinary/index');
const { USyncUser } = require('../USyncUser');
class USyncContactProtocol {
exports.USyncContactProtocol = USyncContactProtocol;
    constructor() {
        this.name = 'contact';
    }
    getQueryElement() {
        return {
            tag: 'contact',
            attrs: {}
        };
    }
    getUserElement(user) {
        //TODO: Implement type / username fields (not yet supported)
        return {
            tag: 'contact',
            attrs: {},
            content: user.phone
        };
    }
    parser(node) {
        if (node.tag === 'contact') {
            assertNodeErrorFree(node);
            return node?.attrs?.type === 'in';
        }
        return false;
    }
}
//# sourceMappingURL=USyncContactProtocol.js.map