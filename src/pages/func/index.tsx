import { Box, Stack, styled, Typography } from '@mui/material'
import { GreenText } from '../../components/page'
import TransBg from 'assets/images/transform_bg.png'
import FuncBg from 'assets/images/function_main_bg.png'
import FTBImg from 'assets/images/ftb_img.png'
import TitleImg from 'assets/images/title.png'
import RuleImg from 'assets/images/rule_desc.png'
import TransBtn from 'assets/images/dapp_btn.png'
import TransformIcon from 'assets/images/transform.png'
import CheckIcon from 'assets/images/check.png'
import ApproveBtn from 'assets/images/approve.png'
import IncomeBtn from 'assets/images/incomes.png'

const BuyBtn = styled(Typography)`
  background-image: url(${TransBg});
  background-size: cover;
  width: 170px;
  height: 42px;
  color: white;
  padding: 20px 0 0 50px;
`

const ImgWrapper = styled('img')`
  background-size: cover;
  width: 100%;
`

const IconWrapper = styled('img')`
  width: 40px;
  height: 40px;
`
const CenterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ToolText = styled(Typography)`
  color: white;
  align-content: center;
  width: auto;
  text-align: center;
`
export default function Function() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100%',
        padding: '8px 12px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <GreenText>限时免费</GreenText>
        <GreenText
          sx={{
            width: '100%',
            marginTop: '20px'
          }}
        >
          相同数量
        </GreenText>
        <Box display={'flex'} justifyContent={'space-between'} marginTop={10}>
          <BuyBtn>批量转账(主网币)</BuyBtn>
          <BuyBtn>批量转账(代币)</BuyBtn>
        </Box>
        <GreenText
          sx={{
            width: '100%',
            marginTop: '10px'
          }}
        >
          不同数量
        </GreenText>
        <Box display={'flex'} justifyContent={'space-between'} marginTop={10}>
          <BuyBtn>批量转账(主网币)</BuyBtn>
          <BuyBtn>批量转账(代币)</BuyBtn>
        </Box>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        sx={{
          backgroundImage: `url(${FuncBg})`,
          backgroundSize: 'cover',
          padding: '10px'
        }}
      >
        <ImgWrapper src={FTBImg} />
        <Typography color={'white'}>代币总量:1000万</Typography>
        <ImgWrapper src={TitleImg} />
        <ImgWrapper src={RuleImg} />
        <Typography
          sx={{
            backgroundColor: 'rgba(96,202,59,0.3)',
            padding: '12px 6px',
            marginTop: '10px',
            color: 'white'
          }}
        >
          注意： 1.此代币前10天只能卖不能买，等到第11天开盘后开放交 易，参与者投资全部进流动池，螺旋上升机制。
          2.卖出30%（
        </Typography>
        <ImgWrapper src={TransBtn} />
        <Typography color={'white'}>
          1.登录即绑定钱包并生成邀请链接 2.参与者需支付10u激活账号开始挖矿 每天产出1000枚，总计10天10000枚 3.参与
        </Typography>
      </Box>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <GreenText>免费工具</GreenText>
        <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
          <CenterBox>
            <IconWrapper src={TransformIcon} />
            <ToolText>NFT转账(erc721)</ToolText>
          </CenterBox>
          <CenterBox>
            <IconWrapper src={CheckIcon} />
            <ToolText>代币安全检测(限免)</ToolText>
          </CenterBox>
          <CenterBox>
            <IconWrapper src={ApproveBtn} />
            <ToolText>授权与查询</ToolText>
          </CenterBox>
          <CenterBox>
            <IconWrapper src={IncomeBtn} />
            <ToolText>年化收益换算</ToolText>
          </CenterBox>
        </Stack>
      </Box>
    </Box>
  )
}
