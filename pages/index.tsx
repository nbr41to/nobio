import { Activites } from '../src/Activites';
import { Top } from '../src/Top';
import { Profile } from '../src/Profile';
import { Output } from '../src/Output';
import { Contact } from '../src/Contact';
import styled from 'styled-components';

export default function Home() {
  return (
    <TopPage>
      <Top />
      <Profile />
      <Activites />
      <Output />
      <Contact />
    </TopPage>
  );
}

const TopPage = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;
