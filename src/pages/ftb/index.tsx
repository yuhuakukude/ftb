import Page, { ContentView, GreenText, RowBetween, SmallText } from '../../components/page'
import homeBanner from '../../assets/images/home-banner.png'
import Image from '../../components/Image'
import BgShort from 'assets/images/background_short.png'
import Arrow from 'assets/images/down_arrow.png'
import TwitterLogo from 'assets/images/twitter.png'
import TeleLogo from 'assets/images/telegram.png'
import Brands from 'assets/images/brands.png'
import BgMedium from 'assets/images/background.png'
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material'
import { useFtbInfo } from '../../hooks/useFtbHomepage'
import { useActiveWeb3React } from '../../hooks'
import { shortenAddress, shortenText } from '../../utils'
import useCopyClipboard from '../../hooks/useCopyClipboard'
import { CurrencyAmount } from '../../constants/token'
import { useUserInfo } from '../../hooks/useMInt'

interface DescInfo {
  indent: number
  text: string
}

const Desc: DescInfo[] = [
  { indent: 0, text: '币名：Football' },
  { indent: 0, text: '简称：FTB' },
  { indent: 0, text: '代币总量：1000万' },
  { indent: 0, text: '机制：' },
  { indent: 1, text: '1%销毁' },
  { indent: 1, text: '2%回流' },
  { indent: 1, text: '2%营销' },
  { indent: 0, text: '币量分配：45%产出' },
  { indent: 1, text: '50%添加资金池 ' },
  { indent: 1, text: '5%市值钱包（项目方控盘钱包，所有人可查询）' },
  { indent: 0, text: '注意：' },
  { indent: 0, text: '1.此代币10天之内只能卖不能买，参与者投资全部进流动池，螺旋上升机制' },
  { indent: 0, text: '2.卖出30%（每天降低2.5%）最终5%（第11天正式上线买卖税为5%）' },
  { indent: 0, text: '3.正式上线前20秒杀机器人' },
  { indent: 0, text: '' },
  { indent: 0, text: 'DAPP  ' },
  { indent: 1, text: '1.登录即绑定钱包并生成邀请链接' },
  { indent: 1, text: '2.参与者需支付10u激活账号开始挖矿，每天产出1000枚，总计10天10000枚' },
  { indent: 1, text: '3.参与者可邀请同伴为其加速（最少邀请2人，否则不加速），一代加速5%，二代加速3%，三代加速1%' },
  { indent: 0, text: '举例：' },
  { indent: 0, text: '邀请2名一代直推，可以获得10%加速，每天产出1100枚' },
  { indent: 0, text: '邀请3名一代直推，可以获得15%加速，每天产出1150枚' },
  { indent: 0, text: '邀请4名一代直推，可以获得20%加速，每天产出1200枚' },
  { indent: 0, text: '以此类推。。。。。' }
]

export default function FTB() {
  const { supply, staked, count, baseAmount, pendingRewards, estimateRewards } = useFtbInfo()
  const { account } = useActiveWeb3React()
  const [isCopied, setCopied] = useCopyClipboard()
  const { subordinatesL1, subordinatesL2, subordinatesL3, inviter } = useUserInfo()
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
              <SmallText>{CurrencyAmount.ftb(supply).toFixed(2)}</SmallText>
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
              <SmallText>{CurrencyAmount.ftb(pendingRewards).toFixed(2)}</SmallText>
              <SmallText>{estimateRewards}/天</SmallText>
            </RowBetween>
          </>
        </ContentView>
        <Accordion
          sx={{
            padding: '12px',
            marginTop: '16px',
            width: '100%',
            backgroundSize: '100% 100%',
            backgroundImage: `url(${BgShort})`,
            backgroundColor: 'transparent'
          }}
        >
          <AccordionSummary
            expandIcon={<img style={{ alignSelf: 'right', width: '15px', height: '7px' }} src={Arrow} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <GreenText>项目简介</GreenText>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '0 16px 16px 16px' }}>
            {Desc.map((desc, index) => {
              return (
                <Typography sx={{ textIndent: desc.indent == 1 ? '16px' : '0' }} key={index} color={'white'}>
                  {desc.text}
                </Typography>
              )
            })}
          </AccordionDetails>
        </Accordion>

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
              <Typography color={'#FFFFFF'}>{shortenAddress(inviter)}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <GreenText>一代</GreenText>
              <Typography color={'#FFFFFF'}>{subordinatesL1}人</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <GreenText>二代</GreenText>
              <Typography color={'#FFFFFF'}>{subordinatesL2}人</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <GreenText>三代</GreenText>
              <Typography color={'#FFFFFF'}>{subordinatesL3}人</Typography>
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
          <Image src={Brands} style={{ width: '100%', height: 'auto', marginTop: '16px' }} />
        </Box>
      </>
    </Page>
  )
}
