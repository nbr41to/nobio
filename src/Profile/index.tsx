import Image from 'next/image'
import React from 'react'
import { Heading } from 'src/Heading'
import styled from 'styled-components'
import Profiles from './Profiles.mdx'
export const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <Heading>Profile</Heading>
      <div className='myphoto'>
        <Image className='myphoto' src='/myphoto.png' width={240} height={240} />
      </div>
      <Profiles />
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .myphoto {
    border-radius: 50%;
    margin: 38px;
  }
`
