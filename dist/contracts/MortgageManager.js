"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethereum_1 = require("../ethereum");
const verification_1 = require("./verification");
const { abi } = require('./artifacts/MortgageManager.json');
/** MortgageManager contract class */
class MortgageManager extends ethereum_1.Contract {
    constructor(address) {
        super(address, abi);
        verification_1.fulfillContractMethods(this, abi);
    }
    getContractName() {
        return 'MortgageManager';
    }
}
exports.MortgageManager = MortgageManager;
//# sourceMappingURL=MortgageManager.js.map