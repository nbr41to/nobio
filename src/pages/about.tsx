import styled from 'styled-components';
import { Accordion } from 'src/Accordion'
import { Heading } from 'src/Heading'
import TestMdx from 'src/about-markdown/test.mdx'
import { FadeInWrapper } from 'src/FadeInWrapper';
export default function Home() {
  return (
    <AboutPage>
      <Heading id='###'>about me.</Heading>
      <FadeInWrapper>
        <p className='about-description'>過去の経験から見えてきた自分の性質や特性に加えて,信念や大切にしていることをここに記録していきます.</p>
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
    </AboutPage>
  )
}

const AboutPage = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  .about-description {
    margin: 8px 8px 20px;
  }
`
