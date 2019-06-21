import { Contract } from '../ethereum';
const { abi } = require('./artifacts/ERC20BondedToken.json')

/** RegistryTCR contract class */
export class ERC20BondedToken extends Contract {
    constructor(address: string) {
        super(address, abi)
    }
    
    getContractName() {
        return 'ERC20BondedToken'
    }
}
