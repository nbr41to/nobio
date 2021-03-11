import Image from 'next/image'
import React from 'react'
import { FadeInWrapper } from 'src/FadeInWrapper'
import styled from 'styled-components'

export const Top: React.FC = () => {
  return (
    <StyledTop>
      <FadeInWrapper>
        <div className='eyecatch'>
          <Image className='eyecatch' src='/book-lovers.png' width={360} height={360} />
        </div>
        <div className='catchcopy'>
          <div>学ぶことで人生を変え、</div>
          <div>愛と好奇心で生きていく</div>
        </div>
      </FadeInWrapper>
    </StyledTop>
  )
}

const StyledTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .catchcopy {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    font-weight: bold;
    line-height: 42px;
    margin: 0 32px;
  }
  .eyecatch {
    margin: -40px 0 -48px 20px;
    z-index: -1;
  }
`
