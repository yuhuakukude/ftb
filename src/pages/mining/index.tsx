import { Box, Button, Stack, styled, Typography } from '@mui/material'
import Banner from 'assets/images/mining_banner.png'
import Tx from 'assets/images/tx_4d.png'
import { GreenText } from '../../components/page'
import ApproveFtb from 'assets/images/approve_ftb.png'
import MaxBtn from 'assets/images/max_btn.png'
import MinningBg1 from 'assets/images/mining_1.png'
import MinningBg2 from 'assets/images/mining_2.png'
import { auto } from '@popperjs/core'
import { FTB_ADDRESS, USDT } from '../../constants'
import { useActiveWeb3React } from '../../hooks'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { tryParseAmount } from '../../utils/parseAmount'
import { useParams } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import useModal from '../../hooks/useModal'
import { useDeposit, useDepositInfo, useUserInfo } from '../../hooks/useMInt'
import TransactionSubmittedModal from '../../components/Modal/TransactionModals/TransactiontionSubmittedModal'
import MessageBox from '../../components/Modal/TransactionModals/MessageBox'
import TransactionPendingModal from 'components/Modal/TransactionModals/TransactionPendingModal'
import { toDeltaTimer } from '../../components/Timer'
import { SimpleProgress } from '../../components/Progress'
import { shortenText } from '../../utils'
import Copy from '../../components/essential/Copy'

const OptBtn = styled(Button)`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  color: #ffffff !important;
  &:disabled {
    opacity: 0.5;
  }
`

const BlueBtn = styled(OptBtn)`
  background: linear-gradient(0deg, #2043b3 0%, #55c1ee 100%);
  border-image: linear-gradient(0deg, #20429e, #afc2ff) 2 2;
  box-shadow: 0px 13px 31px 1px rgba(69, 93, 171, 0.4), 0px -9px 18px 0px rgba(10, 5, 62, 0.36);
`

const GreenBtn = styled(OptBtn)`
  background: linear-gradient(0deg, #0d7225 0%, #88fda1 100%);
  border-image: linear-gradient(0deg, #176b25, #beffc7) 2 2;
  box-shadow: 0px 13px 31px 1px rgba(71, 171, 69, 0.4), 0px -9px 18px 0px rgba(5, 62, 10, 0.39);
`

const MyCurrency = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const EnterFtbBox = styled('div')`
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  border-image: linear-gradient(84deg, #1f6198, #69c05c, #256993) 10 10;
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.18), 0px 9px 18px 0px rgba(23, 23, 23, 0.27);
`

const UstdInput = styled(Box)`
  width: 100%;
  height: 50px;
  background: #0e1540;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-image: linear-gradient(84deg, #1f6198, #69c05c, #256993) 10 10;
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.18), 0px 9px 18px 0px rgba(23, 23, 23, 0.27);
`

const ProgressText = styled(Typography)`
  height: 30px;
  color: #ffffff;
  position: absolute;
  font-size: 14px;
  width: 100%;
  text-align: right;
  z-index: 8;
  top: 0;
  line-height: 30px;
  padding-right: 8px;
`

