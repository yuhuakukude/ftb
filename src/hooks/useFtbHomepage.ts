import { useActiveWeb3React } from './index'
import { useShibaContract } from './useContract'
import { useSingleCallResult } from '../state/multicall/hooks'
import { CurrencyAmount } from '../constants/token'

function getStringFromBigNumber(resp: any): string {
  return resp?.result?.[0] ? CurrencyAmount.ether(resp.result?.[0]).toFixed(2).toString() : '0'
}

function getStringFromNumber(resp: any): string {
  return resp?.result?.[0] ? resp.result?.[0].toString() : '0'
}

export function useCirculatingSupply(): string {
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'getcirculatingSupply')
  return getStringFromNumber(resp)
}

export function useTotalStakedUsdt(): string {
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'totalStakedUsdt')
  return getStringFromBigNumber(resp)
}

export function usePendingRewards(): string {
  const { account } = useActiveWeb3React()
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'getPendingRewards', [account ?? undefined])
  return getStringFromNumber(resp)
}

export function useEstimateRewards(): string {
  const { account } = useActiveWeb3React()
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'estimateRewards', [account ?? undefined])
  return getStringFromBigNumber(resp)
}

export function useCount(): string {
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'count')
  return getStringFromNumber(resp)
}

export function useBaseAmount(): string {
  console.log('useBaseAmount')
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'getBaseAmount')
  return getStringFromBigNumber(resp)
}

export interface FtbInfo {
  supply: string
  staked: string
  pendingRewards: string
  estimateRewards: string
  count: string
  baseAmount: string
}

export function useFtbInfo(): FtbInfo {
  return {
    supply: useCirculatingSupply(),
    staked: useTotalStakedUsdt(),
    pendingRewards: usePendingRewards(),
    estimateRewards: useEstimateRewards(),
    count: useCount(),
    baseAmount: useBaseAmount()
  }
}
