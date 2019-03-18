import { Contract } from '../ethereum'
const { abi } = require('./artifacts/Registry.json')

/** RegistryTCR contract class */
export class RegistryTCR extends Contract {
  constructor(address: string) {
    super(address, abi)
  }

  getContractName() {
    return 'RegistryTCR'
  }
}
