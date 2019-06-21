import { Contract } from '../ethereum';
const { abi } = require('./artifacts/RegistryFactory.json')

/** RegistryTCR contract class */
export class RegistryFactory extends Contract {
    constructor(address: string) {
        super(address, abi)
    }
    
    getContractName() {
        return 'RegistryFactory'
    }
}
