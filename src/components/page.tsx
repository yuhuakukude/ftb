import { Box, Stack, styled, Typography } from '@mui/material'
import BgMedium from '../assets/images/background.png'

export default function Page({ children }: { children: JSX.Element }) {
  return (
    <Box
      sx={{
        width: '1200px',
        padding: '0 20px 20px 20px'
      }}
    >
      {children}
    </Box>
  )
}

function ContentView({ children }: { children: JSX.Element }) {
  return (
    <Stack
      sx={{
        padding: '18px 15px',
        width: '100%',
        height: '100%',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${BgMedium})`
      }}
      spacing={20}
    >
      {children}
    </Stack>
  )
}

const RowBetween = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
`
const GreenText = styled(Typography)`
  color: #60e963;
  font-size: 18px;
`
const SmallText = styled(Typography)`
  color: #f1f1f1;
`

const Title = styled(Typography)`
  width: 100%;
  color: #60e963;
  font-size: 20px;
  text-align: center;
`

export { RowBetween, GreenText, SmallText, ContentView, Title }