export default function Mining() {
  const ROUND_DURING = 20 * 60
  const CLAIM_DURING = 2 * 60
  const params = useParams()
  const { deposit, claim } = useDeposit()
  const { showModal, hideModal } = useModal()
  const { claimedAmount, rewards, lastClaimedTime, claimedCount, startStakedTime } = useUserInfo()
  const { chainId, account } = useActiveWeb3React()
  const depositAmount = tryParseAmount('10', USDT[chainId ?? 56])
  const [approvalState, approveCallback] = useApproveCallback(depositAmount, FTB_ADDRESS[chainId ?? 56])
  const { startTime } = useDepositInfo()
  console.log('startTime', startTime ? ROUND_DURING - ((Date.now() / 1000 - startTime) % ROUND_DURING) : '---')
  const leftTime = toDeltaTimer(startTime ? ROUND_DURING - ((Date.now() / 1000 - startTime) % ROUND_DURING) : 0)
  console.log('leftTime', leftTime)
  const claimTime = useMemo(() => {
    if (!lastClaimedTime) {
      return CLAIM_DURING
    } else {
      if (lastClaimedTime === '0') {
        if (!startStakedTime) {
          return CLAIM_DURING
        } else {
          return Date.now() / 1000 - startStakedTime
        }
      } else {
        return Date.now() / 1000 - lastClaimedTime
      }
    }
  }, [CLAIM_DURING, lastClaimedTime, startStakedTime])

  console.log('claimTime', Number(Date.now()), lastClaimedTime.toString(), claimTime)
  const depositCallback = useCallback(async () => {
    showModal(<TransactionPendingModal />)
    deposit(params?.inviter)
      .then(() => {
        hideModal()
        showModal(<TransactionSubmittedModal />)
      })
      .catch((err: any) => {
        hideModal()
        showModal(
          <MessageBox type="error">{err.error && err.error.message ? err.error.message : err?.message}</MessageBox>
        )
        console.error(err)
      })
  }, [showModal, deposit, params?.inviter, hideModal])
  const claimCallback = useCallback(async () => {
    showModal(<TransactionPendingModal />)
    claim()
      .then(() => {
        hideModal()
        showModal(<TransactionSubmittedModal />)
      })
      .catch((err: any) => {
        hideModal()
        showModal(
          <MessageBox type="error">{err.error && err.error.message ? err.error.message : err?.message}</MessageBox>
        )
        console.error(err)
      })
  }, [showModal, claim, hideModal])

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 'auto'
      }}
    >
      <img
        src={Banner}
        style={{
          width: '90%',
          height: 'auto'
        }}
      />
      <Box
        sx={{
          display: 'flex',
          padding: '10px',
          width: '90%',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${MinningBg1})`,
            backgroundSize: '100% 100%',
            padding: '20px'
          }}
        >
          <UstdInput>
            <img src={Tx} style={{ width: '30px', height: '30px' }} />
            <GreenText>10 USDT</GreenText>
          </UstdInput>
          <Box mt={20} display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{ width: '100%' }}>
            <BlueBtn disabled={approvalState !== ApprovalState.NOT_APPROVED} onClick={approveCallback}>
              {approvalState === ApprovalState.PENDING
                ? '授权中'
                : approvalState === ApprovalState.APPROVED
                ? '已授权'
                : '授权'}
            </BlueBtn>
            <GreenBtn
              onClick={depositCallback}
              disabled={approvalState !== ApprovalState.APPROVED || (claimedCount && Number(claimedCount) % 10 === 0)}
              sx={{ marginLeft: 20 }}
            >
              抵押
            </GreenBtn>
          </Box>
          <Typography mt={40} textAlign={'center'} color={'white'}>
            距离本次挖矿结束:{leftTime}
          </Typography>
          <Box display={'flex'} alignItems={'center'} marginTop={10}>
            <Box flex={1} sx={{ position: 'relative' }}>
              <SimpleProgress width={'100%'} hideValue val={Math.min(claimTime, CLAIM_DURING)} total={CLAIM_DURING} />
              <ProgressText>剩余 {toDeltaTimer(CLAIM_DURING - Math.min(claimTime, CLAIM_DURING))}</ProgressText>
            </Box>
            <GreenBtn onClick={claimCallback} sx={{ width: 80, height: 30 }}>
              领取
            </GreenBtn>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px'
            }}
          >
            <Typography color={'white'}>
              已领取：{claimedAmount ? claimedAmount?.toFixed(2).toString() : '--'}FTB
            </Typography>
            <Typography color={'white'}>可领取：{rewards ? rewards?.toFixed(2).toString() : '--'}FTB</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px'
            }}
          >
            <GreenText>分享邀请链接</GreenText>
            <Box display={'flex'} alignItems={'center'}>
              <Typography mr={10} color={'white'}>
                {shortenText('https://' + window.location.host + '/mining/' + account, 6)}
              </Typography>
              <Copy toCopy={'https://' + window.location.host + '/mining/' + account} />
            </Box>
          </Box>
        </Box>
        <Stack
          spacing={20}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: `url(${MinningBg2})`,
            backgroundSize: '100% 100%',
            padding: '20px',
            marginTop: '10px',
            width: '100%',
            height: 'auto'
          }}
        >
          <GreenText>质押FTB分红BNB</GreenText>
          <MyCurrency>
            <GreenText>分红池</GreenText>
            <Typography color={'white'}>0.306295 BNB</Typography>
          </MyCurrency>
          <MyCurrency>
            <GreenText>我的质押</GreenText>
            <Typography color={'white'}>0.00000000 FTB</Typography>
          </MyCurrency>
          <MyCurrency>
            <GreenText>我可分红</GreenText>
            <Typography color={'white'}>0 BNB</Typography>
          </MyCurrency>
          <MyCurrency>
            <GreenText>已领分红</GreenText>
            <Typography color={'white'}>0.000000 BNB</Typography>
          </MyCurrency>
          <img src={ApproveFtb} style={{ width: '120px', height: 'auto' }} />
          <EnterFtbBox>
            <Typography color={'white'}>0 FTB</Typography>
            <img src={MaxBtn} width={50} height={auto} />
          </EnterFtbBox>
          <Stack
            spacing={60}
            direction={'row'}
            width={'100%'}
            height={'120px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <GreenBtn onClick={claimCallback}>领取</GreenBtn>
            <GreenBtn onClick={claimCallback}>解除</GreenBtn>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
