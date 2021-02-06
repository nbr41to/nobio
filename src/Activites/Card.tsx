import React from 'react'
import { FadeInWrapper } from 'src/FadeInWrapper'
import styled from 'styled-components'

type CardProps = {
  title: string
  bgImgSrc: string
}

export const Card: React.FC<CardProps> = ({ title, bgImgSrc, children }) => {
  return (
    <FadeInWrapper>
      <StyledCard bgImgSrc={bgImgSrc}>
        <h3>{title}</h3>
        <div className='sentents'>
          {children}
        </div>
      </StyledCard>
    </FadeInWrapper>
  )
}

const StyledCard = styled.div<{ bgImgSrc: string }>`
  width: 300px;
  height: 300px;
  line-height: 24px;
  padding: 12px 18px;
  margin: 16px;
  border-radius: 4px;
  box-shadow: 3px 3px 8px #999;
  h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 8px 12px;
    border-bottom: 2px solid #333;
    text-align: center;
  }
  .sentents{
    margin: 12px 8px;
    background-image: url(${({ bgImgSrc }) => bgImgSrc});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color:rgba(255,255,255,0.7);
    background-blend-mode:lighten;
  }
`
