import Page, { ContentView, GreenText, RowBetween, SmallText } from '../../components/page'
import homeBanner from '../../assets/images/home-banner.png'
import Image from '../../components/Image'
import BgShort from 'assets/images/background_short.png'
import Arrow from 'assets/images/down_arrow.png'
import TwitterLogo from 'assets/images/twitter.png'
import TeleLogo from 'assets/images/telegram.png'
import Brands from 'assets/images/brands.png'
import BgMedium from 'assets/images/background.png'
import { Box, Stack, Typography } from '@mui/material'
import {
  useBaseAmount,
  useCirculatingSupply,
  useCount,
  useEstimateRewards,
  usePendingRewards,
  useTotalStakedUsdt
} from '../../hooks/useFtbHomepage'

export default function FTB() {
  const supply = useCirculatingSupply()
  const stack = useTotalStakedUsdt()
  const count = useCount()
  const baseAmount = useBaseAmount()
  const pendingReward = usePendingRewards()
  const estimateReward = useEstimateRewards()
  return (
    <Page>
      <>
        <Image
          style={{
            width: '100%'
          }}
          src={homeBanner}
        />
        <ContentView>
          <>
            <RowBetween>
              <GreenText>全网流通</GreenText>
              <GreenText>全网质押</GreenText>
            </RowBetween>
            <RowBetween>
              <SmallText>{supply}</SmallText>
              <SmallText>{stack}</SmallText>
            </RowBetween>
            <RowBetween>
              <GreenText>全网矿工</GreenText>
              <GreenText>基础产量</GreenText>
            </RowBetween>
            <RowBetween>
              <SmallText>{count}</SmallText>
              <SmallText>{baseAmount}</SmallText>
            </RowBetween>
            <RowBetween>
              <GreenText>我的资产</GreenText>
              <GreenText>我的产量</GreenText>
            </RowBetween>
            <RowBetween>
              <SmallText>{pendingReward}</SmallText>
              <SmallText>{estimateReward}</SmallText>
            </RowBetween>
          </>
        </ContentView>
        <Box
          sx={{
            padding: '12px',
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '75px',
            backgroundSize: 'cover',
            backgroundImage: `url(${BgShort})`
          }}
        >
          <GreenText>项目简介</GreenText>
          <img style={{ alignSelf: 'right', width: '15px', height: '7px' }} src={Arrow} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '16px',
            padding: '16px',
            borderRadius: '15px',
            backgroundColor: 'rgba(15,15,49,0.650)',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${BgMedium})`
          }}
        >
          <GreenText>邀请信息</GreenText>
          <Stack spacing={16} sx={{ width: '100%', marginTop: '20px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <GreenText>我的推荐链接</GreenText>
              <Typography color={'#FFFFFF'}>XXX人</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <GreenText>我的上级</GreenText>
              <Typography color={'#FFFFFF'}>XXX人</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <GreenText>一代</GreenText>
              <Typography color={'#FFFFFF'}>XXX人</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <GreenText>二代</GreenText>
              <Typography color={'#FFFFFF'}>XXX人</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <GreenText>三代</GreenText>
              <Typography color={'#FFFFFF'}>XXX人</Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            padding: '12px',
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
            borderRadius: '15px',
            backgroundColor: 'rgba(15,15,49,0.650)'
          }}
        >
          <GreenText>社区交流</GreenText>
          <Stack
            direction="row"
            spacing={50}
            sx={{
              justifyContent: 'center',
              background: 'rgba(54,101,174,0.3)',
              width: '90%',
              padding: '10px',
              marginTop: '16px',
              borderRadius: '10px'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image src={TwitterLogo} style={{ width: '32px', height: '32px' }} />
              <Typography color={'#FFFFFF'} marginLeft={10}>
                推特
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image src={TeleLogo} style={{ width: '32px', height: '32px' }} />
              <Typography color={'#FFFFFF'} marginLeft={10}>
                电报
              </Typography>
            </Box>
          </Stack>
          <Image src={Brands} style={{ width: '280px', height: 'auto', marginTop: '16px' }} />
        </Box>
      </>
    </Page>
  )
}
