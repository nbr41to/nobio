import styled from 'styled-components';
import { Accordion } from 'src/Accordion';
import CareerMdx from 'src/about-markdown/career.mdx';
import FeatureMdx from 'src/about-markdown/feature.mdx';
import InterestMdx from 'src/about-markdown/interest.mdx';
import OtherMdx from 'src/about-markdown/other.mdx';
import { FadeInWrapper } from 'src/FadeInWrapper';
import { Heading } from 'src/Heading';
export default function Home() {
  return (
    <AboutPage>
      <Heading>About me.</Heading>
      <p>私について</p>
      <FadeInWrapper>
        <Accordion label='Career' labelColor='#fff' bgColor='#f7a145'>
          <CareerMdx />
        </Accordion>
        <Accordion label='Feature' labelColor='#fff' bgColor='#3549fc'>
          <FeatureMdx />
        </Accordion>
        <Accordion label='Interest' labelColor='#fff' bgColor='#f7a145'>
          <InterestMdx />
        </Accordion>
        <Accordion label='Other' labelColor='#fff' bgColor='#3549fc'>
          <OtherMdx />
        </Accordion>
      </FadeInWrapper>
    </AboutPage>
  );
}

const AboutPage = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  .about-description {
    margin: 8px 8px 20px;
  }
`;
