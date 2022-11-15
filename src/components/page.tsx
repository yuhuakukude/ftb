import { Box, Stack, styled, Typography } from '@mui/material'
import baseBG from '../assets/images/base-bg.png'

export default function Page({ children }: { children: JSX.Element }) {
  return (
    <Box
      sx={{
        width: { xs: '100vw' },
        padding: { xs: 20 },
        background: `url(${baseBG})`,
        backgroundSize: '200%',
        backgroundPosition: 'center'
      }}
    >
      {children}
    </Box>
  )
}

function ContentView({ children }: { children: JSX.Element }) {
  return (
    <Stack sx={{ padding: '18px 15px', backgroundColor: 'rgba(15,15,49,0.650)' }} spacing={23}>
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
