import { ChainId } from '@subswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.BSC_MAINNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.BSC_TESTNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.HECO_MAINNET]: '0x32e8ae564b34f64579d023dB15aF04D85a64e278',
  [ChainId.DVM_TESTNET]: '0x53f36b0d31703E34a6D8d0D0d5e7D32C4CB7947c',
  [ChainId.DVM_CRAB]: '0x309d39ae99a2689782E5675D7352E0eA64D41c7E'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
