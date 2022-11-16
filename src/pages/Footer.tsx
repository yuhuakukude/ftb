import { Box, styled, Typography } from '@mui/material'
import HomePageIcon from 'assets/images/football.png'
import MiningIcon from 'assets/images/mining.png'
import SettingIcon from 'assets/images/setting.png'
import FooterBg from 'assets/images/solid_bg.png'

const ImageWrapper = styled('img')`
  width: 30px;
  height: 28px;
`

const TabText = styled(Typography)`
  color: white;
  font-size: 16px;
`

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        position: 'relative',
        left: '0',
        bottom: '0',
        padding: '4px 40px',
        backgroundImage: `url(${FooterBg})`
      }}
    >
      <Box>
        <ImageWrapper src={HomePageIcon} />
        <TabText>FTB</TabText>
      </Box>

      <Box>
        <ImageWrapper src={MiningIcon} />
        <TabText>挖矿</TabText>
      </Box>

      <Box>
        <ImageWrapper src={SettingIcon} />
        <TabText>功能</TabText>
      </Box>
    </Box>
  )
}
