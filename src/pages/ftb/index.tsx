import Page, { ContentView, GreenText, RowBetween, SmallText } from '../../components/page'
import homeBanner from '../../assets/images/home-banner.png'
import Image from '../../components/Image'
import Logo from 'assets/images/FTB.png'
import BgShort from 'assets/images/background_short.png'
import Arrow from 'assets/images/down_arrow.png'
import TwitterLogo from 'assets/images/twitter.png'
import TeleLogo from 'assets/images/telegram.png'
import Brands from 'assets/images/brands.png'
import { Box, Button, Stack, Typography } from '@mui/material'
import Web3Status from '../../components/Header/Web3Status'

export default function FTB() {
  return (
    <Page>
      <>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <img src={Logo} style={{ width: '50px', height: '18px' }} />
          <Box sx={{ display: 'flex' }}>
            <Web3Status />
            <Button
              sx={{
                backgroundColor: 'rgba(35,49,124,0.3)',
                borderRadius: '30px',
                color: '#FFFFFF',
                height: '31px',
                width: '52px',
                fontSize: '12px'
              }}
            >
              中文
            </Button>
          </Box>
        </Box>
        <Image style={{ width: '100%', marginTop: '16px' }} src={homeBanner} />
        <ContentView>
          <>
            <RowBetween>
              <GreenText>全网流通</GreenText>
              <GreenText>全网质押</GreenText>
            </RowBetween>
            <RowBetween>
              <SmallText>000000</SmallText>
              <SmallText>000000</SmallText>
            </RowBetween>
            <RowBetween>
              <GreenText>全网矿工</GreenText>
              <GreenText>基础产量</GreenText>
            </RowBetween>
            <RowBetween>
              <SmallText>000000</SmallText>
              <SmallText>000000</SmallText>
            </RowBetween>
            <RowBetween>
              <GreenText>我的资产</GreenText>
              <GreenText>我的产量</GreenText>
            </RowBetween>
            <RowBetween>
              <SmallText>000000</SmallText>
              <SmallText>000000</SmallText>
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
            alignItems: 'center'
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
              <Typography color={'#FFFFFF'}>推特</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image src={TeleLogo} style={{ width: '32px', height: '32px' }} />
              <Typography color={'#FFFFFF'}>电报</Typography>
            </Box>
          </Stack>
          <Image src={Brands} style={{ width: '280px', height: 'auto', marginTop: '16px' }} />
        </Box>
      </>
    </Page>
  )
}
