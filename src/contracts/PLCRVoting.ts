import { Contract } from '../ethereum'
const { abi } = require('./artifacts/PLCRVoting.json')

/** PLCRVoting contract class */
export class PLCRVoting extends Contract {
  constructor(address: string) {
    super(address, abi)
  }

  getContractName() {
    return 'PLCRVoting'
  }
}
