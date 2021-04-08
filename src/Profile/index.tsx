import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Heading } from 'src/Heading'
import { FadeInWrapper } from 'src/FadeInWrapper'
import styled from 'styled-components'
import ProfileMdx from './Profile.mdx'
export const Profile: React.FC = () => {
  return (
    <>
      <Heading id='profile'>Profile</Heading>
      <FadeInWrapper>
        <StyledProfile>
          <div className='myphoto'>
            <Image className='myphoto' src='/myphoto.png' width={240} height={240} />
          </div>
          <ProfileMdx />
          <Link href='/about'><StyledMoreDetails>... more details</StyledMoreDetails></Link>
        </StyledProfile>
      </FadeInWrapper>
    </>
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
    z-index: -1;
  }
`
const StyledMoreDetails = styled.a`
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #444;
  background: linear-gradient(to left,#fff, #D6E8FF, #fff);
  &:hover {
    cursor: pointer;
    background: linear-gradient(to left,#fff, peachpuff, #fff);
    transition: 0.8s;
  }
  &:active {
    background: linear-gradient(to left,#fff, orange, #fff);
    color: #fff;
  }
`
