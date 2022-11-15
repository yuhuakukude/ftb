import Page, { ContentView, GreenText, RowBetween, SmallText, Title } from '../../components/page'
import homeBanner from '../../assets/images/home-banner.png'
import Image from '../../components/Image'

export default function FTB() {
  return (
    <Page>
      <>
        <Image style={{ width: '100%' }} src={homeBanner} />
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
        <ContentView>
          <Title />
        </ContentView>
      </>
    </Page>
  )
}
