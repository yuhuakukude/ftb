import { Box, Button } from '@mui/material'
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
        <Button
          sx={{
            backgroundColor: 'rgba(35,49,124,0.3)',
            borderRadius: '30px',
            color: '#FFFFFF',
            height: '31px',
            width: '52px',
            fontSize: '12px',
            marginLeft: '10px'
          }}
        >
          中文
        </Button>
      </Box>
    </Box>
  )
}
