import styled from 'styled-components';
import { Accordion } from 'src/Accordion'
import { Heading } from 'src/Heading'
import TestMdx from 'src/about-markdown/test.mdx'
import { FadeInWrapper } from 'src/FadeInWrapper';
export default function Home() {
  return (
    <TopPage>
      <Heading id='###'>about me.</Heading>
      <p>過去の経験から見えてきた自分の信念や大切にしていることをここに記録</p>
      <FadeInWrapper>
        <Accordion label='Accordionです' labelColor='#fff' bgColor='#3549fc'>
          <p>中身を書いていくぅ！！</p>
        </Accordion>
        <Accordion label='Accordionです' labelColor='#fff' bgColor='#f7a145'>
          <TestMdx />
        </Accordion>
        <Accordion label='Accordionです' labelColor='#fff' bgColor='#3549fc'>
          <p>中身を書いていくぅ！！</p>
        </Accordion>
        <Accordion label='Accordionです' labelColor='#fff' bgColor='#f7a145'>
          <p>中身を書いていくぅ！！</p>
        </Accordion>
        <Accordion label='Accordionです' labelColor='#fff' bgColor='#3549fc'>
          <p>中身を書いていくぅ！！</p>
        </Accordion>
        <Accordion label='Accordionです' labelColor='#fff' bgColor='#f7a145'>
          <p>中身を書いていくぅ！！</p>
        </Accordion>
        <Accordion label='Accordionです' labelColor='#fff' bgColor='#3549fc'>
          <p>中身を書いていくぅ！！</p>
        </Accordion>
        <Accordion label='Accordionです' labelColor='#fff' bgColor='#f7a145'>
          <p>中身を書いていくぅ！！</p>
        </Accordion>
      </FadeInWrapper>
    </TopPage>
  )
}

const TopPage = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`
