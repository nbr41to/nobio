import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export const Top: React.FC = () => {
  return (
    <StyledTop>
      <div className='catchcopy'>
        {/* <div>学ぶことで人生を変える</div> */}
        <div>好奇心で生きていく</div>
      </div>
      <div className='eyecatch'>
        <Image src='/book-lovers.png' width={500} height={500} />
      </div>
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
    font-size: 28px;
    font-weight: bold;
    line-height: 42px;
    margin: 0 32px;
  }
  .eyecatch {
    margin: -80px 0;
  }
`
