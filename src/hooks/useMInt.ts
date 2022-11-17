import { useTransactionAdder } from '../state/transactions/hooks'
import { useShibaContract } from './useContract'
import { useActiveWeb3React } from './index'
import { useCallback } from 'react'
import { calculateGasMargin, isAddress } from '../utils'
import { TransactionResponse } from '@ethersproject/providers'
import { useSingleCallResult } from '../state/multicall/hooks'
import { CurrencyAmount } from '../constants/token'
import { ZERO_ADDRESS } from '../constants'

export function useDeposit() {
  const addTransaction = useTransactionAdder()
  const contract = useShibaContract()
  const { account } = useActiveWeb3React()
  const deposit = useCallback(
    async (inviter: string | undefined) => {
      if (!account) throw new Error('none account')
      if (!contract) throw new Error('none contract')
      const args = [inviter]
      const method = 'buy'
      console.log('🚀 ~ file: useBuyBong.ts ~ line 18 ~ args', args, method)
      return contract.estimateGas[method](...args, { from: account }).then(estimatedGasLimit => {
        return contract[method](...args, {
          gasLimit: calculateGasMargin(estimatedGasLimit),
          // gasLimit: '3500000',
          from: account
        }).then((response: TransactionResponse) => {
          addTransaction(response, {
            summary: `质押 10 USDT`
          })
          return response.hash
        })
      })
    },
    [account, addTransaction, contract]
  )

  const claim = useCallback(async () => {
    if (!account) throw new Error('none account')
    if (!contract) throw new Error('none contract')
    const method = 'claim'
    console.log('🚀 ~ file: useBuyBong.ts ~ line 18 ~ args', method)
    return contract.estimateGas[method]({ from: account }).then(estimatedGasLimit => {
      return contract[method]({
        gasLimit: calculateGasMargin(estimatedGasLimit),
        // gasLimit: '3500000',
        from: account
      }).then((response: TransactionResponse) => {
        addTransaction(response, {
          summary: `领取奖励`
        })
        return response.hash
      })
    })
  }, [account, addTransaction, contract])

  return {
    deposit,
    claim
  }
}

export function useDepositInfo() {
  const contract = useShibaContract()
  const startTimeRes = useSingleCallResult(contract, 'startTime')
  return {
    startTime: startTimeRes.result?.[0]
  }
}

export function useUserInfo() {
  const { account } = useActiveWeb3React()
  const contract = useShibaContract()
  const userRes = useSingleCallResult(contract, 'userInfo', [account ?? undefined])
  const rewardsRes = useSingleCallResult(contract, 'getPendingRewards', [account ?? undefined])
  const res = userRes?.result
  return {
    startStakedTime: res ? Number(res.startStakedTime) : 0,
    lastClaimedTime: res ? Number(res.lastClaimedTime) : 0,
    claimedAmount: res ? CurrencyAmount.ftb(res.claimedAmount) : undefined,
    claimedCount: res ? CurrencyAmount.ftb(res.claimedCount) : undefined,
    subordinatesL1: res ? res.subordinatesL1 + res.subordinatesL2 + res.subordinatesL3 : 0,
    inviter: res ? res.inviter : ZERO_ADDRESS,
    rewards: rewardsRes?.result ? CurrencyAmount.ftb(rewardsRes?.result?.[0]) : undefined
  }
}

export function useInviterInfo(inviter: string) {
  const contract = useShibaContract()
  const args = isAddress(inviter) ? inviter : ZERO_ADDRESS
  const userRes = useSingleCallResult(contract, 'userInfo', [args])
  const res = userRes?.result
  return {
    able: res ? Number(res.startStakedTime) : 0
  }
}
