import { useTransactionAdder } from '../state/transactions/hooks'
import { useShibaContract } from './useContract'
import { useActiveWeb3React } from './index'
import { useCallback } from 'react'
import { calculateGasMargin } from '../utils'
import { TransactionResponse } from '@ethersproject/providers'
import { useSingleCallResult } from '../state/multicall/hooks'

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

  return {
    deposit
  }
}

export function useDepositInfo() {
  const contract = useShibaContract()
  const startTimeRes = useSingleCallResult(contract, 'startTime')
  return {
    startTime: startTimeRes.result?.[0]
  }
}
