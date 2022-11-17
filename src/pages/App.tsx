import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { styled } from '@mui/material'
import Header from '../components/Header'
import Polling from '../components/essential/Polling'
import Popups from '../components/essential/Popups'
import Web3ReactManager from '../components/essential/Web3ReactManager'
import { ModalProvider } from 'context/ModalContext'
import FBT from '../pages/ftb'
import Footer from './Footer'
import Function from './func'
import Mining from './mining'
import baseBG from '../assets/images/base-bg.png'

const AppWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: '100vh'
  }
}))

const ContentWrapper = styled('div')({
  width: '100%',
  maxHeight: '100vh',
  overflow: 'auto',
  alignItems: 'center',
  background: `url(${baseBG})`,
  backgroundSize: '200%',
  backgroundPosition: 'center'
})

const BodyWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: `calc(100vh - ${theme.height.header} - ${theme.height.footer})`,
  alignItems: 'center',
  flex: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
  position: 'relative',
  marginBottom: '60px',
  [theme.breakpoints.down('md')]: {
    minHeight: `calc(100vh - ${theme.height.header} - ${theme.height.mobileHeader})`
  }
}))

export default function App() {
  return (
    <Suspense fallback={null}>
      <ModalProvider>
        <AppWrapper id="app">
          <ContentWrapper>
            <Header />
            <BodyWrapper id="body">
              <Popups />
              <Polling />
              <Web3ReactManager>
                <Routes>
                  <Route path="/" element={<FBT />} />
                  <Route path="/function" element={<Function />} />
                  <Route path="/mining/:inviter" element={<Mining />} />
                  <Route path="/mining" element={<Mining />} />
                </Routes>
              </Web3ReactManager>
            </BodyWrapper>
            <Footer />
          </ContentWrapper>
        </AppWrapper>
      </ModalProvider>
    </Suspense>
  )
}
