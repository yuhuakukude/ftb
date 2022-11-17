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
import { useFtbInfo } from '../../hooks/useFtbHomepage'
import { useActiveWeb3React } from '../../hooks'
import { shortenText } from '../../utils'
import useCopyClipboard from '../../hooks/useCopyClipboard'

export default function FTB() {
  const { supply, staked, count, baseAmount, pendingRewards, estimateRewards } = useFtbInfo()
  const { account } = useActiveWeb3React()
  const [isCopied, setCopied] = useCopyClipboard()
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
              <SmallText>{staked}</SmallText>
            </RowBetween>
            <RowBetween>
              <GreenText>全网矿工</GreenText>
              <GreenText>基础产量</GreenText>
            </RowBetween>
            <RowBetween>
              <SmallText>{count}</SmallText>
              <SmallText>{baseAmount}/天</SmallText>
            </RowBetween>
            <RowBetween>
              <GreenText>我的资产</GreenText>
              <GreenText>我的产量</GreenText>
            </RowBetween>
            <RowBetween>
              <SmallText>{pendingRewards}</SmallText>
              <SmallText>{estimateRewards}/天</SmallText>
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
            width: '100%',
            height: '100%',
            marginTop: '16px',
            padding: '16px',
            borderRadius: '15px',
            backgroundColor: 'rgba(15,15,49,0.650)',
            backgroundRepeat: 'no-repeat',
            alignItems: 'center',
            backgroundSize: '100% 100%',
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
              <Box display={'flex'}>
                <Typography color={'white'}>
                  {account ? shortenText(`https://${window.location.host}/mining/${account}`, 8) : '--'} |
                </Typography>
                <Typography
                  color={isCopied ? '#67768a' : '#84CFFF'}
                  marginLeft={4}
                  onClick={() => {
                    setCopied(`https://${window.location.host}/mining/${account}`)
                  }}
                >
                  复制
                </Typography>
              </Box>
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
