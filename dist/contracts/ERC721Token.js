"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethereum_1 = require("../ethereum");
const verification_1 = require("./verification");
const { abi } = require('./artifacts/ERC721Token.json');
/** ERC721Token contract class */
class ERC721Token extends ethereum_1.Contract {
    constructor(address) {
        super(address, abi);
        verification_1.fulfillContractMethods(this, abi);
    }
    getContractName() {
        return 'ERC721Token';
    }
}
exports.ERC721Token = ERC721Token;
//# sourceMappingURL=ERC721Token.js.map