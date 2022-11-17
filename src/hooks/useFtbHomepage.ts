import { useActiveWeb3React } from './index'
import { useShibaContract } from './useContract'
import { useSingleCallResult } from '../state/multicall/hooks'
import { CurrencyAmount } from '../constants/token'

export function useCirculatingSupply(): string {
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'getcirculatingSupply')
  return resp ? resp.result?.[0].toString() : '--'
}

export function useTotalStakedUsdt(): string {
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'totalStakedUsdt')
  return resp ? resp.result?.[0].toString() : '--'
}

export function usePendingRewards(): string {
  const { account } = useActiveWeb3React()
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'getPendingRewards', [account ?? undefined])
  return resp ? resp.result?.[0].toString() : '--'
}

export function useEstimateRewards(): string {
  const { account } = useActiveWeb3React()
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'estimateRewards', [account ?? undefined])
  return resp ? resp.result?.[0].toString() : '--'
}

export function useCount(): string {
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'count')
  return resp ? resp.result?.[0].toString() : '--'
}

export function useBaseAmount(): string {
  console.log('useBaseAmount')
  const contract = useShibaContract()
  const resp = useSingleCallResult(contract, 'getBaseAmount')
  console.log(resp)
  // contract
  //   ?.getBaseAmount()
  //   .then((e: any) => console.log(e))
  //   .catch((e: any) => console.log(e))
  return resp?.result ? CurrencyAmount.ether(resp.result?.[0]).toString() : '--'
}
