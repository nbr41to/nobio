import { Activites } from '../Activites'
import { Top } from '../Top'
import { Profile } from '../Profile'
import { Output } from '../Output'
import { Contact } from '../Contact'
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
  )
}

const TopPage = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`
