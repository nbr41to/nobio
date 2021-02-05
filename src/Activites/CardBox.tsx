import React from 'react'
import styled from 'styled-components';
import MathTeacher from './Math.mdx'
import Programming from './Programming.mdx'
import Develop from './Develop.mdx'
type CardBoxProps = {

}

export const CardBox: React.FC<CardBoxProps> = () => {
  return (
    <StyledCardBox>
      <MathTeacher />
      <Programming />
      <Develop />
    </StyledCardBox>
  )
}

const StyledCardBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
`
