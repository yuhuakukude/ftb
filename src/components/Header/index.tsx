import { Box } from '@mui/material'
import Web3Status from './Web3Status'
import Logo from '../../assets/images/FTB.png'

export default function Header() {
  return (
    <Box
      sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}
    >
      <img src={Logo} style={{ width: '50px', height: '18px' }} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Web3Status />
      </Box>
    </Box>
  )
}
