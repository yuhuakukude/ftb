import { Box, styled, Typography } from '@mui/material'
import HomePageIcon from 'assets/images/football.png'
import MiningIcon from 'assets/images/mining.png'
import SettingIcon from 'assets/images/setting.png'
import FooterBg from 'assets/images/solid_bg.png'
import { NavLink } from 'react-router-dom'
import { routes } from '../constants/routes'

const ImageWrapper = styled('img')`
  width: 30px;
  height: 28px;
`

const TabText = styled(Typography)`
  color: white;
  font-size: 16px;
`

const Nav = styled(NavLink)`
  text-decoration: none;
`

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        position: 'fixed',
        left: '0',
        bottom: '0',
        padding: '4px 40px',
        backgroundSize: '100% 100%',
        backgroundImage: `url(${FooterBg})`
      }}
    >
      <Nav to={routes.ftb}>
        <Box>
          <ImageWrapper src={HomePageIcon} />
          <TabText>FTB</TabText>
        </Box>
      </Nav>

      <Nav to={routes.mining}>
        <Box>
          <ImageWrapper src={MiningIcon} />
          <TabText>挖矿</TabText>
        </Box>
      </Nav>

      <Nav to={routes.func}>
        <Box>
          <ImageWrapper src={SettingIcon} />
          <TabText>功能</TabText>
        </Box>
      </Nav>
    </Box>
  )
}
