import Image from 'next/image'
import React from 'react'
import { FadeInWrapper } from 'src/FadeInWrapper'
import styled from 'styled-components'
import PhilosophySentents from './philosophy.mdx'

export const Philosophy: React.FC = () => {
  return (
    <FadeInWrapper>
      <StyledPhilosophy>
        <Image src='/philosophy.png' width={960} height={540} />
        <PhilosophySentents />
      </StyledPhilosophy>
    </FadeInWrapper>
  )
}

const StyledPhilosophy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
`
